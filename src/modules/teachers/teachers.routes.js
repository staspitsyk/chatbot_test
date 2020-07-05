const { Router } = require("express");
const teachersController = require('./teachers.controller');
const authJwt = require('../../common/middlewares/auth.middleware');

const router = new Router();

router.get('/all', authJwt, teachersController.findAll);
router.get('/:id', authJwt, teachersController.findOneById);

module.exports = router;