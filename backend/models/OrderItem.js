const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  variantId: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductVariant' },
  title: { type: String, required: true },
  variantTitle: { type: String },
  sku: { type: String },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true, min: 1 },
  discount: { type: Number, default: 0 },
  total: { type: Number, required: true }
});

module.exports = mongoose.model('OrderItem', orderItemSchema);
