const mongoose = require('mongoose');

const collectionProductSchema = new mongoose.Schema({
  collectionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Collection', required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }
});

collectionProductSchema.index({ collectionId: 1, productId: 1 }, { unique: true });

module.exports = mongoose.model('CollectionProduct', collectionProductSchema);
