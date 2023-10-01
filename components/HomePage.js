"use client";
import React, { useState, useEffect } from "react";
import { FiBell } from "react-icons/fi";
import FooterHomePage from "./FooterHomePage";
import { BiFilter, BiSearch } from "react-icons/bi";
import { LuSearch } from "react-icons/lu";
import { BsFill1CircleFill } from "react-icons/bs";
import ItemsCard from "./ItemsCard";
import Loading from "./Loading";
import Search from "./Search";

const HomePage = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [active, setActive] = useState([1, 0, 0, 0]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [isSearchLoading, setIsSearchLoading] = useState(false);

  async function fetchData(url) {
    try {
      setIsLoading(true);
      let res = await fetch(url);
      res = await res.json();
      res = res.products;
      setAllProducts(res);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }
  async function fetchSearchKeybord(url) {
    try {
      setIsSearchLoading(true);
      let res = await fetch(url);
      res = await res.json();
      res = res.products;
      setSearchData(res);
      setIsSearchLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData("https://dummyjson.com/products");
  }, []);

  useEffect(() => {
    if (search !== "") {
      fetchSearchKeybord(`https://dummyjson.com/products/search?q=${search}`);
    }
  }, [search]);

  const handleClick = (e) => {
    if (e.target.innerText === "Women") {
      fetchData("https://dummyjson.com/products/search?q=women");
      let temp = [0, 0, 1, 0];
      setActive(temp);
    } else if (e.target.innerText === "Men") {
      fetchData("https://dummyjson.com/products/category/mens-shirts");
      let temp = [0, 1, 0, 0];
      setActive(temp);
    } else if (e.target.innerText === "All") {
      fetchData("https://dummyjson.com/products");
      let temp = [1, 0, 0, 0];
      setActive(temp);
    } else {
      fetchData("https://dummyjson.com/products/search?q=kids");
      let temp = [0, 0, 0, 1];
      setActive(temp);
    }
  };

  return (
    <div className="relative min-h-screen pt-8">
      <div className="flex mx-4  py-4 items-center relative">
        <h1 className="grow text-4xl font-semibold font-sans">Discover</h1>
        <FiBell className="text-2xl font-extrabold" />
        <BsFill1CircleFill className="absolute top-5 right-0 rounded-full text-sm " />
      </div>
      <div className="flex mx-4 mt-2 items-center gap-2 box-border">
        <div className="grow px-1 py-2 flex bg-[#F2F2F2] rounded-lg gap-1">
          <LuSearch size={28} className="" />
          <input
            type="text"
            placeholder="Search anything"
            className="bg-[#F2F2F2] font-openSans text-base text-[#828282] focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="p-1  rounded-lg bg-black text-white">
          <BiFilter size={32} className="font-bold" />
        </div>
      </div>
      <div className="flex mx-4 mt-3 items-center gap-3 justify-between relative">
        <div
          className={`p-2 bg-[#f2f2f2] text-black w-3/5 rounded-lg text-center text-lg font-openSans font-medium ${
            active[0] === 1 ? "bg-black text-white" : "bg-[#f2f2f2] text-black"
          } `}
          onClick={(e) => handleClick(e)}
        >
          All
        </div>
        <div
          className={`p-2 bg-[#f2f2f2] text-black w-3/5 rounded-lg text-center text-lg font-openSans font-medium ${
            active[1] === 1 ? "bg-black text-white" : "bg-[#f2f2f2] text-black"
          } `}
          onClick={(e) => handleClick(e)}
        >
          Men
        </div>
        <div
          className={`p-2 bg-[#f2f2f2] text-black w-3/5 rounded-lg text-center text-lg font-openSans font-medium ${
            active[2] === 1 ? "bg-black text-white" : "bg-[#f2f2f2] text-black"
          } `}
          onClick={(e) => handleClick(e)}
        >
          Women
        </div>
        <div
          className={`p-2 bg-[#f2f2f2] text-black w-3/5 rounded-lg text-center text-lg font-openSans font-medium ${
            active[3] === 1 ? "bg-black text-white" : "bg-[#f2f2f2] text-black"
          } `}
          onClick={(e) => handleClick(e)}
        >
          Kids
        </div>
        <Search search={search} isSearchLoading={isSearchLoading} searchData={searchData} />
      </div>

      <div className="mx-4 mt-6 grid grid-cols-2 gap-4 overflow-y-auto pb-40">
        {isLoading &&
          Array(6)
            .fill(0)
            .map((item, index) => {
              return <Loading key={index} />;
            })}
        {!isLoading && allProducts.length === 0 && (
          <div className="w-full text-center text-2xl font-bold">
            No Products Found
          </div>
        )}
        {!isLoading &&
          allProducts.length > 0 &&
          allProducts.map((item) => {
            return <ItemsCard key={item.id} data={item} isFavPage={false} />;
          })}
      </div>
      <FooterHomePage />
    </div>
  );
};

export default HomePage;
