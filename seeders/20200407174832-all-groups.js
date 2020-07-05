'use strict';
const groups = require('../data/groups.json');

groups.forEach(group => {
  group.createdAt = new Date();
  group.updatedAt = new Date();
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Groups', groups);
},
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Groups', null, {});
  }
};