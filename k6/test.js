import http from 'k6/http';
import { check } from 'k6';

export let options = {
  scenarios: {
    related_test: {
      executor: 'constant-arrival-rate',
      rate: 1000,
      timeUnit: '1s',
      duration: '1m',
      preAllocatedVUs: 1,
    }
  }
}

const URL = `http://localhost:3001/api/relatedItems/`

export default function() {
  const LISTING = Math.floor(Math.random() * 10000000) + 1;
  const REQ_URL = URL + LISTING;

  let res = http.get(REQ_URL);

  check(res, {
    '<2s to completion': (r) => r.timings.duration < 2000,
    'no errors returned': (r) => !r.error,
    'all status code 200': (r) => r.status === 200
  });
};