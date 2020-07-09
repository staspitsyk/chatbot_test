const groupItems = require('../data/groupItems.json');

groupItems.forEach((groupItem) => {
  groupItem.createdAt = new Date();
  groupItem.updatedAt = new Date();
});

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('GroupItems', groupItems),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('GroupItems', null, {}),
};
