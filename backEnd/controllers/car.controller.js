const { where } = require('sequelize');
const db = require('../models');
const Car = db.cars;
const Op = db.Sequelize.Op;


// Create and Save a new Car
exports.create = (req, res) => {
  if (!req.body.brand) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Car
  const car = {
    brand: req.body.brand,
    model: req.body.model,
    fuel: req.body.fuel,
    year: req.body.year,
    hs: req.body.hs,
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

//  All Cars from the database.
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
  const id = req.params.id;

  Car.findByPk(id).then(data => {
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Cannot find Car with id=${id}.`
      });
    }
  })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Car with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Car.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Car was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Car with id=${id}. Maybe Car was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Car with id=" + id
      });
    });
}

exports.delete = (req, res) => {
  const id = req.params.id;

  Car.destroy({ where: { id: id } }).then(() => {
    console.log('Deleted id=${id}');
    res.send({
      message: "Se borro correctamente"
    });
  })
};
