const { Router } = require('express');
const lessonsController = require('./lessons.controller');
const authJwt = require('../../common/middlewares/auth.middleware');
const createValidator = require('../../common/middlewares/create-validator');
const { createLessonDto, updateLessonDto } = require('./lessons.dtos');

const router = new Router();

router.post('/', authJwt, createValidator(createLessonDto), lessonsController.createOne);

router.get('/all', authJwt, lessonsController.findAll);
router.get('/:id', authJwt, lessonsController.findOneById);

router.put('/:id', authJwt, createValidator(updateLessonDto), lessonsController.updateOne);

router.delete('/:id', authJwt, lessonsController.deleteOne);

module.exports = router;
