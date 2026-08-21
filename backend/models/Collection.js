const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  handle: { type: String, required: true, unique: true, lowercase: true },
  description: { type: String },
  image: { type: String },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Collection', collectionSchema);