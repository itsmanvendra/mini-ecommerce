import Link from "next/link";
import { useRef, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
const ItemsCard = ({ data }) => {
  const productRef = useRef(null);
  const [fav, setFav] = useState(false);
    return (
      <div className="flex flex-col gap-2" onClick={() => productRef.current.click()}>
        <div className="bg-[#0000000D] h-48 rounded-xl relative border">
          <img
            src={data.thumbnail}
            alt=""
            className="h-full w-full object-cover rounded-xl"
          />
          <div className="absolute top-2 right-2 p-2 bg-[#f2f2f2] rounded-lg drop-shadow-lg" onClick={(e) => {
            setFav((prev) => !prev)
            console.log('clicked')
            e.stopPropagation();
          }
          }>
            {fav ? <AiFillHeart className="text-2xl font-bold text-red-700" />  : <AiOutlineHeart className="text-2xl  font-bolder text-black" />}
          </div>
        </div>
        <div className="px-2">
          
            <Link
              href={`/products/${data.id}`}
            className="text-lg font-openSans font-semibold"
            ref={productRef}
            >
              {data.title}
            </Link>
          <p className="text-base font-roboto font-medium text-[#9f9f9f]">
            INR {data.price}
          </p>
        </div>
      </div>
    );
};

export default ItemsCard;
