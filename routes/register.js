// express
const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
// middleware
// const auth = require('../middleware/auth');
// mongo
const User = require("../models/UserModel");
// npm's
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const config = require('config');
// const { check, validationResult } = require('express-validator');

// utils
const generateToken = require("../utils/generateToken");

// @route    GET /register
// @desc     Get users
// @access   Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    res.json("register");
    res.status(500).send(err + " Server error GET register");
  })
);

// @route    POST /register
// @desc     Register user
// @access   Public
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { name, email, password, password2 } = req.body;
    if (!name || !email || !password || !password2) {
      res.status(400);
      throw new Error("Please add all fields");
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("This email already exists. Please try another email.");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPw = await bcrypt.hash(password, salt);
    const user = await User.create({
      name,
      email,
      password: hashedPw,
      password2: hashedPw,
    });
    if (user) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  })
);

module.exports = router;
