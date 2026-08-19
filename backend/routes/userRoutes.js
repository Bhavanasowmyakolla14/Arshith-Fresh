const express = require('express');
const User = require('../models/user');

const router = express.Router();


// ===============================
// REGISTER / CREATE ACCOUNT
// ===============================
router.post('/register', async (req, res) => {

    try {

        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;

        // Check whether email already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {

            return res.status(400).json({
                message: 'Email already registered'
            });

        }

        // Create user
        const user = new User({
            firstName,
            lastName,
            email,
            password
        });

        // Save user to MongoDB
        await user.save();

        res.status(201).json({
            message: 'Account created successfully'
        });

    } catch (error) {

        console.error('Registration Error:', error);

        res.status(500).json({
            message: 'Server error'
        });

    }

});


// ===============================
// LOGIN
// ===============================
router.post('/login', async (req, res) => {

    try {

        const {
            email,
            password
        } = req.body;

        // Find user by email
        const user = await User.findOne({ email });

        // User does not exist
        if (!user) {

            return res.status(401).json({
                message: 'Invalid email or password'
            });

        }

        // Check password
        if (user.password !== password) {

            return res.status(401).json({
                message: 'Invalid email or password'
            });

        }

        // Login successful
        res.status(200).json({
            message: 'Login successful',
            user: {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            }
        });

    } catch (error) {

        console.error('Login Error:', error);

        res.status(500).json({
            message: 'Server error'
        });

    }

});


module.exports = router;