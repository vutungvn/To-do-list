import React, { useState } from "react";

const Child = React.memo(({ filter }: { filter: { query: string } }) => {
  console.log("render");
  return <></>;
});

export const ReactMemo = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
      <Child filter={{ query: "React" }} />
    </div>
  );
};
