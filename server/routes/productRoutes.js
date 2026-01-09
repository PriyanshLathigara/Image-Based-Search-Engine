// Product Routes - API endpoints for product search
const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  createProduct,
} = require("../controllers/productController");

/**
 * GET /api/products
 * Fetch all products
 */
router.get("/", getAllProducts);

/**
 * POST /api/products
 * Add a new product
 */
router.post("/", createProduct);

module.exports = router;
