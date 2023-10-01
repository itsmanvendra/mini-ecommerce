import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsFillTrash3Fill } from "react-icons/bs";
import { useGlobalContext } from "@/context/Context";

const CartItems = ({ item }) => {
    const { addToCart, removeFromCart, removeSingleItem } = useGlobalContext();
    const handleDelete = () => {
        removeFromCart(item.id);
    }
    const handleSubElement = () => {
        removeSingleItem(item.id);
    }
    const handleAddElement = () => {
        addToCart(item);
    }
  return (
    <div className="w-full bg-[#f2f2f2] rounded-xl flex h-40 items-center gap-2 my-4">
      <div className="w-1/3 h-32 text-center  mx-4">
        <img
          src={item.thumbnail}
          alt=""
          className="h-full w-full object-cover rounded-xl"
        />
      </div>
      <div className="w-2/3 h-32 flex flex-col">
        <div className="flex px-1 gap-1 grow">
          <div className="grow">
            <div className="text-lg  font-medium">
              {item.title}
            </div>
            <div className="text-sm font-openSans text-gray-500">
              Size {item.size}
            </div>
          </div>
          <div
            className=" text-red-500 text-lg box-border py-2 mr-2"
            onClick={handleDelete}
          >
            <BsFillTrash3Fill />
          </div>
        </div>
        <div className="flex gap-2 mr-1">
          <div className="text-base font-semibold grow">INR {item.price}</div>
          <div className="flex gap-1">
            <div
              className="p-1 rounded-md border border-red-500 font-bold "
              onClick={handleSubElement}
            >
              <AiOutlineMinus />
            </div>
            <div className=" p-1 rounded-lg text-sm  font-openSans font-semibold ">
              {item.quantity}
            </div>
            <div
              className="p-1 rounded-lg border border-red-500 font-bold"
              onClick={handleAddElement}
            >
              <AiOutlinePlus />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
