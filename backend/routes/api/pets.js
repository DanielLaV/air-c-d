const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { Pet } = require('../../db/models');

router.get(
    '/dogs',
    asyncHandler(async (_req, res, next) => {
        const dogs = await Pet.findAll({
            where: { type: 'dog' },
        })
        if (dogs.length) res.json(dogs);
        else {
            const err = new Error('The dogs are running around the neighborhood! Try reloading to see if they come back.');
            err.status = 400;
            err.title = 'The dogs have gone missing!';
            err.errors = ['Invalid request.'];
            return next(err);
        }
    }),
);

router.get(
    '/cats',
    asyncHandler(async (_req, res, next) => {
        const cats = await Pet.findAll({
            where: { type: 'cat' },
        })
        if (cats.length) res.json(cats);
        else {
            const err = new Error('The cats have escaped their cage! Try reloading to see if they come back.');
            err.status = 400;
            err.title = 'The cats have gone missing!';
            err.errors = ['Invalid request.'];
            return next(err);
        }
    }),
);

router.get(
    '/others',
    asyncHandler(async (_req, res, next) => {
        const pets = await Pet.findAll({
            where: { type: 'other' },
        })
        if (pets.length) res.json(pets);
        else {
            const err = new Error('The pets have escaped their cage! Try reloading to see if they come back.');
            err.status = 400;
            err.title = 'The pets have gone missing!';
            err.errors = ['Invalid request.'];
            return next(err);
        }
    }),
);

// router.post(
//     '/dogs',

// );

module.exports = router;
