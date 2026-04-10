require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/expenses', require('./routes/expenseRoutes')); // ✅ NEW

// Test route
app.get('/', (req, res) => {
  res.send("API Running");
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000 - server.js:27");
});