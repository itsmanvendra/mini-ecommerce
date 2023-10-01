import React from "react";
import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import { useGlobalContext } from "@/context/Context";
  
const FooterDetailsPage = ({ product, size }) => {
  const [showGotoCart, setShowGotoCart] = useState(false);
  const { addToCart } = useGlobalContext();

  const handleAddToCart = () => {
    const productWithSize = { ...product, size };
    addToCart(productWithSize);
    setShowGotoCart(true);
  }

  return (
    <div className=" bottom-0 p-4 bg-white w-full flex text-gray-600 justify-between text-2xl items-center border-t border-[#00000033] fixed">
      <div className="flex flex-col p-2   ">
        <p className="text-base font-semibold  text-[#9c9c9c]">Price</p>
        <h1 className="text-lg text-black font-medium font-openSans">
          INR {product?.price}
        </h1>
      </div>
      {showGotoCart ? (
        <Link
          href="/checkout"
          className="flex w-3/5 p-2 bg-green-600 text-white font-bold rounded-lg justify-center items-center py-4 gap-2 "
        >
          <p className="text-base">Go to Cart</p>
          <AiOutlineArrowRight />
        </Link>
      ) : (
        <div
          className="flex w-3/5 p-2 bg-black text-white rounded-lg justify-center items-center py-4 gap-2 "
          onClick={handleAddToCart}
        >
          <HiOutlineShoppingBag />
          <p className="text-sm">Add to Cart</p>
        </div>
      )}
    </div>
  );
};

export default FooterDetailsPage;
