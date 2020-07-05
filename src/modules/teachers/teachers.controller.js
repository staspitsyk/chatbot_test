const teachersService = require('./teachers.service');

class TeachersController {
  async findAll(req, res, next) {
    try {
      const teachers = await teachersService.findAll(req.user);
      res.json(teachers);
    } catch (e) {
      next(e);
    }
  }

  async findOneById(req, res, next) {
    try {
      const teacher = await teachersService.findOneById(+req.params.id, req.user);
      res.json(teacher);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new TeachersController();
