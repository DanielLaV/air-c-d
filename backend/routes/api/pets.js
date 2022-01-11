const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { Pet } = require('../../db/models');

router.get(
    '/dogs',
    asyncHandler(async (_req, res, next) => {
       const dogs = await Pet.findAll({
           where: { type: 'dog' },
       })
       console.log('====DOGS', dogs);
       res.json(dogs);
    }),
)

module.exports = router;
