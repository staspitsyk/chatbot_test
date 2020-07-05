const { Router } = require("express");
const groupsController = require('./groups.controller');
const authJwt = require('../../common/middlewares/auth.middleware');

const router = new Router();

router.get('/all', authJwt, groupsController.findAll);
router.get('/:groupName', authJwt, groupsController.findOneByName);

module.exports = router;