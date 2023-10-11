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
    <div style={styles} className="w-48 h-48 bg-white border rounded-3xl flex flex-col justify-center items-center gap-2 p-2 shadow-md">
      <div>
        <Image src={image} height={60} width={60} alt="" />
      </div>
      <div className="flex flex-col gap-0">
        <h1 className="text-center text-lg font-bold">{title}</h1>
        <p className="text-center text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

export default IntegrationCard;
