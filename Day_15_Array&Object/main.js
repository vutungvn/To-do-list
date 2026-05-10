// Object
let person = {
  name: "Tùng",
  age: 20,
  address: "Hưng Yên",
};

// Object.keys()
const keys = Object.keys(person);
console.log(keys);

keys.forEach((key) => {
  console.log(person[key]);
});

// Object.values()
const values = Object.values(person);
console.log(values);

// Object.entries()
const entries = Object.entries(person);
console.log(entries);

// Object.assign()
const newPerson = Object.assign({}, person, { job: "Developer" });
console.log(newPerson);

// Array

// push()
// const length = numbers.push(4, 5);
// console.log(length);
// console.log(numbers);

// pop()
// const number = numbers.pop();
// console.log(number);
// console.log(numbers);

// unshift()
// const length = numbers.unshift(0, 5);
// console.log(length);
// console.log(numbers);

// const numbers = [1, 2, 3];

// // shift()
// const number = numbers.shift();
// console.log(number);
// console.log(numbers);

// concat()
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = [7, 8, 9];
// const newArray = array1.concat(array2, array3);
// console.log(newArray);
// console.log(array1);

// slice()
// const newNumbers = numbers.slice(0, 2);
// console.log(newNumbers);
// console.log(numbers);

// splice()
// const numbers = [1, 2, 3];

// const number = numbers.splice(1, 1, 4);
// // Trả về mảng các phần tử đã bị xóa, nếu không có phần tử nào bị xóa thì trả về mảng rỗng.
// console.log(number);
// console.log(numbers);

// includes()
// const numbers = [1, 2, 3];

// console.log(numbers.includes(2)); // true
// console.log(numbers.includes(4)); // false

// indexOf()
// console.log(numbers.indexOf(2));
// console.log(numbers.indexOf(4));

// forEach()

// const numbers = new Array(1, 2, 3);
// numbers.forEach((number, index) => {
//   console.log(`Index: ${index}, Number: ${number}`);
// });

// Array.prototype.myForEach = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     callback(this[i], i, this);
//   }
// };

// numbers.myForEach((number, index, self) => {
//   console.log(`Index: ${index}, Number: ${number}, Array: ${self}`);
// });

// map()

// Array.prototype.myMap = function (callback) {
//   let result = [];

//   for (let i = 0; i < this.length; i++) {
//     result.push(callback(this[i], i, this));
//   }

//   return result;
// };

// const newNumbers = numbers.myMap((number) => number * 2);
// console.log(newNumbers);
// console.log(numbers);

// some()
// const numbers = [1, 2, 0];

// Array.prototype.mySome = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       return true;
//     }
//   }
//   return false;
// };

// const result = numbers.mySome((number) => number > 2);
// console.log(result);

// every()

// Array.prototype.myEvery = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     if (!callback(this[i], i, this)) {
//       return false;
//     }
//   }
//   return true;
// };

// const result = numbers.every((number) => number > 0);
// console.log(result);

// filter()

// Array.prototype.myFilter = function (callback) {
//   let result = [];

//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       result.push(this[i]);
//     }
//   }

//   return result;
// };

// const evenNumbers = numbers.myFilter((number) => number % 2 === 0);
// console.log(evenNumbers);

// reduce()

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, number) => acc + number, 0);
console.log(sum);
