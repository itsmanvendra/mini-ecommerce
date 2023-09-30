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
  console.log(cart);
  const calculateSubtotal = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const calculateTotal = calculateSubtotal + 80;

  return (
    <div className="relative min-h-screen pt-8">
      <div className="flex mx-4  p-4 pl-0 items-center relative">
        <Link href="/">
          <FiArrowLeft className="text-2xl font-semibold" />
        </Link>
        <h1 className="grow text-2xl font-semibold font-sans text-center">
          My Cart
        </h1>
        <FiBell className="text-2xl font-extrabold" />
        <BsFill1CircleFill className="absolute top-4 right-4 rounded-full text-sm " />
      </div>
      <div className="mt-4 mx-4 overflow-y-auto">
        {cart.length > 0 ? (
          cart.map((item) => {
            return <CartItems key={item.id} item={item} />;
          })
        ) : (
          <div className="text-center text-2xl font-semibold mt-40">
            Cart is Empty
          </div>
        )}
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
        <div className="flex p-4">
          <p className="grow text-base text-[#979797] font-medium font-openSans">
            Sub-total
          </p>
          <p className="text-lg font-semibold">INR {calculateSubtotal}</p>
        </div>
        <div className="flex px-4 py-2">
          <p className="grow text-base text-[#979797] font-medium font-openSans">
            Vat (%)
          </p>
          <p className="text-lg font-semibold">INR 0.00</p>
        </div>
        <div className="flex px-4 py-2">
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
      <FooterCheckoutPage />
    </div>
  );
};

export default Checkout;