"use client";
import React from "react";
import { FiArrowLeft, FiBell } from "react-icons/fi";
import { BsFill1CircleFill } from "react-icons/bs";
import FooterCheckoutPage from "@/components/FooterCheckoutPage";

import Link from "next/link";
import { useGlobalContext } from "@/context/Context";
import CartItems from "@/components/CartItems";

const Checkout = () => {
  const { cart } = useGlobalContext();
  const calculateSubtotal = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const calculateTotal = calculateSubtotal + 80;

  return (
    <div className="relative min-h-screen pt-4">
      <div className="flex mx-4  py-4 items-center relative">
        <Link href="/">
          <FiArrowLeft className="text-2xl font-semibold" />
        </Link>
        <h1 className="grow text-2xl font-semibold font-sans text-center">
          My Cart
        </h1>
        <FiBell className="text-2xl font-extrabold" />
        <BsFill1CircleFill className="absolute top-4 right-0 rounded-full text-sm " />
      </div>
      {cart.length === 0 && (
        <div className="flex flex-col justify-center items-center h-[80vh] gap-2">
          <p className="text-2xl font-semibold">Your cart is empty 💩</p>
          <Link href="/" className="text-2xl text-[#f2f2f2] font-semibold bg-blue-500 px-5 py-3 rounded-lg">
            Go To Home
          </Link>
        </div>
      )}
      {cart.length > 0 && (
        <div>
          <div className="mt-0 mx-4 overflow-y-auto">
            {cart.map((item) => {
              return <CartItems key={item.id} item={item} />;
            })}
          </div>
          <div className="my-4 mx-4 bg-[#0000000D] rounded-xl">
            <input
              type="text"
              placeholder="Add a Voucher"
              disabled
              className="p-4 text-base font-medium font-openSans"
            />
          </div>
          <div className="my-4 mx-4">
            <div className="flex px-4 pt-2 py-1">
              <p className="grow text-base text-[#979797] font-medium font-openSans">
                Sub-total
              </p>
              <p className="text-lg font-semibold">INR {calculateSubtotal}</p>
            </div>
            <div className="flex px-4 pt-2 py-1">
              <p className="grow text-base text-[#979797] font-medium font-openSans">
                Vat (%)
              </p>
              <p className="text-lg font-semibold">INR 0.00</p>
            </div>
            <div className="flex px-4 pt-2 py-1">
              <p className="grow text-base text-[#979797] font-medium font-openSans">
                Shipping Fee
              </p>
              <p className="text-lg font-semibold">INR 80</p>
            </div>
          </div>
          <div className="mx-4 border-b-2"></div>
          <div className=" mt-2 mx-4 pb-40">
            <div className="flex justify-between px-4">
              <p className="text-lg font-semibold">Total</p>
              <p className="text-lg font-semibold">INR {calculateTotal}</p>
            </div>
          </div>
        </div>
      )}
      <FooterCheckoutPage />
    </div>
  );
};

export default Checkout;
