const Lessons = require('./lessons.model');
const Teachers = require('../teachers/teachers.model');
const Students = require('../students/students.model');
const Groups = require('../groups/groups.model');
const { NotFound, Forbidden } = require('../../common/exeptions');

class LessonsService {
  async createOne(lessonData, user) {
    if (!user.isTeacher) {
      throw new Forbidden(`Only teachers can create new lessons`);
    }

    const teacher = await Teachers.findOne({ where: { id: lessonData.teacherId } });

    if (!teacher) {
      throw new NotFound(
        `You can't create lesson with this teacher. Teacher with id ${lessonData.teacherId} not found`
      );
    }

    const group = await Groups.findOne({ where: { id: lessonData.groupId } });

    if (!group) {
      throw new NotFound(
        `You can't create lesson with this group. Group with id ${lessonData.groupId} not found`
      );
    }

    const lesson = new Lessons(lessonData);

    return lesson.save();
  }

  async updateOne(id, lessonData, user) {
    if (!user.isTeacher) {
      throw new Forbidden(`Only teachers can update lessons`);
    }

    const lesson = await Lessons.findOne({ where: { id } });

    if (!lesson) {
      throw new NotFound(`Lesson with id ${id} not found`);
    }

    if (lessonData.teacherId) {
      const teacher = await Teachers.findOne({ where: { id: lessonData.teacherId } });

      if (!teacher) {
        throw new NotFound(
          `You can't update lesson with this teacher. Teacher with id ${lessonData.teacherId} not found`
        );
      }
    }

    if(lessonData.groupId) {
      const group = await Groups.findOne({ where: { id: lessonData.groupId } });

      if (!group) {
        throw new NotFound(
          `You can't update lesson with this group. Group with id ${lessonData.groupId} not found`
        );
      }
    }

    for (let key in lessonData) {
      lesson[key] = lessonData[key];
    }

    return lesson.save();

  }

  async deleteOne(id, user) {
    if (!user.isTeacher) {
      throw new Forbidden(`Only teachers can delete lessons`);
    }

    const lesson = await Lessons.findOne({ where: { id } });

    if (!lesson) {
      throw new NotFound(
        `You can't delete lesson with this id. Lesson with id ${id} not found`
      );
    }

    lesson.destroy();

    return lesson;

  }

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
