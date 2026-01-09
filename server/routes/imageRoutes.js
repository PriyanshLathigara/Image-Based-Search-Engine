// Image Routes - API endpoints for image upload
const express = require("express");
const multer = require("multer");

const { searchByImage } = require("../controllers/imageController");

const router = express.Router();

/**
 * Multer configuration
 * Using memory storage because image is sent directly to AI
 */
const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed"), false);
    }
  },
});

/**
 * POST /api/search
 * Image-based product search
 */
router.post("/", upload.single("image"), searchByImage);

module.exports = router;
