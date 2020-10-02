'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  };
  Transaction.init({
    id_user: DataTypes.INTEGER,
    origin_currency: DataTypes.STRING,
    target_currency: DataTypes.STRING,
    origin_value: DataTypes.DOUBLE,
    target_value: DataTypes.DOUBLE,
    exchange_rate: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};