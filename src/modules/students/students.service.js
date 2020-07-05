const Students  = require('./students.model');

class StudentsService {
  async findOneByEmail(email) {
    const student = await Students.findOne({ where: { email } });

    return student;
  }
}

module.exports = new StudentsService();
