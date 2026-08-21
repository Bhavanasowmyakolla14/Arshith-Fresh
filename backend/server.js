const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB Atlas
if (process.env.MONGO_URI) {
  connectDB();
} else {
  console.warn('⚠️ Warning: MONGO_URI is not set in environment variables');
}

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// Routes
const productRoutes = require('./routes/productRoutes');
const collectionRoutes = require('./routes/collectionRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const customerRoutes = require('./routes/customerRoutes');

app.get('/api', (req, res) => {
  res.json({
    message: 'API is running',
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected',
    timestamp: new Date().toISOString()
  });
});

app.use('/api/products', productRoutes);
app.use('/api/collections', collectionRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/customers', customerRoutes);
const dashboardRoutes = require('./routes/dashboardRoutes');
app.use('/api/dashboard', dashboardRoutes);

// Admin clean page routes
app.get(['/admin', '/admin-dashboard'], (req, res) => res.sendFile(path.join(__dirname, '../frontend/admin-dashboard.html')));
app.get('/admin-customers', (req, res) => res.sendFile(path.join(__dirname, '../frontend/admin-customers.html')));
app.get('/admin-products', (req, res) => res.sendFile(path.join(__dirname, '../frontend/admin-products.html')));
app.get('/admin-collections', (req, res) => res.sendFile(path.join(__dirname, '../frontend/admin-collections.html')));
app.get('/admin-orders', (req, res) => res.sendFile(path.join(__dirname, '../frontend/admin-orders.html')));
app.get('/admin-inventory', (req, res) => res.sendFile(path.join(__dirname, '../frontend/admin-inventory.html')));
app.get('/admin-login', (req, res) => res.sendFile(path.join(__dirname, '../frontend/admin-login.html')));
app.get('/admin-product-detail', (req, res) => res.sendFile(path.join(__dirname, '../frontend/admin-product-detail.html')));
app.get('/admin-collection-detail', (req, res) => res.sendFile(path.join(__dirname, '../frontend/admin-collection-detail.html')));
app.get('/admin-inventory-variant', (req, res) => res.sendFile(path.join(__dirname, '../frontend/admin-inventory-variant.html')));
app.get('/admin-orders-drafts', (req, res) => res.sendFile(path.join(__dirname, '../frontend/admin-orders-drafts.html')));
app.get('/admin-orders-abandoned', (req, res) => res.sendFile(path.join(__dirname, '../frontend/admin-orders-abandoned.html')));
app.get('/admin-purchase-orders', (req, res) => res.sendFile(path.join(__dirname, '../frontend/admin-purchase-orders.html')));
app.get('/admin-gift-cards', (req, res) => res.sendFile(path.join(__dirname, '../frontend/admin-gift-cards.html')));
app.get('/admin-transfers', (req, res) => res.sendFile(path.join(__dirname, '../frontend/admin-transfers.html')));
app.get('/admin-customer-segments', (req, res) => res.sendFile(path.join(__dirname, '../frontend/admin-customer-segments.html')));
app.get('/admin-customer-companies', (req, res) => res.sendFile(path.join(__dirname, '../frontend/admin-customer-companies.html')));



// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
