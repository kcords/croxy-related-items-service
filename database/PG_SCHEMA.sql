
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
  description text,
  details text,
  seller text,
  shippingStatus text,
  listing_id integer,
  FOREIGN KEY(listing_id)
    REFERENCES listing(id)
);

CREATE TABLE shop_images (
  id SERIAL PRIMARY KEY,
  imageUrl text,
  shop_items_id integer,
  FOREIGN KEY(shop_items_id)
    REFERENCES shop_items(id)
);

CREATE TABLE related_items (
  id SERIAL PRIMARY KEY,
  name text,
  price money,
  description text,
  details text,
  seller text,
  shippingStatus text,
  listing_id integer,
  FOREIGN KEY(listing_id)
    REFERENCES listing(id)
);

CREATE TABLE related_images (
  id SERIAL PRIMARY KEY,
  imageUrl text,
  related_items_id integer,
  FOREIGN KEY(related_items_id)
    REFERENCES related_items(id)
);