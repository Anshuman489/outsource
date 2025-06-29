const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  machineNumberPlate: { type: String, required: true, unique: true }, // e.g. "TR-01"
  type:               { type: String, required: true },               // "Tractor"
  description:        { type: String, required: true },               // Model / details
  price:              { type: Number, required: true },               // for sorting
  image:              { type: String }                                // /static/tractor.jpg
});

module.exports = model('Product', productSchema);
