"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiArrowLeft, FiBell } from "react-icons/fi";
import { BsFill1CircleFill } from "react-icons/bs";
import { AiOutlineHeart, AiFillStar, AiFillHeart } from "react-icons/ai";
import FooterDetailsPage from "@/components/FooterDetailsPage";
import Link from "next/link";
import { useGlobalContext } from "@/context/Context";


const ProductDetailPage = () => {
  const { addToFavList, removeFromFavList, favList } = useGlobalContext();

  
  const [size, setSize] = useState("S");
  const [active, setActive] = useState([0, 0, 0]);
  
    const pathname = usePathname();
  const id = pathname.split("/")[2];
  const isPresent = favList.find((item) => item.id === id);
  const [product, setProduct] = useState({});
  const [fav, setFav] = useState(isPresent);
  
  const handleSizeChange = (e) => {
    setSize(e.target.innerText);
    setActive(e.target.innerText === "S" ? [1, 0, 0] : e.target.innerText === "M" ? [0, 1, 0] : [0, 0, 1]);
  }

    useEffect(() => {
      async function fetchData(url) {
        try {
          let res = await fetch(url);
          res = await res.json();
          setProduct(res);
        } catch (err) {
          console.log(err);
        }
        }
      fetchData(`https://dummyjson.com/products/${id}`);
    }, []);

  return (
    <div className="relative min-h-screen pt-4">
      <div className="flex mx-4 py-4 pl-0 items-center relative">
        <Link href="/">
          <FiArrowLeft className="text-2xl font-semibold" />
        </Link>
        <h1 className="grow text-2xl font-semibold font-sans text-center">
          Details
        </h1>
        <FiBell className="text-2xl font-extrabold" />
        <BsFill1CircleFill className="absolute top-4 right-0 rounded-full text-sm " />
      </div>
      <div className="mt-4 mx-4 overflow-y-auto pb-40">
        <div className="rounded-xl h-96 border-2 bg-cover bg-center relative">
          <img
            src={product?.images?.[0]}
            className="w-full h-full rounded-xl"
          />
          <div
            className="absolute top-4 right-4 p-2 bg-[#f2f2f2] rounded-lg drop-shadow-lg"
            onClick={(e) => {
              if (!fav) {
                addToFavList(product);
              } else {
                removeFromFavList(product.id);
              }
              setFav((prev) => !prev);
              e.stopPropagation();
            }}
          >
            {fav ? (
              <AiFillHeart className="text-2xl font-bold text-red-700" />
            ) : (
              <AiOutlineHeart className="text-2xl  font-bolder text-black" />
            )}
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
        <div className=" mt-2 px-2">
          <div className="py-2 text-black text-xl font-openSans">
            Choose Size
          </div>
          <div className="flex my-1 gap-4">
            <div
              className={`p-2 px-4 border border-[#9c9c9c] rounded-lg text-xl font-openSans ${
                active[0] === 1 ? "bg-blue-500 text-white" : ""
              }`}
              onClick={handleSizeChange}
            >
              S
            </div>
            <div
              className={`p-2 px-4 border border-[#9c9c9c] rounded-lg text-xl font-openSans ${
                active[1] === 1 ? "bg-blue-500 text-white" : ""
              }`}
              onClick={handleSizeChange}
            >
              M
            </div>
            <div
              className={`p-2 px-4 border border-[#9c9c9c] rounded-lg text-xl font-openSans  ${
                active[2] === 1 ? "bg-blue-500 text-white" : ""
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
