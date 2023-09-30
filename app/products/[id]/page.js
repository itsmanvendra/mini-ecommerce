"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiArrowLeft, FiBell } from "react-icons/fi";
import { BsFill1CircleFill } from "react-icons/bs";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import FooterDetailsPage from "@/components/FooterDetailsPage";

const ProductDetailPage = () => {
  const [size, setSize] = useState("S");
  const [active, setActive] = useState([1, 0, 0]);
  
    const pathname = usePathname();
    const id = pathname.split("/")[2];
  const [product, setProduct] = useState({});
  
  const handleSizeChange = (e) => {
    setSize(e.target.innerText);
    setActive(e.target.innerText === "S" ? [1, 0, 0] : e.target.innerText === "M" ? [0, 1, 0] : [0, 0, 1]);
  }

    useEffect(() => {
      async function fetchData(url) {
        try {
          let res = await fetch(url);
          res = await res.json();
          console.log(res);
          setProduct(res);
        } catch (err) {
          console.log(err);
        }
        }
        console.log(id);
      fetchData(`https://dummyjson.com/products/${id}`);
    }, []);

  return (
    <div className="relative min-h-screen pt-8">
      <div className="flex mx-4 p-4 pl-0 items-center relative">
        <FiArrowLeft className="text-2xl font-semibold" />
        <h1 className="grow text-2xl font-semibold font-sans text-center">
          Details
        </h1>
        <FiBell className="text-2xl font-extrabold" />
        <BsFill1CircleFill className="absolute top-4 right-4 rounded-full text-sm " />
      </div>
      <div className="mt-4 mx-4 overflow-y-auto pb-40">
        <div className="rounded-xl h-96 border-2 bg-cover bg-center relative">
          <img
            src={product?.images?.[0]}
            className="w-full h-full rounded-xl"
          />
          <div className="absolute top-4 right-4 p-2 bg-[#f2f2f2] rounded-lg drop-shadow-lg">
            <AiOutlineHeart className="text-2xl text-black font-bold" />
          </div>
        </div>
        <div className="mt-2 px-2 py-2 text-3xl font-semibold">
          {product.title}
        </div>
        <div className=" px-2 py-1 flex  items-center">
          <AiFillStar className="text-[#FFA928] text-3xl" />
          <span className="text-xl font-semibold px-2 flex items-center">
            {" "}
            {product.rating}/5{" "}
            <p className="text-[#9C9C9C] text-lg  px-1">
              ({product.stock} reviews)
            </p>{" "}
          </span>
        </div>
        <div className="my-4 px-2 text-[#9C9C9C] text-xl font-openSans ">
          {product.description}
        </div>
        <div className=" my-2 px-2">
          <div className="py-2 text-black text-2xl font-openSans">
            Choose Size
          </div>
          <div className="flex my-2 gap-4">
            <div
              className={`p-2 px-4 border border-black rounded-lg text-2xl font-medium ${
                active[0] === 1 ? "bg-blue-600 text-white" : ""
              }`}
              onClick={handleSizeChange}
            >
              S
            </div>
            <div
              className={`p-2 px-4 border border-black rounded-lg text-2xl font-medium ${
                active[1] === 1 ? "bg-blue-600 text-white" : ""
              }`}
              onClick={handleSizeChange}
            >
              M
            </div>
            <div
              className={`p-2 px-4 border border-black rounded-lg text-2xl font-medium ${
                active[2] === 1 ? "bg-blue-600 text-white" : ""
              }`}
              onClick={handleSizeChange}
            >
              L
            </div>
          </div>
        </div>
      </div>
      <FooterDetailsPage product={product} size={size} />
    </div>
  );
};
export default ProductDetailPage;
