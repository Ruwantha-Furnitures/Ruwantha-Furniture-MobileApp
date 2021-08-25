module.exports = (sequelize, Sequelize) => {
  const Payment = sequelize.define("payments", {
    total_amounts: {
      type: Sequelize.DECIMAL,
    },
    is_deleted: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  });

  return Payment;
};
