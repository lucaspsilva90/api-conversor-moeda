'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Historic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Historic.init({
    id_user: DataTypes.INTEGER,
    id_transaction: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Historic',
  });
  return Historic;
};