const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/mytodos")
    .then(() => console.log("thanh cong"))
    .catch(() => console.log("that bai"));
};

module.exports = connectDB;
