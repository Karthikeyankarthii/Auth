const express = require("express");
const {
  registerUser,
  loginUser,
  getUserInfo,
} = require("../controllers/authcontrollers");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

// POST request for user registration
router.post("/register", registerUser);

// POST request for user login
router.post("/login", loginUser);

// GET request for user information (protected route)
router.get("/user", protect, getUserInfo);

module.exports = router;
