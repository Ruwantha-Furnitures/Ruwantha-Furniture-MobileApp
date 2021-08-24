module.exports = (sequelize, Sequelize) => {
  const SellProducts = sequelize.define("sell_products", {
    price: {
      type: Sequelize.DECIMAL,
    },
    quantity: {
      type: Sequelize.INTEGER,
    },
    discount: {
      type: Sequelize.INTEGER,
    },
    is_deleted: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  });

  return SellProducts;
};
