module.exports = function(sequelize, DataTypes) {
  var HappyHour = sequelize.define("HappyHour", {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    time: DataTypes.STRING,
    deal: DataTypes.STRING,
    image: DataTypes.STRING,
    website: DataTypes.STRING,
  
  });
  return HappyHour;
};