// @desc    Fetch all products (sample data)
// @route   GET /api/products
// @access  Public
const getProducts = (req, res) => {
  const products = [
    {
      _id: '1',
      name: 'Fresh Organic Apples',
      price: 4.99,
      image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500&auto=format&fit=crop&q=60',
      description: 'Crisp and sweet organic red apples harvested locally.',
      category: 'Fruits',
      countInStock: 25
    },
    {
      _id: '2',
      name: 'Farm Fresh Milk',
      price: 3.49,
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&auto=format&fit=crop&q=60',
      description: '100% whole pure pasteurized dairy farm milk.',
      category: 'Dairy',
      countInStock: 15
    },
    {
      _id: '3',
      name: 'Artisan Sourdough Bread',
      price: 5.99,
      image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=500&auto=format&fit=crop&q=60',
      description: 'Freshly baked naturally fermented artisan sourdough loaf.',
      category: 'Bakery',
      countInStock: 10
    }
  ];

  res.json(products);
};

module.exports = {
  getProducts
};
