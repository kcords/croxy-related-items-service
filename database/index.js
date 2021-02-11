const { Pool } = require('pg');
require('dotenv').config()

const connectionString = `postgres://remote:${process.env.DB}@18.216.234.93:5432/postgres`;
const pool = new Pool({connectionString});

pool.connect()
  .then(() => { console.log('Connected to the database!'); })
  .catch((err) => { console.log(err); });

module.exports = {pool};