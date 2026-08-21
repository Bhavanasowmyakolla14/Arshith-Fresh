const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  cartId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart', required: true },
  variantId: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductVariant', required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true, min: 1, default: 1 },
  price: { type: Number, required: true },
  addedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CartItem', cartItemSchema);
