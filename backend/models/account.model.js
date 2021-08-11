module.exports = (sequelize, DataTypes) => {
  const Accounts = sequelize.define(
    "Accounts",
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_level: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      verified: {
        type: DataTypes.BOOLEAN,
      },
      is_deleted: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      freezeTableName: true,
      tableName: "Accounts",
    }
  );

  return Accounts;
};
