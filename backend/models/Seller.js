const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  storeName: { type: String, required: true },
  logo: { type: String },
  description: { type: String },
  verificationStatus: { 
    type: String, 
    enum: ['pending', 'verified', 'rejected'], 
    default: 'pending' 
  }
}, { timestamps: true });

module.exports = mongoose.model('Seller', sellerSchema);
