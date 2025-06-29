const { Schema, model, Types } = require('mongoose');

const allocSchema = new Schema({
  productId:   { type: Types.ObjectId, ref: 'Product', required: true },

  // beneficiary fields
  vleName:     { type: String, required: true },
  vlePhone:    { type: String, required: true },
  village:     { type: String, required: true },

  allocationDate: { type: Date, default: Date.now }  // can be overridden
});

module.exports = model('Allocation', allocSchema);
