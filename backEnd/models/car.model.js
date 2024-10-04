module.exports = (sequelize, Sequelize) => {
  const Car = sequelize.define("car", {
    brand: {
      type: Sequelize.STRING
    }, model: {
      type: Sequelize.STRING
    }, fuel: {
      type: Sequelize.STRING
    }, year: {
      type: Sequelize.STRING
    }, hs: {
      type: Sequelize.STRING
    },
  });

  return Car;
}