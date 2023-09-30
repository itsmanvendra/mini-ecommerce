import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const FooterCheckoutPage = () => {
  return (
      <div className=" bottom-0 p-6 bg-white w-full flex text-gray-600 justify-between text-2xl items-center border-t border-[#00000033] fixed">
          <div className="flex bg-black text-white rounded-lg w-full justify-center items-center mx-auto gap-4 p-4">
              <p className="text-xl">Checkout</p>
              <AiOutlineArrowRight />
          </div>
    </div>
  );
};

export default FooterCheckoutPage;
