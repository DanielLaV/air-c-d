'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    petId: DataTypes.INTEGER,
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});

  Image.associate = function (models) {
    Image.belongsTo(models.Pet, { foreignKey: "petId" });
  };
return Image;
};
