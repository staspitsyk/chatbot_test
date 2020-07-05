const studentsService = require('./students.service');

class StudentsController {
  async findAll(req, res, next) {
    try {
      const students = await studentsService.findAll(req.user);
      res.json(students);
    } catch (e) {
      next(e);
    }
  }

  async findOneById(req, res, next) {
    try {
      const student = await studentsService.findOneById(+req.params.id, req.user);
      res.json(student);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new StudentsController();
