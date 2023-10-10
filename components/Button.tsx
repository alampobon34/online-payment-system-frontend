import React from "react";

interface ButtonProps {
  title: string;
  style?: string;
}

const Button = ({ title, style }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`py-2 px-4 rounded-md border border-black text-center ${style}`}
    >
      {title}
    </button>
  );
};

export default Button;
