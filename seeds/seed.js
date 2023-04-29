const db = require('../config/connection');
const { User, Product } = require('../models');
const userSeeds = require('./userData.json');
const productSeeds = require('./productsData');
db.once('open', async () => {
  try {
    await Product.deleteMany({});
    await User.deleteMany({});
    await User.create(userSeeds);
    for (let i = 0; i < productSeeds.length; i++) {
      const products = await Product.create(productSeeds[i]);
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }  console.log('all done!');
  process.exit(0);
});
