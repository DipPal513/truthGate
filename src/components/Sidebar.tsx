import Link from "next/link";
import React from "react";
import { FiHome } from "react-icons/fi";
const Sidebar = () => {
  return (
    <div className="sidebar fixed h-full w-[20vw] bg-white p-8">
      <div className="logo">
        <h2 className="text-xl">logo</h2>
      </div>
      <ul className="flex-col gap-y-3 px-5 pt-10 text-black">
        {[1, 2, 3, 4, 5].map((el) => (
          <li className="flex items-center gap-x-5 px-3 py-3 rounded font-bold mb-3 hover:bg-gray-100 hover:text-[var(--main-color)] duration-200 cursor-pointer" key={el}>
            <FiHome className="text-xl"/>
            <span>Home</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
