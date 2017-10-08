const Model = require('../model');

const {
  Manufacturer,
} = Model;

const manufacturerController = {
  all(req, res) {
    // Return all manufacturer
    Manufacturer.find({})
      .exec((err, manufacturers) => res.json(manufacturers));
  },
};

module.exports = manufacturerController;
