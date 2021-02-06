const fs = require('fs');
const path = require('path');
const faker = require('faker');
const filePath = path.join(__dirname, 'CSV');
const ws = fs.createWriteStream(`${filePath}/shop_items.csv`);
  ws.on('error', (err) => {console.log('Write error!', err)})

const recordCount = 10 * 4;

ws.write('id, name, price, photo1, photo2, photo3, photo4, description, details, seller, shippingStatus, listing_id\n', 'utf-8');

let listingId = 0;
let seller = '';

const getPhoto = () => `https://related-item-photos.s3.us-east-2.amazonaws.com/image${Math.floor(Math.random() * 1001)}.jpg`;

for (let i = 1; i <= recordCount; i += 1) {
  i % 4 === 1 ? listingId += 1 : null;
  i % 4 === 0 ? seller = `"${faker.company.companyName()}"` : null;

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
  const photo1 = getPhoto();
  const photo2 = getPhoto();
  const photo3 = getPhoto();
  const photo4 = getPhoto();
  const description = `"${faker.commerce.productDescription()}"`;
  const details = `"${generateDetails()}"`;
  // const seller = `"${faker.company.companyName()}"`;
  const shippingStatus = 'Free shipping eligible';

  const record = `${id}, ${name}, ${price}, ${photo1}, ${photo2}, ${photo3}, ${photo4}, ${description}, ${details}, ${seller}, ${shippingStatus}, ${listingId}`;

  ws.write(`${record}\n`, 'utf-8')

  if (i % (recordCount/100) === 0) {
    console.clear();
    console.log(`Process complete: ${i / (recordCount/100)}%`);
  }
}

ws.end();
