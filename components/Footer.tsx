import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="gray-background text-primary-black-color">
      <div className="container">
        <div className="flex justify-around items-center py-8">
          <div className="w-3/4">
            <h1 className="text-4xl font-bold">
              Secure your <br /> transactions and <br /> expand your business.
            </h1>
          </div>
          <div className="w-1/4">
            <div className="flex items-center justify-start gap-3">
              <Image src="/icons/location.svg" width={16} height={16} alt="" />
              <span>
                House No #16, Road No #15 <br />
                Nikunja-2, Dhaka-1229
              </span>
            </div>
            <div className="flex justify-start items-center gap-3">
              <Image src="/icons/email.png" width={16} height={16} alt="" />
              <span>
                aminul.diit@gmail.com <br />
                alampobon34@gmail.com
              </span>
            </div>
          </div>
        </div>
        <hr className="my-4 h-0.5 border-t-0 bg-gray-200 opacity-100 dark:opacity-50" />
        <div className="flex justify-center items-center gap-4 my-4">
          <Image src="/logo.png" height={60} width={100} alt="" />
          <ul className="flex items-center gap-4">
            <li>About</li>
            <li>Solutions</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
        </div>
        <div className="flex justify-center gap-4 my-2">
          <span>&copy; Copyright 2023, All Rights Reserved</span>
          <span>Design By: Aminul Ahosan</span>
          <span>Developed By: Sayed Monshurul Alam</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
