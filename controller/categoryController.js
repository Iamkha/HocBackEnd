const Categoty = require("../models/category");
const catchAsync = require("../middlewares/async");

exports.createCategory = catchAsync(async (req, res) => {
  const category = await Categoty.find();
  if (!category.length) {
    throw "khong co gi nha";
  }
  console.log("hasvbdha");
  res.json({
    data: category,
  });
});

//methot
// const obj = {
//   getCategoryFake: () => {},
// };
