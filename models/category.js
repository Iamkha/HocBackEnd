const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categotySchma = Schema({
  title: {
    type: String,
    required: [true, "title khong duoc trong"],
    minlength: [6, "it nha 6 ky tu"],
    maxlength: [30, "nhieu nhat 30 ky tu"],
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  description: { type: String, default: "" },
});

const Category = mongoose.model("Category", categotySchma);

module.exports = Category;
