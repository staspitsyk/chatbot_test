const { Router } = require('express');
const groupsController = require('./groups.controller');
const authJwt = require('../../common/middlewares/auth.middleware');
const createValidator = require('../../common/middlewares/create-validator');
const { createGroupDto, updateGroupDto } = require('./groups.dtos');

const router = new Router();

router.post('/', authJwt, createValidator(createGroupDto), groupsController.createOne);

router.get('/all', authJwt, groupsController.findAll);
router.get('/:groupName', authJwt, groupsController.findOneByName);

router.put('/:id', authJwt, createValidator(updateGroupDto), groupsController.updateOne);

router.delete('/:id', authJwt, groupsController.deleteOne);

module.exports = router;
