'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define('Pet', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [1, 30] }
    },
    type: DataTypes.STRING,
    forKids: DataTypes.BOOLEAN
  }, {});
  Pet.associate = function(models) {
    const userMapping = {
      through: "PetOwner",
      otherKey: "ownerId",
      foreignKey: "id"
    };

    Pet.belongsTo(models.User, userMapping);
    Pet.hasMany(models.Image, { foreignKey: "petId" });
    // Pet.belongsTo(models.PetOwner, { foreignKey: "pet_id" });
  };
  return Pet;
};
