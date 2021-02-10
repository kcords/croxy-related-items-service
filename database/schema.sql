
-- DROP DATABASE IF EXISTS related_items;
CREATE DATABASE sdc_related_service;
USE sdc_related_service;

CREATE TABLE listing (
  id SERIAL PRIMARY KEY
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

CREATE INDEX related_fk_index
  ON related_items("listing_id" desc);

CREATE INDEX shop_fk_index
  ON shop_items("listing_id" desc);


DROP USER IF EXISTS requester;
-- CREATE USER requester WITH PASSWORD 'CHANGE_ME!';
GRANT SELECT, UPDATE, INSERT ON TABLE listing, related_items, shop_items TO requester;

-- SELECT *, 'related' AS category FROM related_items ri
-- where ri.listing_id = 500
-- UNION
-- SELECT *, 'shop' AS category FROM shop_items si
-- where si.listing_id = 500;

