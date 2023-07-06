//comparison query operator
// $gt: greater  than
// $gte: greater than equal
// $lt: less than
// $lte: less than  equal
// $eq : equal
// $ne : not equal
// $in :[3,5,7,9,10]
// $nin

// const express = require("express");
// const { PORT } = require("./config");
// const fs = require("fs");

// const app = express();

// // app.get("/", (req, res) => {
// //   res.send("hello ok");
// // });

// // fs.appendFile("users.txt", "ga\n", (err) => {
// //   if (err) {
// //     console.log(error);
// //   } else {
// //     console.log("hello");
// //   }
// // });

// // fs.writeFile("users.txt", "ga", (err) => {
// //   if (err) {
// //     console.log(error);
// //   } else {
// //     console.log("hello");
// //   }
// // });
// app.use(express.text());

// app.post("/users", (req, res) => {
//   const data = req.body;
//   // lấy dữ liệu
//   const user = fs.readFileSync("users.txt").toString();
//   if (user.includes(data)) {
//     res.send("da co");
//   } else {
//     fs.appendFileSync("users.txt", data + "<hr></hr>");
//     res.send("da luu");
//   }
// });

// app.get("/users.txt", (req, res) => {
//   constco data = fs.readFileSync("users.txt");
//   res.send(data.toString());
// });

// // fs.readFileSync("users.txt", "kha");

// app.listen(PORT, () => {
//   console.log("len nao");
// });

// const mongoose = require("mongoose");
// const mongodb = require("mongodb");

// const express = require("express");
// const { PORT, ADMIN } = require("./config");

// const app = express();

// const url = "mongodb://localhost:27017/";

// const client = new mongodb.MongoClient(url);

// async function getData() {
//   let result = await client.connect();
//   let db = result.db("test");
//   let col = db.collection("test");
//   console.log(col.find({}).toArray(), "dasnbdkbas");
// }
// getData();
// mongoose
//   .connect("")
//   .then(function () {
//     console.log("thanh cong");
//   })
//   .catch((e) =>\0 console.log("that bai", e))
//   .finally(() => {});

// let user = null;
// let product = [];

// // app.use() => khai baos middlweare

// app.use(express.json());

// app.use("/products", (req, res, next) => {
//   if (
//     user &&
//     "lephuockha@gmail.com" === user.email &&
//     "lephuockha" === user.password
//   ) {
//     return next(), res.json("status");
//   }
//   res.json({ status: 200, message: "ban chua dang nhap" });
// });

// app.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   user = { email, password };
//   res.json({
//     status: true,
//   });
// });

// app.post("/products/add", (req, res) => {
//   const { price, name } = req.body;
//   const id = Date.now();
//   const item = { id, name, price };

//   product.push(item);
//   res.json({
//     status: 200,
//     message: " them thanh cong",
//   });
// });

// app.delete("/products/:id", (req, res) => {
//   const path = req.path;
//   const dataProductD = product.filter(
//     (el) => el.id !== Number(path.split("/")[2])
//   );
//   product = dataProductD;

//   res.json({
//     message: "kah",
//     data: product,
//   });
// });

// app.get("/products", (req, res, next) => {
//   res.json({ status: true, data: product });
// });

// app.listen(PORT, () => {
//   console.log("len nao");
// });

const express = require("express");
const Todo = require("./models/todo");
const User = require("./models/user");
const categoryRoute = require("./routes/categoryRoute.js");
const connectDB = require("./config/db");

const { PORT } = require("./config");

const app = express();

app.use(express.json());
connectDB();

// const mdw1 = (req, res, next) => {
//   next("loi1 ");
// };

// const mdw2 = (err, req, res, next) => {
//   console.log(err);
// };
// app.use("/", mdw1);
// app.use("/", mdw2);
app.use("/api/v1/category", categoryRoute);

// app.get("/", (req, res) => {
//   console.log("/");
// });

app.get("/api/v1/todo", (req, res) => {
  console.log("anh vao roi nha em");
  res.json({
    status: 200,
    message: "anh da den roi day",
  });
});

app.get("/", (req, res) => {
  res.send("GET request to the homepage");
});

app.post("/api/v1/todo", async (req, res) => {
  const { content, isCompleted } = req.body;
  if (!content) {
    return res.json("loi \0");
  }
  const todo = new Todo({
    content: content,
    isCompleted: isCompleted,
  });
  const data = await todo.save();

  // todo
  //   .save()
  //   .then((data) => console.log(data, "data2"))
  //   .catch(() => console.log("loi"));
  res.json(data);
});

app.post("/api/v1/user", async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.json("loi");
  }
  const todo = new User({
    name: name,
  });
  const daata = await todo.save();

  // todo
  //   .save()
  //   .then((data) => console.log(data, "data2"))
  //   .catch(() => console.log("loi"));
  res.json(daata);
});

app.listen(PORT, () => {
  console.log("len nao");
});
