'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_user: {
        type: Sequelize.INTEGER
      },
      origin_currency:{
        allowNull: false,
        type: Sequelize.STRING
      },
      target_currency:{
        allowNull: false,
        type: Sequelize.STRING
      },
      origin_value:{
        allowNull:false,
        type: Sequelize.DOUBLE
      },
      target_value:{
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      exchange_rate:{
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Transactions');
  }
};