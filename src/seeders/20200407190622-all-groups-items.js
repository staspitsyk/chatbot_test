'use strict';
const groupItems = require('../../data/groupItems.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('GroupItems', groupItems);
},
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('GroupItems', null, {});
  }
};