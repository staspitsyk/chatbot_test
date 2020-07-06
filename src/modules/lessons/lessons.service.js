const Lessons = require('./lessons.model');
const Teachers = require('../teachers/teachers.model');
const Students = require('../students/students.model');
const Groups = require('../groups/groups.model');
const { NotFound, Forbidden } = require('../../common/exeptions');

class LessonsService {
  async findOneById(id, user) {
    const lesson = await Lessons.findOne({
      where: { id },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: [
        {
          model: Groups,
          attributes: { exclude: ['createdAt', 'updatedAt', 'id'] },
          include: [
            {
              model: Students,
              attributes: {
                exclude: ['createdAt', 'updatedAt', 'email', 'phoneNumber', 'password'],
              },
            },
          ],
        },
        {
          model: Teachers,
          attributes: { exclude: ['createdAt', 'updatedAt', 'email', 'phoneNumber', 'password'] },
        },
      ],
    });

    if (!lesson) {
      throw new NotFound(`Lesson with id ${id} not found`);
    }

    if (!user.isTeacher && lesson.groupId !== user.groupId) {
      throw new NotFound(`You can't check other group lessons information`);
    }

    return lesson;
  }

  async findAll(user) {
    if (!user.isTeacher) {
      throw new Forbidden(`Only teachers can check the list of all lessons`);
    }

    const lessons = await Lessons.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: [
        {
          model: Groups,
          attributes: { exclude: ['createdAt', 'updatedAt', 'id'] },
          include: [
            {
              model: Students,
              attributes: { exclude: ['createdAt', 'updatedAt'] },
            },
          ],
        },
        {
          model: Teachers,
          attributes: { exclude: ['createdAt', 'updatedAt'] },
        },
      ],
    });

    if (!lessons) {
      throw new NotFound(`No lessons found`);
    }

    return lessons;
  }
}

module.exports = new LessonsService();
