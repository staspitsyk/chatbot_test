const lessonsService = require('./lessons.service');

class LessonsController {
  async createOne(req, res, next) {
    try {
      const lesson = await lessonsService.createOne(req.body, req.user);
      res.send(lesson);
    } catch (e) {
      next(e);
    }
  }

  async updateOne(req, res, next) {
    try {
      const lesson = await lessonsService.updateOne(+req.params.id, req.body, req.user);
      res.send(lesson);
    } catch (e) {
      next(e);
    }
  }

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
