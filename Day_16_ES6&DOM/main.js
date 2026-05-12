// ES6
// let, const
// let name = "John";
// const age = 30;
// Arrow functions
// const sum = (a, b) => a + b;
// console.log(sum(1, 2));

// // Template string
// const firstName = "John";
// const lastName = "Doe";

// console.log(`${firstName} ${lastName}`);

// // destructuring assignment
// const numbers = [1, 2, 3];
// // const [a, _, c] = numbers;
// // console.log(a, c);

// const person = {
//   name: "John",
//   age: 30,
// };

// const { _, age } = person;
// console.log(age);

// spread operator
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, ...arr2];
// console.log(combined);

// const userinfo = {
//   name: "John",
//   age: 30,
// };

// const person = {
//   ...userinfo,
//   city: "New York",
// };

// console.log(person);

// // rest parameters
// function sum(...numbers) {
//   return numbers.reduce((acc, curr) => acc + curr);
// }

// console.log(sum(1, 2, 3, 4, 5));

// const user = {
//   name: "John",
//   age: 30,
//   address: "123 Main St",
//   phone: 1234567890,
// };

// const { name, age, ...rest } = user;
// console.log(name, age);
// console.log(rest);

// es6 modules
import { PI } from "./math.js";
import calSum from "./math.js";
console.log(PI);
console.log(calSum(1, 2));
