// const arr = [1, 2, 3, 20, 55, 8];
// function math(array, num) {
//   const res = array.includes(num);
//   return res;
// }

// const res1 = math([1, 2, 2, 4, 5, 6], 10);
// const res2 = math([1, 2, 2, 4, 5, 6], 5);
// console.log(res1, res2);

// function addition(x, y) {
//   if (typeof x !== "number" || typeof y !== "number") {
//     return console.log("one of the arguments is not a number!");
//   }
//   const sum = x + y;
//   return console.log(sum);
// }
// const result = addition(8, 10);

// function add() {
//   console.log(arguments);
//   console.log(arguments[0]);
//   let sum = 0;
//   for (argument of arguments) {
//     sum += argument;
//   }
//   console.log(sum);
//   return sum;
// }
// add(1, 2, 3, 33, 4, 55, 76, 87);
// add(5, 15);

// const book1 = {
//   author: "Ray Bradbery",
//   article: "381 far",
//   date: { year: "1981", day: "26 october" },
//   access: false,
// };

// const {
//   author,
//   date: { year },
// } = book1;
// const accessBook = access ? "доступна" : "нет в наличии";
// console.log(`Книга ${article}, автора ${author} сейчас ${accessBook}`);
// console.log(year);
// console.log(book1);
// book1.price = "20$";
// book1["actual"] = true;
// console.log(book1);
// console.log(article);
// const x = [1, 2, 3, 4, 5];
// console.log(x.slice(1, 3));

const car1 = {
  color: "red",
  mark: "Mercedes",
  engine: "3000",
  year: "2020",
  detailes: {
    price: "40000",
    stock: "true",
  },
};
const car2 = {
  color: "black",
  mark: "Audi",
  engine: "2500",
  year: "2024",
  detailes: {
    price: "60000",
    stock: "false",
  },
};
// function findCars(car) {
//   for (i in car) {
//     console.log(i);
//   }
// }
// findCars(car1);
// findCars(car2);
const cars = Object.keys(car1);
for (const key of cars) {
  //   console.log(key);
  console.log(car2[key]);
}
const cars1 = Object.values(car1);
for (key of cars1) {
  console.log(key);
}
// console.log(null <= 0);
``;
