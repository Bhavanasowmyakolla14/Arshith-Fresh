const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderNumber: { type: String, required: true, unique: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  status: { 
    type: String, 
    enum: ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'], 
    default: 'pending' 
  },
  paymentStatus: { 
    type: String, 
    enum: ['pending', 'paid', 'failed', 'refunded'], 
    default: 'pending' 
  },
  fulfillmentStatus: { 
    type: String, 
    enum: ['unfulfilled', 'fulfilled', 'partially_fulfilled'], 
    default: 'unfulfilled' 
  },
  subtotal: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  shippingCharge: { type: Number, default: 0 },
  tax: { type: Number, default: 0 },
  total: { type: Number, required: true },
  currency: { type: String, default: 'INR' },
  couponId: { type: mongoose.Schema.Types.ObjectId, ref: 'Discount' },
  shippingAddressId: { type: mongoose.Schema.Types.ObjectId, ref: 'Address' },
  billingAddressId: { type: mongoose.Schema.Types.ObjectId, ref: 'Address' }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
