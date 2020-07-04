'use strict';
const lessons = require('../data/lessons.json');

lessons.forEach(lesson => {
  lesson.createdAt = new Date();
  lesson.updatedAt = new Date();
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Lessons', lessons);
},
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Lessons', null, {});
  }
};