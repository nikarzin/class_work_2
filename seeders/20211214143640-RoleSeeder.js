'use strict';
const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Roles', [
      {
        name: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Client',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const { sequelize } = queryInterface;
    await sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
    await queryInterface.bulkDelete('Roles', null, { truncate: true, restartIdentity: true });
    await sequelize.query("SET FOREIGN_KEY_CHECKS = 1");
  }
};
