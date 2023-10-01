import { AiOutlineHeart } from "react-icons/ai";
import { LuSettings } from "react-icons/lu";
import { RiHome6Line } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const FooterHomePage = () => {
  const pathname = usePathname();
  return (
    <div className=" bottom-0 p-4 bg-white w-full flex text-gray-600 justify-between text-2xl items-center border-t border-[#00000033] fixed z-40">
      <Link href="/" className="w-full flex flex-col justify-center p-2 items-center">
        <RiHome6Line className={`${pathname === '/' ? 'text-black' : ' '}`} />
        <span className="text-sm font-openSans text-gray-500">Home</span>
      </Link>
      <Link href="/favourites" className="w-full flex flex-col justify-center p-2 items-center hover:text-black ">
        <AiOutlineHeart className={`${pathname === '/favourites' ? 'text-black' : ''}`} />
        <span className="text-sm font-openSans text-gray-500">Saved</span>
      </Link>
      <Link href="/checkout" className="w-full flex flex-col justify-center p-2 items-center hover:text-black">
        <HiOutlineShoppingBag />
        <span className="text-sm font-openSans text-gray-500">Cart</span>
      </Link>
      <div className="w-full flex flex-col justify-center p-2 items-center hover:text-black">
        <LuSettings />
        <span className="text-sm text-gray-500">Settings</span>
      </div>
    </div>
  );
};

export default FooterHomePage;
