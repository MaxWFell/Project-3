const productData = require('./productsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
//contains all seeds for products. These all come from our json files in the seeds folder.
  

  const products = await Product.bulkCreate(productData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();