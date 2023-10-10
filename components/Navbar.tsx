import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="container z-10">
      <nav className="text-primary-black-color flex justify-between items-center py-4">
        <div>
          <Link href="/">
            <Image src="/logo.png" height={60} width={100} alt="" />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <ul className="flex items-center gap-6 text-primary-black-color">
            <li className="hover:opacity-90">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:opacity-90">
              <Link href="/">About</Link>
            </li>
            <li className="hover:opacity-90">
              <Link href="/">Blog</Link>
            </li>
            <li className="hover:opacity-90">
              <Link href="/">Contact</Link>
            </li>
            <li className="hover:opacity-90">
              <Link href="/">Sign in</Link>
            </li>
          </ul>
          <div>
            <Button
              title="Get you card"
              style="hover:bg-primary-black-color hover:text-white hover:border hover:border-white"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
