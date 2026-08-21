const Product = require('../models/product');
const ProductVariant = require('../models/ProductVariant');
const ProductImage = require('../models/ProductImage');
const Inventory = require('../models/Inventory');

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({})
      .populate('categoryId', 'name')
      .populate('sellerId', 'storeName');
    
    // We can also fetch the default variants/images if needed for the list view,
    // but for simplicity we'll just return products.
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Fetch single product with variants, images and inventory
// @route   GET /api/products/:id
// @access  Public
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate('categoryId')
      .populate('sellerId');
      
    if (product) {
      const variants = await ProductVariant.find({ productId: product._id });
      const images = await ProductImage.find({ productId: product._id });
      
      res.json({
        ...product._doc,
        variants,
        images
      });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Create a product (along with initial variant)
// @route   POST /api/products
// @access  Private/Admin
const createProduct = async (req, res) => {
  try {
    const { title, description, brand, sku, type, tags, status, price, comparePrice, weight } = req.body;

    // 1. Create the base product
    const product = new Product({
      title,
      description,
      brand,
      sku,
      type,
      tags,
      status: status || 'active',
      // If we had req.user from auth middleware, we would set sellerId here
    });

    const createdProduct = await product.save();

    // 2. Create the default variant if price is provided
    let createdVariant = null;
    if (price) {
      const variant = new ProductVariant({
        productId: createdProduct._id,
        title: 'Default Title',
        sku: sku || `${createdProduct._id}-default`,
        price,
        comparePrice,
        weight
      });
      createdVariant = await variant.save();

      // 3. Create initial inventory for this variant
      const inventory = new Inventory({
        variantId: createdVariant._id,
        availableQuantity: req.body.initialStock || 0,
        quantity: req.body.initialStock || 0
      });
      await inventory.save();
    }

    // 4. Create image if provided
    if (req.body.image) {
      const productImage = new ProductImage({
        productId: createdProduct._id,
        url: req.body.image,
        altText: title,
        position: 1
      });
      await productImage.save();
    }

    res.status(201).json({
      product: createdProduct,
      variant: createdVariant
    });
  } catch (error) {
    res.status(400).json({ message: 'Invalid product data', error: error.message });
  }
};

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = async (req, res) => {
  try {
    const { title, description, brand, type, tags, status } = req.body;

    const product = await Product.findById(req.params.id);

    if (product) {
      product.title = title || product.title;
      product.description = description || product.description;
      product.brand = brand || product.brand;
      product.type = type || product.type;
      product.tags = tags || product.tags;
      product.status = status || product.status;

      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Invalid product data', error: error.message });
  }
};

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      // First, delete related variants and images
      await ProductVariant.deleteMany({ productId: product._id });
      await ProductImage.deleteMany({ productId: product._id });
      
      // Delete the product itself
      await Product.findByIdAndDelete(req.params.id);
      res.json({ message: 'Product removed' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
