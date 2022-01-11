const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const petsRouter = require('./pets.js');
const ownerRouter = require('./userPets');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/pets', petsRouter);
router.use('/owner', ownerRouter);




module.exports = router;
