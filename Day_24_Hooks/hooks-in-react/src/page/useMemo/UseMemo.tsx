import React, { useMemo, useState } from "react";

const users = Array.from({ length: 1000 }, (_, i) => `User ${i + 1}`);

export const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  const filterUsers = useMemo(() => {
    console.log("Filter...");

    return users.filter((item) => item.includes(search));
  }, [search]);

  return (
    <div>
      {count}
      <div>
        <button onClick={() => setCount(count + 1)}>Tăng</button>
      </div>
      <input
        type="text"
        placeholder="search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filterUsers.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
