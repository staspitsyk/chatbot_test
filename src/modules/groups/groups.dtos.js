const Joi = require('joi');

const createGroupDto = Joi.object().keys({
  groupName: Joi.string().min(2).required(),

});

const updateGroupDto = Joi.object().keys({
  groupName: Joi.string().min(2).required(),

});

module.exports = {
  createGroupDto,
  updateGroupDto,
};
