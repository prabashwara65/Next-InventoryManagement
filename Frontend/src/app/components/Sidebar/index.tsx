"use client"
import { Menu } from "lucide-react";
import React from "react";

const sidebar = () => {
  return (
    <div>
      <div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
        <div>Logo</div>
        <h1 className="font-extrabold text-2xl">EDSTOCKS</h1>
        <button className="md:hidden px-3 py-3 bg-gray-300 rounded-full hover:bg-blue-100" onClick={() => {}}>
          <Menu className="w-4 h-4" />
        </button>
      </div>
     
      <div className="flex-grow mt-8"> {/* Links */}</div>
      <div>
        <p className="text-center text-xs text-green-500">&copy; 2024 EDSTOCKS</p>
      </div>
    </div>
  );
};

export default sidebar;
