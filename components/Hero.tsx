import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="gradient-color">
      <div className="container flex flex-col justify-center items-center md:flex-row">
        <div className="w-full flex flex-col gap-3 md:w-1/2">
          <div className="">
            <h1 className="text-4xl font-extrabold text-primary-black-color md:text-5xl lg:text-6xl">
              The new gen <br /> payment <br /> system.
            </h1>
          </div>
          <div>
            <p className="text-primary-black-color">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do
              eiusmod tempor incididunt ut labore et.
            </p>
          </div>
          <div>
            <Button title="Get your card" style="bg-primary-black-color text-white hover:opacity-90"/>
          </div>
          <div className="flex flex-row items-center gap-2">
            <h1 className="text-3xl font-bold text-primary-black-color">2X</h1>
            <div className="flex flex-col text-primary-black-color">
                <span style={{fontSize: "12px"}}>faster and safer</span>
                <span style={{fontSize: "12px"}}>payment system</span>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="2000" className="w-full md:w-1/2">
          <Image
            className="w-full"
            src="/images/hero.png"
            width={200}
            height={200}
            alt=""
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
