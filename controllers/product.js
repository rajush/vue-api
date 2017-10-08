const Model = require('../model');

const {
  Product,
} = Model;

const productController = {
  all(req, res) {
    // Return all manufacturer
    Product.find({})
      // alongside it's manufacturer
      // information
      .populate('manufacturer')
      .exec((err, products) => res.json(products));
  },
  byId(req, res) {
    const idParams = req.params.id;
    // Returns a single product
    // based on the passed in ID parameter
    Product
      .findOne({
        _id: idParams,
      })
      // as well as it's manufacturer
      .populate('manufacturer')
      .exec((err, product) => res.json(product));
  },
  create(req, res) {
    const requestBody = req.body;
    // Create a new record from a submitted form
    const newProduct = new Product(requestBody);
    // and saves the record to
    // the database
    newProduct.save((err, saved) => {
      // Returns the saved product
      // after a successful save
      Product
        .findOne({
          _id: saved.id,
        })
        .populate('Manufacturer')
        .exec((err, product) => res.json(product));
    });
  },
  update(req, res) {
    const idParam = req.params.id;
    const product = req.body;
    // Finds a product to be updated
    Product.findOne({
      _id: idParam,
    }, (err, data) => {
      // Update the product payload
      const Data = data;
      Data.name = product.name;
      Data.description = product.description;
      Data.image = product.image;
      Data.price = product.price;
      Data.manufacturer = product.manufacturer;
      // Saves the product
      Data.save((err, updated) => res.json(updated));
    });
  },
  remove(req, res) {
    const idParam = req.params.id;
    // Removes a product
    Product
      .findOne({
        _id: idParam,
      })
      .remove((err, removed) => res.json(idParam));
  },
};

module.exports = productController;
