"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import { SiMessenger } from "react-icons/si";
import {
  AiFillHome,
  AiFillMinusSquare,
  AiFillPlusSquare,
} from "react-icons/ai";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed w-full top-0">
      <nav className="max-w-screen-xl mx-auto flex items-center justify-between py-5 px-3 bg-gray-900">
        <div className="logo text-xl font-bold">TruthGate</div>
        <div className="nav_items flex items-center justify-center gap-x-4 font-bold text-xl">
          <button type="button" onClick={() => setMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <AiFillPlusSquare className=" hover:fill-[var(--secondary-color)]" />
            ) : (
              <AiFillMinusSquare className=" hover:fill-[var(--secondary-color)]" />
            )}
          </button>
          <Link href="/feed">
            <AiFillHome className=" hover:fill-[var(--secondary-color)]" />
          </Link>
          <Link href="/messenger" className="relative">
            <sup className="absolute text-white w-4 h-4 bg-red-500 flex items-center justify-center rounded-xl -top-3 right-0"style={{fontSize:"10px"}}>3</sup>
            <SiMessenger className=" hover:fill-[var(--secondary-color)]" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
