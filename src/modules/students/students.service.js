const Students = require('./students.model');
const { NotFound, Forbidden } = require('../../common/exeptions');

class StudentsService {
  async findOneByEmail(email) {
    const student = await Students.findOne({ where: { email } });

    return student;
  }

  async findOneById(id, user) {
    const student = await Students.findOne({
      where: { id },
    });

    if (!student) {
      throw new NotFound(`User with id ${id} not found`);
    }

    if (student.id !== user.id && !user.isTeacher) {
      throw new Forbidden('You can\'t check other student\'s information.');
    }

    return student;
  }

  async findAll(user) {
    if (!user.isTeacher) {
      throw new Forbidden('Only teachers can check the list of all students');
    }

    const students = await Students.findAll();

    if (!students) {
      throw new NotFound('No students found');
    }

    return students;
  }

  async findAllByGroupId(id) {
    const students = await Students.findAll({
      where: { groupId: id },
    });

    if (!student) {
      throw new NotFound('Group is empty');
    }

    return students;
  }
}

module.exports = new StudentsService();
