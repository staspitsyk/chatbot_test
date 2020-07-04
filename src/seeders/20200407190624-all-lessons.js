'use strict';
const lessons = require('../../data/lessons.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Lessons', lessons);
},
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Lessons', null, {});
  }
};