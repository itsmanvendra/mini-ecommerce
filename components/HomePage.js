import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { LuSettings } from "react-icons/lu";
import { RiHome6Line } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi";
const HomePage = () => {
  return (
    <div className="relative min-h-screen">
      HomePage
      <div className="absolute bottom-0 p-4 bg-white w-full flex text-gray-600 justify-between text-2xl items-center border-t border-gray-400">
        <div className="w-full flex flex-col justify-center p-2 items-center">
          <RiHome6Line className="text-black" />
          <span className="text-sm font-openSans text-gray-500">Home</span>
        </div>
        <div className="w-full flex flex-col justify-center p-2 items-center hover:text-black">
          <AiOutlineHeart />
          <span className="text-sm font-openSans text-gray-500">Saved</span>
        </div>
        <div className="w-full flex flex-col justify-center p-2 items-center hover:text-black">
          <HiOutlineShoppingBag />
          <span className="text-sm font-openSans text-gray-500">Cart</span>
        </div>
        <div className="w-full flex flex-col justify-center p-2 items-center hover:text-black">
          <LuSettings />
          <span className="text-sm text-gray-500">Settings</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
