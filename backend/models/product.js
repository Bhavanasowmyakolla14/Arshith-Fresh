const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Seller' },
  title: { type: String, required: true },
  description: { type: String },
  brand: { type: String, default: 'Arshith Fresh' },
  sku: { type: String },
  categoryId: { type: mongoose.Schema.Types.ObjectId },
  type: { type: String, default: 'Cooking Ingredients' },
  tags: [{ type: String }],
  status: { 
    type: String, 
    enum: ['active', 'inactive'], 
    default: 'active' 
  }
}, { timestamps: true });

// Prevent mongoose OverwriteModelError if already registered
module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);