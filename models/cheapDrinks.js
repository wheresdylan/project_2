
module.exports = function (sequelize, DataTypes) {
  var Cheap = sequelize.define("Cheap", {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    image: DataTypes.STRING,
    website: DataTypes.STRING,

  });
  return Cheap;
};