const express = require("express");
const createCategory = require("../controller/categoryController");
const Categoty = require("../models/category");
const catchAsync = require("../middlewares/async");

const router = express.Router();

router.post(
  "/",
  catchAsync(async (req, res) => {
    const { title, isCompleted, description } = req.body;

    const todo = await Categoty.create({
      title: title,
      isCompleted: isCompleted,
      description: description,
    })
      .then(() => {
        res.json({
          success: true,
        });
      })
      .catch((e) => {
        const err = e.errors;
        const keys = Object.keys(err);
        const errorsObj = {};
        keys.map((key) => {
          errorsObj[key] = err[key].message;
        });
        // res.status(400).json({
        //   success: false,
        //   errors: errorsObj,
        // });
        console.log(new ApiError(400, errorsObj), "kha");
        throw new ApiError(400, errorsObj);
      });

    res.status(201).json(todo);
  })
);

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Categoty.findByIdAndDelete(id)
    .catch((err) => {
      return res.status(400).json({
        success: false,
      });
    })
    .then(() => {
      return res.status(200).json({
        success: true,
      });
    });
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, isCompleted } = req.body;

  await Categoty.findByIdAndUpdate(id, {
    title,
    description,
    isCompleted,
  })
    .catch((e) => {
      return res.status(400).json({
        success: false,
      });
    })
    .then(() => {
      return res.status(200).json({
        success: true,
      });
    });
});

router.get("/", createCategory.createCategory);

module.exports = router;
