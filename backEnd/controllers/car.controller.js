const { where } = require('sequelize');
const db = require('../models');
const Car = db.cars;
const Op = db.Sequelize.Op;


// Create and Save a new Car
exports.create = (req, res) => {
  // Validate request
  if (!req.body.brand) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Car
  const car = {
    brand: req.body.brand,
    model: req.body.model
  };

  // Save Car in the database
  Car.create(car).then(data => {
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Car."
      });
    });
};

// Retrieve all Cars from the database.
exports.findAll = (req, res) => {
  Car.findAll().then(data => {
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving cars."
      });
    });
};
exports.findOne = (req, res) => {
  // lógica para recuperar un coche por id
};

exports.update = (req, res) => {
  // lógica para actualizar un coche por id
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Car.destroy({ where: { id: id } }).then(() => {
    console.log('Deleted id=${id}');
    res.send({
      message: "Se borro correctamente"
    });
  })
};