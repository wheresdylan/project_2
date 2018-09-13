
module.exports = function(sequelize, DataTypes) {
  var Unique = sequelize.define("Unique", {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    image: DataTypes.STRING(511),
    website: DataTypes.STRING,
    description: DataTypes.STRING,
  
  });
  return Unique;
};