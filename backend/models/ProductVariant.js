const mongoose = require('mongoose');

const productVariantSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  title: { type: String, required: true }, // e.g. 50g, 100g, 250g, 500g, 1kg
  sku: { type: String, required: true, unique: true },
  barcode: { type: String },
  price: { type: Number, required: true },
  comparePrice: { type: Number },
  weight: { type: Number },
  status: { type: String, default: 'active' }
}, { timestamps: true });

module.exports = mongoose.model('ProductVariant', productVariantSchema);
