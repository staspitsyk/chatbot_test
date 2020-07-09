const Teachers = require('./teachers.model');
const { NotFound, Forbidden } = require('../../common/exeptions');

class TeachersService {
  async findOneByEmail(email) {
    const teacher = await Teachers.findOne({ where: { email } });

    return teacher;
  }

  async findOneById(id, user) {
    const teacher = await Teachers.findOne({
      where: { id },
    });

    if (!teacher) {
      throw new NotFound(`User with id ${id} not found`);
    }

    if (!user.isTeacher) {
      throw new Forbidden('Only teachers can check teacher\'s information');
    }

    return teacher;
  }

  async findAll(user) {
    if (!user.isTeacher) {
      throw new Forbidden('Only teachers can check the list of all teachers');
    }

    const teachers = await Teachers.findAll();

    if (!teachers) {
      throw new NotFound('No teachers found');
    }

    return teachers;
  }
}

module.exports = new TeachersService();
