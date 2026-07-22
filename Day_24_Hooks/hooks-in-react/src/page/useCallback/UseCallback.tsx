import React, { useCallback, useState } from "react";

const Item = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log("render item");

  return <button onClick={onClick}>Click me</button>;
});

export const UseCallback = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Click...");
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
      <br />
      <br />
      <div>
        <Item onClick={handleClick} />
      </div>
    </div>
  );
};
