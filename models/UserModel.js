const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    // required: [true, "Please add a name"],
  },
  email: {
    type: String,
    // required: [true, "Please add an email"],
    unique: true,
  },
  password: {
    type: String,
    // required: [true, "Please add a password"],
  },
  password2: {
    type: String,
    // required: [true, "Please confirm password"],
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

module.exports = User;
