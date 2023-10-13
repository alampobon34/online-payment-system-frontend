import Image from "next/image";
import React from "react";

interface ServiceCardProps {
  title: string;
  desc: string;
  image: string;
}
const ServiceCard = ({ title, desc, image }: ServiceCardProps) => {
  return (
    <div data-aos="fade-left" className="bg-white p-4 rounded-md flex flex-col gap-3 xxsm:w-72 xsm:w-96">
      <div className="w-12 h-12 rounded-full bg-primary-black-color flex justify-center items-center">
        <Image src={image} height={30} width={30} alt="" />
      </div>
      <h1 className="text-lg font-bold text-primary-black-color">{title}</h1>
      <p className="text-md text-primary-black-color">{desc}</p>
    </div>
  );
};

export default ServiceCard;
