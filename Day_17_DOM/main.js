// Lấy theo id
const title = document.getElementById("main-title");
// console.log("title::", title);

// // Lấy theo class
// const items = document.getElementsByClassName("item");
// console.log("items::", items);

// for (let i = 0; i < items.length; i++) {
//   console.log("item::", items[i]);
// }

// // Lấy theo tag
// const paragraphs = document.getElementsByTagName("p");
// console.log("paragraphs::", paragraphs);

// for (let i = 0; i < paragraphs.length; i++) {
//   console.log("paragraph::", paragraphs[i]);
// }

// Lấy theo CSS selector
// querySelector trả về phần tử đầu tiên khớp với selector
const firstItem = document.querySelector(".item");
// console.log("firstItem::", firstItem);

// // querySelectorAll trả về tất cả phần tử khớp với selector
// const allItems = document.querySelectorAll(".item");
// console.log("allItems::", allItems);

// allItems.forEach((item) => {
//   console.log("item::", item);
// });

// Thay đổi style của phần tử
// title.style.color = "red";
// title.style.backgroundColor = "blue";

// Thay đổi attribute của phần tử
// console.log("Hello");

let link = document.querySelector("a");

link.setAttribute("href", "https://youtube.com");

// Thay đổi nội dung của phần tử
link.textContent = "YouTube";

// Thay đổi html
title.innerHTML = "<span>Đây là tiêu đề đã được thay đổi</span>";

// firstItem.classList.add("highlight");
// firstItem.classList.remove("highlight");
// firstItem.classList.toggle("highlight");

if (firstItem.classList.contains("item-1")) {
  // console.log("Phần tử có class item-1");
}

// firstItem.remove();

// const element = document.createElement("p");
// element.textContent = "Đây là đoạn văn mới được tạo";
// element.className = "new-paragraph";

// console.log(element);

// const parent = document.querySelector(".parent");
// parent.appendChild(element);

// const child1 = document.querySelector(".child-1");
// const child2 = document.querySelector(".child-2");

// const parentElement = child1.parentElement;
// console.log("parentElement::", parentElement);

// const parentElement2 = child2.parentElement;
// console.log("parentElement2::", parentElement2);

// const rootElement = child1.closest(".root-element");
// console.log("rootElement::", rootElement);

// const parentElement = document.querySelector(".parent-element");
// console.log(parentElement);
// const childs = parentElement.children;
// const firstChild = parentElement.firstElementChild;
// const lastChild = parentElement.lastElementChild;
// console.log(childs);
// console.log(firstChild);
// console.log(lastChild);

const child2 = document.querySelector(".child-2");
console.log(child2);

const previousSibling = child2.previousElementSibling;
const nextSibling = child2.nextElementSibling;
console.log(previousSibling);
console.log(nextSibling);

const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  alert("Button clicked!");
});

const input = document.querySelector(".input");

input.addEventListener("input", function (event) {
  const { value } = event.target;
  console.log("Input value:", value);
});
