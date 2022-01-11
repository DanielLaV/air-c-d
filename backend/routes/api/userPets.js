const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { Pet, PetOwner, Image } = require('../../db/models');


router.get(
    '/',
    asyncHandler( async (req, res, next) => {
        const { userId } = req.session.auth;
        const pets = await Pet.findAll({
            where: { ownerId: userId }
        });
        res.json(pets);
    })
)



module.exports = router;
