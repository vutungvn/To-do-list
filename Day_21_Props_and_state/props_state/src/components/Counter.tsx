import React, { useState } from "react";
import { MyButton1 } from "./MyButton1";

export const Counter = () => {
  let [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };
  return (
    <>
      <h1>Count: {count}</h1>
      <MyButton1 onClick={handleIncrement} variant="blue">
        Tăng
      </MyButton1>
      <MyButton1 onClick={handleDecrement} variant="green">
        Giảm
      </MyButton1>
      <MyButton1 onClick={handleReset} variant="green">
        Reset
      </MyButton1>
    </>
  );
};
