const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchma = Schema({
  name: String,
});

const User = mongoose.model("User", userSchma);

module.exports = User;
