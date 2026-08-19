const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      default: ''
    },

    price: {
      type: Number,
      required: true
    },

    image: {
      type: String,
      default: ''
    },

    category: {
      type: String,
      default: ''
    },

    tags: [
      {
        type: String,
        trim: true
      }
    ],

    stock: {
      type: Number,
      default: 0
    },

    status: {
      type: String,
      enum: ['active', 'draft'],
      default: 'active'
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Product', productSchema);