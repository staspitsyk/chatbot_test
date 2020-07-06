const { Router } = require("express");
const lessonsController = require('./lessons.controller');
const authJwt = require('../../common/middlewares/auth.middleware');

const router = new Router();

// router.post('/', authJwt, lessonsController.createOne);

router.get('/all', authJwt, lessonsController.findAll);
router.get('/:id', authJwt, lessonsController.findOneById);

// router.put('/:id', authJwt, lessonsController.updateOne);

// router.delete('/:id', authJwt, lessonsController.updateOne);

module.exports = router;