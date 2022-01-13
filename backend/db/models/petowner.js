'use strict';
module.exports = (sequelize, DataTypes) => {
  const PetOwner = sequelize.define('PetOwner', {
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    petId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  PetOwner.associate = function(models) {
    PetOwner.hasOne(models.User, { foreignKey: "id" });
    PetOwner.hasMany(models.Pet, { foreignKey: "id" });
  };
  return PetOwner;
};
