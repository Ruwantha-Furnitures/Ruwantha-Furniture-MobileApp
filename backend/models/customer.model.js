module.exports = (sequelize, DataTypes) => {
  const Customers = sequelize.define(
    "Customers",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contact_number: {
        type: DataTypes.BIGINT(10),
        allowNull: false,
      },
      is_deleted: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      freezeTableName: true,
      tableName: "Customers",
    }
  );

  return Customers;
};
