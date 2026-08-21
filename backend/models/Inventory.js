const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  variantId: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductVariant', required: true, unique: true },
  quantity: { type: Number, default: 0 },
  reservedQuantity: { type: Number, default: 0 },
  availableQuantity: { type: Number, default: 0 },
  location: { type: String, default: '154 Building number, 3rd main road' }
}, { timestamps: { createdAt: false, updatedAt: true } });

module.exports = mongoose.model('Inventory', inventorySchema);
