/* eslint-disable no-console */
// const mongoose = require('mongoose');

// const db = mongoose.connect('mongodb://localhost/Related', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => { console.log('Connected to Mongo'); })
//   .catch((err) => { console.log(err); });

// module.exports = db;

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/related_service');

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully to PostgreSQL');
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = sequelize;