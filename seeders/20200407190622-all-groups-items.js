'use strict';
const groupItems = require('../data/groupItems.json');

groupItems.forEach(groupItem => {
  groupItem.createdAt = new Date();
  groupItem.updatedAt = new Date();
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('GroupItems', groupItems);
},
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('GroupItems', null, {});
  }
};