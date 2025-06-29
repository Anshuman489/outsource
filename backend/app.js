const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();
const connectDB = require('./connectDB');

const cors = require('cors');

connectDB();  // Connect to MongoDB

/* ---------- middleware ---------- */
app.use(cors());  // Enable CORS for all routes
app.use(express.json());  // Parse JSON request bodies
app.use('/static', express.static(path.join(__dirname, 'images')));

/* ---------- routes ---------- */
app.use('/api/products', require('./routes/products'));
app.use('/api/allocations', require('./routes/allocations'));

/* ---------- start server ---------- */
const PORT = process.env.PORT || 5000;   // ② use env var in prod
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
