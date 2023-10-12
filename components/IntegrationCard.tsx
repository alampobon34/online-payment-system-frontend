import Image from "next/image";
import React from "react";

interface IntegrationCardProps {
  title: string;
  subtitle: string;
  image: string;
  styles?: React.CSSProperties;
}

const IntegrationCard = ({ title, subtitle, image, styles }: IntegrationCardProps) => {
  return (
    <div style={styles} className="w-32 h-32 md:w-48 md:h-48 bg-white border rounded-3xl flex flex-col justify-center items-center gap-2 p-2 shadow-md">
      <div>
        <Image className="w-8 h-8 md:w-14 md:h-14" src={image} height={60} width={60} alt="" />
      </div>
      <div className="flex flex-col gap-0">
        <h1 className="text-center font-bold text-sm md:text-lg">{title}</h1>
        <p className="text-center text-[10px] md:text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

export default IntegrationCard;
