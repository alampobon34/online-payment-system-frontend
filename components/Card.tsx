import Image from "next/image";
import React from "react";

interface CardProps {
  title: string;
  desc: string;
  image:string
}
const Card = ({ title, desc, image }: CardProps) => {
  return (
    <div className="w-72 rounded-lg border p-4 text-primary-black-color flex flex-col gap-3">
      <div className="w-10 h-10 rounded-full bg-primary-black-color flex justify-center items-center">
        <Image src={image} height={24} width={24} alt="" />
      </div>
      <h1 className="text-lg font-bold">{title}</h1>
      <p className="text-md">{desc}</p>
    </div>
  );
};

export default Card;
