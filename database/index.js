const { Pool } = require('pg');

const connectionString = 'postgres://kylecordell:postgres@18.216.234.93:5432/sdc_related_service';
const pool = new Pool({connectionString});

pool.connect()
  .then(() => { console.log('Connected to the database!'); })
  .catch((err) => { console.log(err); });

module.exports = {pool};