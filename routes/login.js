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

// @route    GET /login/me
// @desc     Get user data
// @access   Private
router.get(
  "/me",
  protect,
  asyncHandler(async (req, res) => {
    const { _id, name, email } = await User.findById(req.user.id);
    res.status(200).json({
      id: _id,
      name,
      email,
    });
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
