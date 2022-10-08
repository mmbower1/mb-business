// express
const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
// middleware
// const auth = require('../middleware/auth');
// mongo
const Profile = require("../models/ProfileModel");
// npm's
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const config = require('config');
// const { check, validationResult } = require('express-validator');

// @route    GET /profile
// @desc     Get profile
// @access   Private
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const profiles = await Profile.find();
    res.status(500).json(profiles);
  })
);

// @route    POST /profile
// @desc     Post profile
// @access   Private
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const profile = await Profile.create({
      text: req.body.text,
    });
    console.log(req.body);
    res.json(profile);
    res.status(500).send(err + " Server error POST profile");
  })
);

// @route    PUT /profile/:id
// @desc     Update profile
// @access   Private
router.put(
  "/:id",
  asyncHandler(async (req, res) => {
    res.json("UPDATE profile");

    res.status(500).send(err + " Server error PUT profile");
  })
);

// @route    DELETE /profile
// @desc     Delete profile
// @access   Private
router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    res.json("DELETE profile");
    res.status(500).send(err + " Server error DELETE profile");
  })
);

module.exports = router;
