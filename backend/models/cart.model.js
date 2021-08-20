module.exports = (sequelize, DataTypes) => {
  const carts = sequelize.define(
    "carts",
    {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      is_deleted: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      freezeTableName: true,
      tableName: "carts",
    }
  );

  return carts;
};
