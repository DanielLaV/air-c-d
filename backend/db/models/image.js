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
    // associations can be defined here
  };
return Image;
};
