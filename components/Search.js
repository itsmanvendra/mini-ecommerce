"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const Search = ({ search, isSearchLoading, searchData }) => {
    const router = useRouter();
  return (
    <div
      className={`border bg-[#f2f2f2] min-w-full absolute -left-1 -right-1 -top-1 z-50 max-h-48 overflow-y-auto rounded-md ${
        search !== "" ? "" : "hidden"
      }`}
    >
      {isSearchLoading && (
        <div className="flex items-center justify-between px-3 py-4 border-b border-[#b4b3b3]">
          <div className="text-base text-[#434242] font-semibold capitalize">
            Loading...
          </div>
        </div>
      )}
      {!isSearchLoading && searchData.length > 0 &&
        search !== "" &&
              searchData.map((item) => {
          return (
            <div
                  key={item.id}
                  className="flex items-center justify-between px-3 py-2 border-b border-[#b4b3b3]"
                  onClick={() => {
                    router.push(`/products/${item.id}`);
                  }}
            >
              <Link href={`/products/${item.id}`} className="text-base text-[#434242] font-semibold capitalize" >
                {item.title}
              </Link>
            </div>
          );
        })}
      {!isSearchLoading &&
        searchData.length === 0 &&
        search !== "" && (
          <div
            className="flex items-center justify-between px-3 py-4 border-b border-[#b4b3b3]"
          >
            <div className="text-base text-center text-black font-semibold capitalize">
              No Results Found
            </div>
          </div>
        )}
    </div>
  );
};

export default Search;
