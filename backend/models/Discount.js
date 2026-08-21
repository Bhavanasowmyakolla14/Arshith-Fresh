const mongoose = require('mongoose');

const discountSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true, uppercase: true, trim: true },
  type: { 
    type: String, 
    enum: ['percentage', 'fixed'], 
    default: 'percentage' 
  },
  value: { type: Number, required: true },
  minOrderAmount: { type: Number, default: 0 },
  maxDiscount: { type: Number },
  usageLimit: { type: Number },
  usedCount: { type: Number, default: 0 },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Discount', discountSchema);
