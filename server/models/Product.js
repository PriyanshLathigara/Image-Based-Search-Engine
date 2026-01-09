// Product Model - MongoDB schema for products
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    tags: {
      type: [String],
      default: [],
    },

    imageUrl: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    brand: {
      type: String,
    },

    category: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * Text index for search
 * This enables image-tag → product matching
 */
productSchema.index({
  name: "text",
  description: "text",
  tags: "text",
  brand: "text",
  category: "text",
});

module.exports = mongoose.model("Product", productSchema);
