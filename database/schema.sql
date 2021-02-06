
-- DROP DATABASE IF EXISTS related_items;
CREATE DATABASE related_items;
USE related_items;

CREATE TABLE listing (
  id SERIAL PRIMARY KEY
);

CREATE TABLE shop_items (
  id SERIAL PRIMARY KEY,
  name text,
  price money,
  imageUrl1 text,
  imageUrl2 text,
  imageUrl3 text,
  imageUrl4 text,
  description text,
  details text,
  seller text,
  shippingStatus text,
  listing_id integer,
  FOREIGN KEY(listing_id)
    REFERENCES listing(id)
);

CREATE TABLE related_items (
  id SERIAL PRIMARY KEY,
  name text,
  price money,
  imageUrl1 text,
  imageUrl2 text,
  imageUrl3 text,
  imageUrl4 text,
  description text,
  details text,
  seller text,
  shippingStatus text,
  listing_id integer,
  FOREIGN KEY(listing_id)
    REFERENCES listing(id)
);
