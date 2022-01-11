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
    const columnMapping = {
      through: "PetOwner",
      otherKey: "ownerId",
      foreignKey: "petId"
    }
    Pet.belongsTo(models.User, columnMapping)
  };
  return Pet;
};
