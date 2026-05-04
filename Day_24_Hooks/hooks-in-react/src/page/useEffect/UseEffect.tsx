import React, { useEffect, useState } from "react";
import { ProductList } from "./ProductList";
import { ProductDetail2 } from "./ProductDetail2";
import { Cleanup } from "./Cleanup";

export const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [tab, setTab] = useState(1);

  useEffect(() => {}, [count]);

  const handleTab = (tab: number) => {
    setTab(tab);
  };

  return (
    <>
      <div className="flex gap-3">
        <button
          onClick={() => handleTab(1)}
          type="button"
          className="text-white bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-2xl"
        >
          UseEffect
        </button>
        <button
          onClick={() => handleTab(2)}
          type="button"
          className="text-white bg-linear-to-r from-green-400 via-green-500 to-green-600 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-2xl"
        >
          Get Product List
        </button>
        <button
          onClick={() => handleTab(3)}
          type="button"
          className="text-white bg-linear-to-r from-green-400 via-green-500 to-green-600 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-2xl"
        >
          Get Product Detail
        </button>
        <button
          onClick={() => handleTab(4)}
          type="button"
          className="text-white bg-linear-to-r from-green-400 via-green-500 to-green-600 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-2xl"
        >
          Demo clean up function
        </button>
      </div>

      <div className="mt-5">
        {tab === 1 ? (
          <>
            <div>
              <h1>UseEffect</h1>
              <p>Count: {count}</p>
              <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
          </>
        ) : tab === 2 ? (
          <>
            <ProductList />
          </>
        ) : tab === 3 ? (
          <ProductDetail2 />
        ) : (
          <Cleanup />
        )}
      </div>
    </>
  );
};
