// Variables

// var, let, const

// Declare
// ES5
// var
// console.log("a::", a);
// var a = 10;
// a = 20;

// ES6
// let
let color = "red";
color = "blue";
console.log("color::", color);

// const
const PI = 3.14;
console.log("PI::", PI);

// Scope

// Global Scope (Toàn cục)
// let globalVar = "Biến toàn cục";

// function myFunction() {
//   console.log(globalVar);
// }

// Function Scope (Phạm vi hàm)
// function myFunction() {
//   let functionVar = "Biến trong hàm";
//   console.log(functionVar);
// }

// myFunction();

// console.log(functionVar);

// Block Scope (Phạm vi khối)
if (true) {
  let blockVar = "Biến trong khối";
  console.log(blockVar);
}

// Hoisting
// console.log("a::", a);
// var a = 10;

// console.log("b::", b);
// let b = 20;
// console.log("b::", b);

// Example
// function myFunction() {
//   console.log(number);
//   if (1 == 2) {
//     var number = 10;
//   }
//   console.log(number);
// }

// myFunction();

// console.log(number);

// Data types
// number
let age = 36;
console.log("age::", age);

// string
let name = "John";
console.log("name::", name);

// boolean
const isstudent = true;
console.log("isStudent::", isstudent);

// undefined
let x;
console.log("x::", x);
console.log("typeof x::", typeof x);

// null
const nothing = null;
console.log("nothing::", nothing);
console.log("typeof nothing::", typeof nothing); //Lỗi

// Symbol
const id = Symbol(1);
const id2 = Symbol(1);
console.log(id === id2);

// BigInt
const bigInt = 1234567890123456789012345678n;
console.log("bigInt::", bigInt);

// Object
const user = {
  name: "Alice",
  age: 30,
  address: "123 Main St",
  isActive: true,
};

const key = "name"; // Dynamic key
console.log(user[key]);

console.log(user.name);
console.log(user.age);
console.log(user.address);
console.log(user.isActive);

// Array
const numbers = [1, 2, 3, 4, 5];
console.log(numbers[1]);
