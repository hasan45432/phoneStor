const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "USER",
  },

  //   refreshToken: {
  //     type: String,
  //   },

  refreshToken: String,
});

const UserModel = mongoose.models.User || mongoose.model("User", schema);

module.exports = UserModel;
