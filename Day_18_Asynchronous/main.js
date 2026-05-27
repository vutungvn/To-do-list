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

// console.log(1);

// setTimeout(() => console.log(2));

// Promise.resolve().then(() => console.log(3));

// Promise.resolve().then(() => setTimeout(() => console.log(4)));

// Promise.resolve().then(() => console.log(5));

// setTimeout(() => console.log(6));

// console.log(7);

// Promise.all

// const p1 = Promise.resolve(1);
// const p2 = Promise.resolve(2);
// const p3 = Promise.reject("Lỗi xảy ra");

// Promise.all([p1, p2, p3])
//   .then((values) => console.log(values)) // [1, 2, 3]
//   .catch((error) => console.log(error));

// const fetchPosts = fetch("https://jsonplaceholder.typicode.com/posts");
// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users");

// Promise.all([fetchPosts, fetchUsers])
//   .then((data) => {
//     const [postsResponse, usersResponse] = data;
//     postsResponse.json().then((posts) => console.log(posts));
//     usersResponse.json().then((users) => console.log(users));
//   })
//   .catch((error) => console.log("Lỗi xảy ra:", error));

// const p1 = Promise.resolve("Thành công");
// const p2 = Promise.resolve("Thành công");
// const p3 = Promise.reject("Thất bại");

// Promise.allSettled([p1, p2, p3])
//   .then((res) => {
//     res.forEach((item, index) => {
//       if (item.status === "fulfilled") {
//         console.log(
//           `Vị trí thành công thứ ${index + 1}, Kết quả: ${item.value}`,
//         );
//       } else {
//         console.log(
//           `Vị trí thành công thứ ${index + 1}, Kết quả: ${item.reason}`,
//         );
//       }
//     });
//   })
//   .catch((err) => console.log(err));

// Async/Await

const fetchData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

fetchData();
