import React, { useRef, useState } from "react";

export const UseRef = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  console.log("count::", count);

  console.log("Render");

  return (
    <div>
      {count}
      <button onClick={handleIncrement}>Tăng</button>
    </div>
  );
};
