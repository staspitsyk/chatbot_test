'use strict';
const bcrypt = require('bcrypt');
const teachers = require('../data/teachers.json');

teachers.forEach(teacher => {
  teacher.password = bcrypt.hashSync(teacher.password, 10)
  teacher.createdAt = new Date();
  teacher.updatedAt = new Date();
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Teachers', teachers);
},
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Teachers', null, {});
  }
};