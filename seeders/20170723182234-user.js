'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('User', [
        { name: 'John Doe', createdAt: new Date(), updatedAt: new Date()},
        { name: 'Paco', createdAt: new Date(), updatedAt: new Date() },
      ], {});

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
