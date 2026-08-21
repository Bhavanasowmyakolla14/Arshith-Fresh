const mongoose = require('mongoose');

const wishlistItemSchema = new mongoose.Schema({
  wishlistId: { type: mongoose.Schema.Types.ObjectId, ref: 'Wishlist', required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  addedAt: { type: Date, default: Date.now }
});

wishlistItemSchema.index({ wishlistId: 1, productId: 1 }, { unique: true });

module.exports = mongoose.model('WishlistItem', wishlistItemSchema);
