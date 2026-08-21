const mongoose = require('mongoose');

const fulfillmentSchema = new mongoose.Schema({
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  trackingNumber: { type: String },
  courier: { type: String }, // e.g. Blue Dart, Delhivery, DTDC, India Post
  status: { 
    type: String, 
    enum: ['pending', 'shipped', 'delivered'], 
    default: 'pending' 
  },
  shippedAt: { type: Date },
  deliveredAt: { type: Date }
});

module.exports = mongoose.model('Fulfillment', fulfillmentSchema);
