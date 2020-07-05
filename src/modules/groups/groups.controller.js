const groupsService = require('./groups.service');

class GroupsController {
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
