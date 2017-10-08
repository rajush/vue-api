const mongoose = require('mongoose');

// Schema takes an object that describes the data structure and types.
const Schema = mongoose.Schema;
const model = mongoose.model.bind(mongoose);
// ObjectId serves as unique ID for our stored items.
const ObjectId = mongoose.Schema.Types.ObjectId;

const productSchema = Schema({
  id: ObjectId,
  name: String,
  image: String,
  price: Number,
  description: String,
  // Create a one to many relationship using the 'ref' property.
  // The 'ref' value must be the model that we are setting the relationship with.
  manufacturer: {
    type: ObjectId,
    ref: 'Manufacturer',
  },
});

const manufacturerSchema = Schema({
  id: ObjectId,
  name: String,
});

// Create model for the defined schemas
const Product = model('Product', productSchema);
const Manufacturer = model('Manufacturer', manufacturerSchema);

module.exports = {
  Product,
  Manufacturer,
};
