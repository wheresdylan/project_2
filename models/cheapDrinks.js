
module.exports = function (sequelize, DataTypes) {
  var Cheap = sequelize.define("Cheap", {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    image: DataTypes.STRING(511),
    website: DataTypes.STRING,
    description: DataTypes.STRING,


  });
  return Cheap;
};