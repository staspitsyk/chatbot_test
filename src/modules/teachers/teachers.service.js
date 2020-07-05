const Teachers  = require('./teachers.model');

class TeachersService {
  async findOneByEmail(email) {
    const teacher = await Teachers.findOne({ where: { email } });

    return teacher;
  }
}

module.exports = new TeachersService();
