const bcrypt = require('bcrypt');
const students = require('../data/students.json');

students.forEach((student) => {
  student.password = bcrypt.hashSync(student.password, 10);
  student.createdAt = new Date();
  student.updatedAt = new Date();
});

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Students', students),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Students', null, {}),
};
