import React from "react";
interface TitleProps {
  title: string;
}
const Title = ({ title }: TitleProps) => {
  return (
    <h1 className="text-3xl font-bold text-primary-black-color">{title}</h1>
  );
};

export default Title;
