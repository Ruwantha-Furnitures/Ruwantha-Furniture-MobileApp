module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define(
    "Products",
    {
      itemid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      width: {
        type: DataTypes.INTEGER,
      },
      height: {
        type: DataTypes.INTEGER,
      },
      discount: {
        type: DataTypes.INTEGER,
      },
      img_location: {
        type: DataTypes.STRING,
      },
    },
    {
      freezeTableName: true,
      tableName: "Products",
    }
  );

  return Products;
};
