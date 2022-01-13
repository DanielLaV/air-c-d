const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { Pet, User, PetOwner, Image } = require('../../db/models');

router.get(
    '/',
    asyncHandler(async (_req, res, next) => {
        const dogs = await Pet.findAll({
            where: { type: 'dog' },
            include: [{
                model: Image,
                attributes: ["url"],
            }],
        })
        // console.log('DOGS IN API', dogs)
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
            include: [{
                model: Image,
                attributes: ["url"],
            }],
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
            include: [{
                model: Image,
                attributes: ["url"],
            }],
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

router.post(
    '/',
    asyncHandler(async (req, res, next) => {
        const { name, type, url, forKids } = req.body;
        const { userId } = req.body;
        const user = await User.findByPk(userId);
        if (user) {
            const pet = await Pet.create({ name, type, forKids });
            await PetOwner.create({
                owner_id: userId,
                pet_id: pet.id
            });
            await Image.create({
                pet_id: pet.id,
                url
            });
            res.json({ userId });
        } else {
            const err = new Error('Failed to add your pet');
            err.status = 422;
            err.title = "Failed to add pet";
            err.errors = ['Something went wrong'];
            return next(err);
        }
    }),
);

router.post(
    '/:petId',
    asyncHandler(async (req, res, next) => {
        const { name, type, url, forKids } = req.body;
        const { userId } = req.params;
        const user = await User.findByPk(userId);
        if (user) {
            const pet = await Pet.create({ name, type, forKids });
            await PetOwner.create({
                owner_id: userId,
                pet_id: pet.id
            });
            await Image.create({
                pet_id: pet.id,
                url
            });
            res.json({ userId });
        } else {
            const err = new Error('Failed to add your pet');
            err.status = 422;
            err.title = "Failed to add pet";
            err.errors = ['Something went wrong'];
            return next(err);
        }
    }),
);

router.delete(
    '/:petId',
    asyncHandler(async (req, res) => {
        const { petId } = req.body;
        const pet = await Pet.findByPk(petId);
        await pet.destroy();
        const petImage = await Image.findAll({
            where: { petId }
        });
        await petImage.destroy();
        const petOwner = await PetOwner.findAll({
            where: { petId }
        });
        await petOwner.destroy();
        return res.json({ message: 'success' });
    })
)



module.exports = router;
