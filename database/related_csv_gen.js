const fs = require('fs');
const path = require('path');
const faker = require('faker');
const filePath = path.join(__dirname, 'CSV');
const ws = fs.createWriteStream(`${filePath}/related_items.csv`);
  ws.on('error', (err) => {console.log('Write error!', err)})

const recordCount = 10 * 4;

ws.write('id, name, price, imageUrl1, imageUrl2, imageUrl3, imageUrl4, description, details, seller, shippingStatus, listing_id\n', 'utf-8');

let listingId = 0;

const getPhoto = () => `https://related-item-photos.s3.us-east-2.amazonaws.com/image${Math.floor(Math.random() * 1001)}.jpg`;

for (let i = 1; i <= recordCount; i += 1) {
  i % 4 === 1 ? listingId += 1 : null;

  const generateDetails = () => {
    const details = [];
    const max = Math.floor(Math.random() * (4 - 1 + 1) + 1);

    for (let i = 0; i < max; i += 1) {
      const detail = faker.commerce.productAdjective();
      details.push(detail);
    }
    return details.join(',');
  };

  const id = i;
  const name = faker.lorem.words();
  const price = faker.commerce.price();
  const imageUrl1 = getPhoto();
  const imageUrl2 = getPhoto();
  const imageUrl3 = getPhoto();
  const imageUrl4 = getPhoto();
  const description = `"${faker.commerce.productDescription()}"`;
  const details = `"${generateDetails()}"`;
  const seller = `"${faker.company.companyName()}"`;
  const shippingStatus = 'Free shipping eligible';

  const record = `${id}, ${name}, ${price}, ${imageUrl1}, ${imageUrl2}, ${imageUrl3}, ${imageUrl4}, ${description}, ${details}, ${seller}, ${shippingStatus}, ${listingId}`;

  ws.write(`${record}\n`, 'utf-8')

  if (i % (recordCount/100) === 0) {
    console.clear();
    console.log(`Process complete: ${i / (recordCount/100)}%`);
  }
}

ws.end();
