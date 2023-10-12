"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="container z-10">
      <nav className="text-primary-black-color flex justify-between items-center py-4">
        <div>
          <Link href="/">
            <Image src="/logo.png" height={60} width={100} alt="" />
          </Link>
        </div>

        <div className="hidden md:flex md:items-center md:gap-4">
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
        <div
          className="cursor-pointer md:hidden"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? (
            <Image
              className="cursor-pointer"
              src="/icons/cross.svg"
              height={30}
              width={30}
              alt=""
            />
          ) : (
            <Image
              className="cursor-pointer"
              src="/icons/menu.svg"
              height={30}
              width={30}
              alt=""
            />
          )}
        </div>
        {toggle && (
          <div
            className={`absolute top-14 left-0 right-0 py-2 w-screen gradient-navbar ${
              toggle
                ? "block h-auto transition ease-in duration-300"
                : "h-0 hidden"
            }`}
          >
            <div className="container">
              <ul className="flex flex-col gap-2 text-primary-black-color text-center">
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
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

{
  /* <div className="w-7 flex flex-col gap-0.5 cursor-pointer md:hidden">
<div className={`bar w-full h-1 bg-primary-black-color border rounded ${toggle ? 'clicked' : 'unclicked'}`}></div>
<div className={`bar w-full h-1 bg-primary-black-color border rounded ${toggle ? 'clicked' : 'unclicked'}`}></div>
<div className={`bar w-full h-1 bg-primary-black-color border rounded ${toggle ? 'clicked' : 'unclicked'}`}></div>
</div> */
}
