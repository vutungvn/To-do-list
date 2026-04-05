// Giá trị truthy, falsy

// falsy
console.log("false::", Boolean(false));
console.log("0::", Boolean(0));
console.log('""::', Boolean(""));
console.log("null::", Boolean(null));
console.log("undefined::", Boolean(undefined));
console.log("NaN::", Boolean(NaN));

// truthy
console.log("true::", Boolean(true));
console.log("1::", Boolean(1));
console.log("abc::", Boolean("abc"));

console.log(true == "true");

let i = 2;
let res = i++ + --i - i-- + i++ - ++i;

console.log("res::", res);

console.log("AND::", "A" && "B" && NaN && "C");

let isAdult = false;
let hasLicense = true;

console.log(
  "Phải đủ từ 18 tuổi và có giấy phép mới được phép lái xe::",
  isAdult && hasLicense,
);

console.log("OR::", false || true || undefined);

let isMember = false;
let orderTotal = 1001;

console.log(
  "Giảm giá::",
  (isMember && orderTotal > 500) || (!isMember && orderTotal > 1000),
);

let number = 5;

let isEven = number % 2 === 0 ? "Even" : "Odd";

console.log("isEven::", isEven);

let score = 80;

switch (true) {
  case score >= 90:
    console.log("Xếp loại xuất sắc");
    break;
  case score >= 80:
    console.log("Xếp loại giỏi");
    break;
  case score >= 70:
    console.log("Xếp loại khá");
    break;
  case score >= 60:
    console.log("Xếp loại trung bình");
    break;
  default:
    console.log("Xếp loại yếu");
}
