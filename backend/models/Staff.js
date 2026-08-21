const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  position: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Staff', staffSchema);
