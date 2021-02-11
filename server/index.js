/* eslint-disable no-console */
require('newrelic');
const express = require('express');
const compression = require('compression');
const RelatedItems = require('../database/Item.js');

const app = express();
const PORT = 80 || process.env.PORT;

app.use(compression());

// app.get('loaderio-489cdc2c2ca92d948b8c64e029ed2254', (req, res, next) => {
//   res.send('loaderio-489cdc2c2ca92d948b8c64e029ed2254');
//   next();
// })

app.use(express.static('public'));

app.get('/api/relatedItems/:id', (req, res) => {
  const { id } = req.params;
  RelatedItems(id)
    .then((response) => {
      console.log(`Item ${id} successfully retrieved`);
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
