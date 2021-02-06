const fs = require('fs').promises;
const path = require('path');

const records = ['id'];
for (let i = 1; i <= 10000000; i += 1) {
  const id = i;

  const record = `${id}`;
  records.push(record);
}
const filePath = path.join(__dirname, 'CSV');
fs.writeFile(`${filePath}/listings.csv`, records.join('\n'))
  .then(() => {
    console.log('Success');
  })
  .catch((err) => {
    console.error(err);
  });