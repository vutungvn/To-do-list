// Function
// function declaration

function greet() {
  console.log("Hello World!");
}

greet();

// function expression

const showMessage = function () {
  console.log("Welcome to JavaScript!");
};

showMessage();

// arrow function
const sayHello = () => {
  console.log("Hello there!");
};

sayHello();

function add(a, b) {
  return a + b;
}

console.log(add(5, 3));

// Callback function

function caculate(a, b, cb) {
  console.log("Đang thực hiện tính toán...");

  const sum = cb(a, b);

  return sum;
}

function add(a, b) {
  return a + b;
}

console.log(caculate(4, 6, add));
