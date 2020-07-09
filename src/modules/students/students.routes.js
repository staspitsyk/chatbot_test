const { Router } = require('express');
const studentsController = require('./students.controller');
const authJwt = require('../../common/middlewares/auth.middleware');

const router = new Router();

router.get('/all', authJwt, studentsController.findAll);
router.get('/:id', authJwt, studentsController.findOneById);

module.exports = router;
