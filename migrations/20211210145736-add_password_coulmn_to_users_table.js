'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('users', 'password', Sequelize.STRING, {
      after: 'name'
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('users', 'password');
  }
};
