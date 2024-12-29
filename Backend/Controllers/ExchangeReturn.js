const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const requestRoutes = require('./Routes/Exchange.js');
const { applyTimestamps } = require('../Models/Exchangemode.js');

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());

// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/returns_exchanges', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Database connected successfully'))
    .catch((err) => console.error('Database connection error:', err));

// Routes
app.use('/api', requestRoutes);

// Export app
module.exports = app;
