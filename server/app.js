const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const imageRoutes = require("./routes/imageRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

/**
 * Connect to MongoDB
 */
connectDB();

/**
 * Middleware
 */
app.use(cors());
app.use(express.json());

/**
 * Routes
 */
app.use("/api/search", imageRoutes);
app.use("/api/products", productRoutes);

module.exports = app;
