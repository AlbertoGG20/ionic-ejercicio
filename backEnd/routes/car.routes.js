module.exports = app => {
  const cars = require("../controllers/car.controller.js");

  var router = require("express").Router();


  // Create a new Car
  router.post("/", cars.create);

  // Retrieve all Cars
  router.get("/", cars.findAll);

  // Retrieve one Cars
  router.get("/:id", cars.findOne);

  // Update a Car with id
  router.put("/:id", cars.update);

  // Delete a Car with id
  router.delete("/:id", cars.delete);

  app.use('/api/cars', router);
};