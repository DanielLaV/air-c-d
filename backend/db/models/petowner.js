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
    // associations can be defined here
  };
  return PetOwner;
};
