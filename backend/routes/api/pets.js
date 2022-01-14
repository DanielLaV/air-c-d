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

// Edit a pet
router.put(
    '/:petId',
    asyncHandler(async (req, res, next) => {
        console.log('IN THE /pets/petId route');
        const { userId, id, name, type, url, forKids } = req.body;

        // const user = await User.findByPk(userId);
        if (userId) {
            // const pet = await Pet.findByPk(petId);
            // const image = await Image.findOne({ where: petId });
            await Pet.update(
                { name, type, forKids },
                { where: { id }}
            );
            await Image.update(
                { url },
                { where: { id }}
            );

            const pet = await Pet.findByPk(id, {include: Image})
            res.json(pet);
            // console.log('PET IS ', pet)
            // console.log('image IS ', image)
            // res.json("Your pet has been edited");
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
    '/',
    asyncHandler(async (req, res, next) => {
        // console.log("HELLO");
        const { name, type, url, forKids, userId } = req.body;
        // console.log('in router', name, type, url, forKids, userId)
        // const { userId } = req.body;
        const user = await User.findByPk(userId);
        if (user) {
            const newPet = await Pet.create({ name, type, forKids });
            await PetOwner.create({
                ownerId: userId,
                petId: newPet.id
            });
            const img = await Image.create({
                petId: newPet.id,
                url
            });
            const pet = await Pet.findOne({
                where: { id: newPet.id },
                include: [{
                    model: Image,
                    attributes: ["url"],
                }],
            })

            // console.log('IMG', pet)
            res.json(pet);
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
        // console.log('in the delete route')
        const { petId } = req.params;
        // const petImage = await Image.findAll({
        //     where: { petId }
        // });
        // if (petImage) await petImage.destroy();
        await Image.destroy({ where: { petId }});
        await PetOwner.destroy({ where: { petId }});
        // await petOwner.destroy();
        await Pet.destroy({ where: { id: petId }});
        return res.json({ message: 'success' });
    })
)



module.exports = router;
