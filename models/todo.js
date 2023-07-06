const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TodoSchma = Schema({
  content: String,
  isCompleted: Boolean,
});

const Todo = mongoose.model("Todo", TodoSchma);

module.exports = Todo;
