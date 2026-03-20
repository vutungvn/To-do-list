import React, { useState } from "react";

const CardMusic = () => {
  // Code js
  const number = 1;
  const users = ["A", "B", "C"];

  const [isPlay, setIsPlay] = useState<Boolean>(false);

  const handlePlay = () => {
    setIsPlay(true);
  };
  return (
    <>
      {true ? "abc" : ""}
      {true && "abc"}
      {users.map((user, index) => (
        <React.Fragment key={index}>{user}</React.Fragment>
      ))}
      <h1 className="abc" style={{ color: "red" }}>
        Card Music {number}
      </h1>
      <label htmlFor=""></label>
      <button onClick={handlePlay}>Nghe nhạc</button>
      {isPlay && <h2>Đang nghe nhạc</h2>}
    </>
  );
};

export default CardMusic;
