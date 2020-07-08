const groupsService = require('./groups.service');

class GroupsController {

  async createOne(req, res, next) {
    try {
      const group = await groupsService.createOne(req.body, req.user);
      res.send(group);
    } catch (e) {
      next(e);
    }
  }

  async updateOne(req, res, next) {
    try {
      const group = await groupsService.updateOne(+req.params.id, req.body, req.user);
      res.send(group);
    } catch (e) {
      next(e);
    }
  }

  async deleteOne(req, res, next) {
    try {
      const group = await groupsService.deleteOne(+req.params.id, req.user);
      res.send(group);
    } catch (e) {
      next(e);
    }
  }

  async findAll(req, res, next) {
    try {
      const groups = await groupsService.findAll(req.user);
      res.json(groups);
    } catch (e) {
      next(e);
    }
  }

  async findOneByName(req, res, next) {
    try {
      const group = await groupsService.findOneByName(req.params.groupName, req.user);
      res.json(group);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new GroupsController();
