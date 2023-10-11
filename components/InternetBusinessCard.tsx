import Image from "next/image";
import React from "react";

const InternetBusinessCard = () => {
  return (
    <div className="w-96 h-40 bg-[url('/icons/div-border.svg')] bg-contain bg-center bg-no-repeat relative text-primary-black-color">
      <div className="w-10 h-10 rounded-full bg-black flex justify-center items-center absolute top-10 left-3">
        <Image src="/icons/avater.png" height={20} width={20} alt="" />
      </div>
      <div style={{ lineHeight: "10x" }} className="absolute top-12 left-20 mt-3">
        <h1 className="font-bold" style={{ fontSize: "14px" }}>K Zaman Nashif</h1>
        <h1 className="opacity-90" style={{ fontSize: "10px" }}>
          Lead Back counsellor at file processing unit
        </h1>
      </div>

      <div style={{ lineHeight: "14px" }} className="absolute top-24 left-20 pt-1">
        <span style={{ fontSize: "11px" }}>
          “Simply the best. Better than all the rest. Recommend this product to
          beginners and advanced users.”
        </span>
      </div>
    </div>
  );
};

export default InternetBusinessCard;
