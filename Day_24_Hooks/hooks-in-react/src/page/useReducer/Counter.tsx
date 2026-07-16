import React, { useReducer, useState } from "react";

const initialState = { count: 0 };

const reducer = (state: { count: number }, action: { type: string }) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {/* UseReducer */}
      <p>Count: {state.count}</p>
      <div className="flex gap-2">
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="text-white bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-2xl"
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="text-white bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-2xl"
        >
          -
        </button>
      </div>
    </div>
  );
};
