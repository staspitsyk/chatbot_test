'use strict';
const bcrypt = require('bcrypt');
const students = require('../../data/students.json');

students.forEach(student => student.password = bcrypt.hashSync(student.password, 10));

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', students);
},
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Students', null, {});
  }
};