// Vòng lặp
// for

// for ('Khởi tạo biến đêm'; 'Điều kiện dừng'; 'Cập nhật biến đếm') {
//     // Khối lệnh được thực thi
// }

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

// for of

const numberList = [1, 2, 3, 4, 5];

for (const number of numberList) {
  console.log(number);
}

// for in

const student = { name: "Tùng", age: 23, address: "Hưng Yên" };

for (const key in student) {
  console.log(student[key]);
}

// break, continue

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break; // Dừng vòng lặp khi i bằng 5
  }

  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue; // Bỏ qua lần lặp khi i bằng 5
  }

  console.log(i);
}

// while

let number = 10;

while (number >= 0) {
  console.log(number);
  number--;
}
