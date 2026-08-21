const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  phone: { type: String },
  role: { 
    type: String, 
    enum: ['customer', 'seller', 'admin', 'staff'], 
    default: 'customer' 
  },
  status: { 
    type: String, 
    enum: ['active', 'blocked'], 
    default: 'active' 
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);