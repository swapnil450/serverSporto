const mongoose = require("mongoose");

const UserAuthShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  acctype: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  Active: {
    type: Boolean,
    default: true,
  },
});

const UserAuthModal = new mongoose.model("user", UserAuthShema);

module.exports = UserAuthModal;
