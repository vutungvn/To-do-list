import React, { useState } from "react";
import { MyButton } from "./MyButton";

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen, "isOpen1");
  };

  console.log(isOpen, "isOpen");

  return (
    <>
      {isOpen && <h2>SideBar</h2>}
      <MyButton
        title={isOpen ? "Đóng" : "Mở"}
        variant="green"
        onClick={handleToggle}
      />
    </>
  );
};
