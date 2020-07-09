const lessons = require('../data/lessons.json');

lessons.forEach((lesson) => {
  lesson.createdAt = new Date();
  lesson.updatedAt = new Date();
});

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Lessons', lessons),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Lessons', null, {}),
};
