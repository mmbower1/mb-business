// express
const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
// middleware
const { protect } = require("../middleware/authMiddleware");
// mongo
const Profile = require("../models/ProfileModel");
const User = require("../models/UserModel");

// npm's
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const config = require('config');
// const { check, validationResult } = require('express-validator');
// utils
const generateToken = require("../utils/generateToken");

// @route    GET /profile
// @desc     Get profile
// @access   Private
router.get(
  "/:id",
  protect,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  })
);

// @route    POST /profile
// @desc     Post profile
// @access   Private
router.post(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    if (!req.body.text) {
      res.status(400);
      throw new Error("Please add a payment type");
    }
    const profile = await Profile.create({
      user: req.user.id,
      payment: req.body.text,
    });
    console.log(req.body);
    res.status(200).json(profile);
  })
);

// @route    PUT /profile/:id
// @desc     Update profile
// @access   Private
router.put(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = req.body.password;
      }
      const updatedUser = await user.save();
      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        password: updatedUser.password,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser._id),
      });
    }
    if (!user) {
      res.status(401);
      throw new Error("User not found");
    }
  })
);

// @route    DELETE /profile
// @desc     Delete profile
// @access   Private
router.delete(
  "/:id",
  protect,
  asyncHandler(async (req, res) => {
    const profile = await Profile.findById(req.params.id);
    if (!profile) {
      res.status(400);
      throw new Error("Profile not found");
    }
    const user = User.findById(req.user.id);
    if (!user) {
      res.status(401);
      throw new Error("User not found");
    }
    // make sure logged in user matches its profile user
    if (profile.user.toString() !== user.id) {
      res.status(401);
      throw new Error("User not authorized");
    }
    await profile.remove();
    res.status(200).json({ id: req.params.id });
  })
);

module.exports = router;
