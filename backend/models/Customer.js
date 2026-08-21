const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: Date },
  loyaltyPoints: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Customer', customerSchema);
