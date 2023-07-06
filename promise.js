// const test = (number) => {
//   return new Promise((resolve, reject) => {
//     if (number > 10) {
//       resolve("ket qua tra ve khi thanh cong");
//     } else {
//       reject("that bai");
//     }
//   });
// };

// test(11)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

Promise.resolve("thanh cong").then((data) => console.log(data));
