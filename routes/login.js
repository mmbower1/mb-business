// express
const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
// mongo
const User = require("../models/UserModel");
// npm's
const bcrypt = require("bcryptjs");
// const jwt = require('jsonwebtoken');
// const config = require('config');
// const { check, validationResult } = require('express-validator');
// middleware
const { protect } = require("../middleware/authMiddleware");
// utils
const generateToken = require("../utils/generateToken");

// @route    GET /login/:id
// @desc     Get user data on every screen load so it stays logged in
// @access   Private
router.get(
  "/:id",
  protect,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id).select("-password");
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  })
);

// @route    POST /login
// @desc     Login user
// @access   Public
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid credentials");
    }
  })
);

module.exports = router;
