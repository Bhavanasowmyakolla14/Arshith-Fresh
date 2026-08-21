const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { 
    type: String, 
    enum: ['active', 'ordered'], 
    default: 'active' 
  }
}, { timestamps: true });

module.exports = mongoose.model('Cart', cartSchema);
