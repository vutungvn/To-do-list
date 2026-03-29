import React, { useState } from "react";
import { MyButton1 } from "./MyButton1";

export const FormDemo = () => {
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");

  //   const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const { value } = e.target;
  //     setUsername(value);
  //   };

  //   const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const { value } = e.target;
  //     setPassword(value);
  //   };

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    status: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleLogin = () => {
    console.log(formData);
  };
  return (
    <>
      <label htmlFor="">Username</label>
      <input
        onChange={handleChange}
        type="text"
        name="username"
        className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-50 px-3 py-2.5 shadow-xs placeholder:text-body rounded-lg"
      />
      <label htmlFor="">Password</label>
      <input
        onChange={handleChange}
        type="password"
        name="password"
        className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-50 px-3 py-2.5 shadow-xs placeholder:text-body rounded-lg"
      />
      <input onChange={handleChange} type="checkbox" name="status" />
      <br />
      <MyButton1 onClick={handleLogin} variant="green">
        Login
      </MyButton1>
    </>
  );
};
