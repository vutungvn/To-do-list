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
