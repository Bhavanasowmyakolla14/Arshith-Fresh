const mongoose = require('mongoose');

const storeSettingSchema = new mongoose.Schema({
  storeName: { type: String, default: 'Arshith Fresh' },
  logo: { type: String },
  email: { type: String, default: 'contact@arshithfresh.com' },
  phone: { type: String },
  currency: { type: String, default: 'INR' },
  taxRate: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('StoreSetting', storeSettingSchema);
