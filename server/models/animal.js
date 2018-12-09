module.exports = function(sequelize, DataTypes) {
  var Animal = sequelize.define("Animal", {
    name: { type: DataTypes.STRING, required: true },
    species: { type: DataTypes.STRING, required: true },
    lifespan: DataTypes.STRING
  });

  return Animal;
};
