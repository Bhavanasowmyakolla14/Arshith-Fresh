const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  paymentMethod: { type: String, required: true }, // e.g. Razorpay, UPI, COD, NetBanking, Card
  transactionId: { type: String },
  amount: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ['pending', 'paid', 'failed', 'refunded'], 
    default: 'pending' 
  },
  paidAt: { type: Date }
});

module.exports = mongoose.model('Payment', paymentSchema);
