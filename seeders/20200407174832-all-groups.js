const groups = require('../data/groups.json');

groups.forEach((group) => {
  group.createdAt = new Date();
  group.updatedAt = new Date();
});

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Groups', groups),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Groups', null, {}),
};
