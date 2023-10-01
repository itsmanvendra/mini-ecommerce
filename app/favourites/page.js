"use client";
import Link from "next/link";
import { FiArrowLeft, FiBell } from "react-icons/fi";
import { BsFill1CircleFill } from "react-icons/bs";
import FooterHomePage from "@/components/FooterHomePage";
import { useGlobalContext } from "@/context/Context";
import ItemsCard from "@/components/ItemsCard";
const Favourites = () => {
  const { favList } = useGlobalContext();
  return (
    <div className="relative min-h-screen pt-4">
      <div className="flex mx-4  py-4 items-center relative">
        <Link href="/">
          <FiArrowLeft className="text-2xl font-semibold" />
        </Link>
        <h1 className="grow text-2xl font-semibold font-sans text-center">
          Favourites
        </h1>
        <FiBell className="text-2xl font-extrabold" />
        <BsFill1CircleFill className="absolute top-4 right-0 rounded-full text-sm " />
      </div>
      <div className="mx-4 mt-6 grid grid-cols-2 gap-4 overflow-y-auto pb-40">
        {favList.length > 0 &&
          favList.map((item) => {
            return <ItemsCard key={item.id} data={item} isFavPage={true} />;
          })}
      </div>
      {favList.length === 0 && <div className="text-center text-2xl font-bold">No Favourites :(</div>}
      <FooterHomePage />
    </div>
  );
};

export default Favourites;
