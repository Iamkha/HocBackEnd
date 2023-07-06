const test = () => {
  console.log("kha");
  // throw new Error("something wrong!!!");
  throw {
    message: "something wrong!!!",
  };
};

try {
} catch (e) {
  console.log(e.message);
}
