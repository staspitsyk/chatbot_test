const Joi = require('joi');

const createLessonDto = Joi.object().keys({
  topic: Joi.string().min(2),
  teacherId: Joi.number(),
  groupId: Joi.number(),
  cabinet: Joi.number(),
  timeStart: Joi.string(),
  timeEnd: Joi.string(),
});

const updateLessonDto = Joi.object().keys({
  topic: Joi.string().min(2),
  teacherId: Joi.number(),
  groupId: Joi.number(),
  cabinet: Joi.number(),
  timeStart: Joi.string(),
  timeEnd: Joi.string(),
});

module.exports = {
  createLessonDto,
  updateLessonDto,
};
