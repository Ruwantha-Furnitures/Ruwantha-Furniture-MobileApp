module.exports = (sequelize, DataTypes) => {
  const product_categories = sequelize.define(
    "product_categories",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      is_deleted: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      freezeTableName: true,
      tableName: "product_categories",
    }
  );

  return product_categories;
};
