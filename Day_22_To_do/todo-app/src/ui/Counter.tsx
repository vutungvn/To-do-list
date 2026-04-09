import React, { useState } from "react";
import { MyButton } from "../components/MyButton";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

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
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-bold text-2xl">Counter</h1>
        <p className="text-xl font-bold">{count}</p>

        <div className="flex gap-2">
          <MyButton variant="green" onClick={() => handleIncrement()}>
            Increment
          </MyButton>
          <MyButton
            variant="blue"
            onClick={() => handleDecrement()}
            disabled={!count}
          >
            Decrement
          </MyButton>
          <MyButton onClick={() => handleReset()} disabled={!count}>
            Reset
          </MyButton>
        </div>
      </div>
    </>
  );
};
