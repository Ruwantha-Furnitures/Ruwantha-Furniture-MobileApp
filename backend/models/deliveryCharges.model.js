module.exports = (sequelize, Sequelize) => {
  const DeliveryCharges = sequelize.define("delivery_charges", {
    area: {
      type: Sequelize.STRING,
    },
    amount: {
      type: Sequelize.DECIMAL,
    },
  });

  return DeliveryCharges;
};
