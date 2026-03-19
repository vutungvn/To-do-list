// Các kiểu dữ liệu
// number;

let age: number = 30;

// string
let username: string = "Tùng";

// boolean
let isLogin: boolean = true;

// array
// Cách 1: Sử dụng dấu []
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Tùng", "Hùng", "Dũng"];
// Cách 2: Sử dụng generic Array
let scores: Array<number> = [90, 85, 80];

// object
let user: { name: string; age: number } = {
  name: "Tùng",
  age: 12,
};

// Type
// Type alias
{
  type User = {
    name: string;
    age: number;
  };

  let user: User = {
    name: "Tùng",
    age: 12,
  };
}

// Interface

{
  interface User {
    name: string;
    age: number;
  }

  let user: User = {
    name: "Tùng",
    age: 12,
  };
}

// optional properties

{
  type User = {
    name: string;
    age?: number;
  };

  let user: User = {
    name: "Tùng",
    // age: 12,
  };
}

// function trong ts
// function sum(a: number, b:number):number {
//     return a + b;
// }

// console.log(sum(1, 2));

const sum = (a: number, b: number): number => {
  return a + b;
};

// console.log(sum(1, 2));

// union types
let id: number | string;

id = 123;
id = "abc";

{
  let status: "success" | "error" | "pending";

  status = "success";
}

// any
let data: any;
data = 10;
data = "abc";
data = true;

// Unknown
{
  let data: unknown;
  if (typeof data === "string") {
    data.toUpperCase();
  }
}

// Ép kiểu type assertion
{
  let value: unknown = "Hello";

  if (typeof value === "string") {
    let len = value.length;
    // console.log(len);
  }

  let len = (value as string).length;
  //   console.log(len);
}

// generic
{
  // Không dùng generic
  const numbers = (arr: number[]): number => {
    return arr[0];
  };

  const strings = (arr: string[]): string => {
    return arr[0];
  };

  // Dùng generic
  const firstElement = <T>(arr: T[]): T => {
    return arr[0];
  };

  console.log(firstElement<number>([1, 2, 3]));

  console.log(firstElement<string>(["a", "b", "c"]));

  // Nhiều generic
  const pair = <T, U>(a: T, b: U) => {
    return [a, b];
  };

  console.log(pair(123, "abc"));
  console.log(pair([1, 2, 3, 4], true));
}

{
  interface ApiResponse<T> {
    data: T;
    status: number;
  }

  interface User {
    id: number;
    name: string;
  }

  const res: ApiResponse<User> = {
    data: {
      id: 1,
      name: "Tùng",
    },
    status: 200,
  };
}

// enum
{
  enum Role {
    Admin = "admin",
    User = "user",
    Guest = "guest",
  }

  let role: Role = Role.Admin;

  console.log(role);

  type UserType = {
    role: Role;
    name: string;
  };

  const user: UserType = {
    role: Role.User,
    name: "Tùng",
  };
}

// tuple
{
  let user: [number, string];
  user = [123, "abc"];
}

// Pick <T, K>

{
  interface User {
    id: number;
    name: string;
    age: number;
  }

  type UserPreview = Pick<User, "id" | "name">;

  const user: UserPreview = {
    id: 1,
    name: "Tùng",
  };
}

// Omit <T, K>
{
  interface User {
    id: number;
    name: string;
    age: number;
  }

  type UserWithoutAge = Omit<User, "age">;

  const user: UserWithoutAge = {
    id: 1,
    name: "Tùng",
  };
}

// Readonly
{
  interface User {
    id: number;
    name: string;
    age: number;
  }

  const user: Readonly<User> = {
    id: 1,
    name: "Tùng",
    age: 30,
  };
}

// Partial
{
  interface User {
    id: number;
    name: string;
    age: number;
  }

  type UserPartial = Partial<User>;

  const user: UserPartial = {
    id: 1,
  };
}

// Required
{
  interface User {
    id: number;
    name: string;
    age: number;
  }

  type UserRequired = Required<User>;

  const user: UserRequired = {
    id: 1,
    name: "Tùng",
    age: 30,
  };
}
