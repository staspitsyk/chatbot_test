const lessonsService = require('./lessons.service');

class LessonsController {
  async findAll(req, res, next) {
    try {
      const lessons = await lessonsService.findAll(req.user);
      res.json(lessons);
    } catch (e) {
      next(e);
    }
  }

  async findOneById(req, res, next) {
    try {
      const lesson = await lessonsService.findOneById(+req.params.id, req.user);
      res.json(lesson);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new LessonsController();
