const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

// GET /api/products
router.get('/', getProducts);

// GET /api/products/:id
router.get('/:id', getProductById);

// POST /api/products
// Note: In the future, this should be protected by Auth Middleware
router.post('/', createProduct);

// PUT /api/products/:id
// Note: In the future, this should be protected by Auth Middleware
router.put('/:id', updateProduct);

// DELETE /api/products/:id
// Note: In the future, this should be protected by Auth Middleware
router.delete('/:id', deleteProduct);

module.exports = router;
