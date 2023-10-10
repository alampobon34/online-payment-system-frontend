import Image from "next/image";
import React from "react";

interface ServiceCardProps {
  title: string;
  desc: string;
  image: string;
}
const ServiceCard = ({ title, desc, image }: ServiceCardProps) => {
  return (
    <div className="bg-white p-4 w-80 rounded-md flex flex-col gap-3">
      <div className="w-12 h-12 rounded-full bg-primary-black-color flex justify-center items-center">
        <Image src={image} height={30} width={30} alt="" />
      </div>
      <h1 className="text-lg font-bold text-primary-black-color">{title}</h1>
      <p className="text-md text-primary-black-color">{desc}</p>
    </div>
  );
};

export default ServiceCard;
