import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  decrement,
  increment,
} from "../../redux/features/counter/counterSlice";

export const DemoCounter = () => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      <h1>Count: {count}</h1>
      <div className="flex gap-2">
        <button onClick={handleIncrement}>Tăng</button>
        <button onClick={handleDecrement}>Giảm</button>
      </div>
    </>
  );
};
