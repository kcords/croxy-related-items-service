const { pool } = require('./index.js');

const relatedQuery = 'SELECT * FROM related_items ri where ri.listing_id = $1';
const shopQuery = 'SELECT * FROM shop_items si where si.listing_id = $1';

const Related = (id) => {
  const relatedItems = pool.query(relatedQuery, [ id ]);
  const shopItems = pool.query(shopQuery, [ id ]);

  return Promise.all([relatedItems, shopItems])
    .then( values => {
      const results = {
        id: parseInt(id),
        relatedItems: values[0].rows,
        shopItems: values[1].rows,
      }
      return results;
    })
}

module.exports = Related;