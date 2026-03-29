import React, { type ComponentProps } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const MyInput = (props: InputProps) => {
  const { value, name, type } = props;

  return <input value={value} name={name} type={type} />;
};
