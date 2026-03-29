import React, { type ReactNode } from "react";

type ButtonVariant = "blue" | "green";

type MyButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  onClick: () => void;
};

export const MyButton1 = (props: MyButtonProps) => {
  const { children, variant, onClick } = props;

  const variantBase =
    "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5";

  const variants = {
    blue: "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5",
    green:
      "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5",
  };

  return (
    <button
      onClick={onClick}
      className={variant ? variants[variant] : variantBase}
    >
      {children}
    </button>
  );
};
