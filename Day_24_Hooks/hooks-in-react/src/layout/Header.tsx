import React from "react";

export const Header = () => {
  return (
    <div className="h-20 bg-white shadow flex justify-between items-center px-6">
      <h2>Hooks in React</h2>
      {/* 
      <div>
        {user ? (
          <>
            <span className="mr-4">{user}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : null}
      </div> */}
    </div>
  );
};
