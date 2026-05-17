// Đồng bộ (Synchronous) - Thực thi tuần tự, từng dòng một
// console.log(1);
// console.log(2);
// console.log(3);

// Bất đồng bộ (Asynchronous) - Thực thi không tuần tự, có thể xảy ra sau một khoảng thời gian
// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 1000);

// setTimeout(() => {
//   console.log("D");
// }, 0);

// console.log("C");

// Callback
// promise
// async/await

// Promise

// const myPromise = new Promise((resolve, reject) => {
//   resolve("Thành công");
//   //   reject("Thất bại");
// });

// myPromise
//   // .then() - Xử lý khi Promise được giải quyết thành công
//   .then((result) => console.log(result))
//   // .catch() - Xử lý khi Promise bị từ chối
//   .catch((error) => console.log(error))
//   //   .finally() - Dù Promise thành công hay thất bại, vẫn sẽ được thực thi
//   .finally(() => console.log("Hoàn thành"));

// promise chaining - Chuỗi các Promise
// const examplePromise = new Promise((resolve, reject) => {
//   resolve("Thành công");
//   reject("Thất bại");
// });

// examplePromise
//   .then((res) => new Promise((resolve, reject) => resolve(res)))
//   .then((data) => new Promise((resolve, reject) => resolve(data)))
//   .then((value) => console.log(value));

// const productList = document.querySelector(".product-list");

// const fetchData = fetch("https://dummyjson.com/products");

// fetchData
//   .then((response) => response.json())
//   .then((data) => {
//     const products = data.products.slice(0, 10);
//     products.map((product) => {
//       console.log(product);

//       productList.innerHTML += `
//         <div class="product-card">
//           <img src=${product.thumbnail} alt="product" />
//           <div class="product-info">
//             <h3>${product.title}</h3>
//             <p>${product.description}</p>
//             <div class="price">$${product.price.toFixed(2)}</div>
//           </div>
//         </div>
//       `;
//     });
//   })
//   .catch((error) => console.log(error));

// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 0);

// Promise.resolve("C").then((res) => console.log(res));

// console.log("D");

console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);
