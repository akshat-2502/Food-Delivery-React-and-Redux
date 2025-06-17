import React from "react";
import image1 from "../assets/image1.avif";
import { RiDeleteBinLine } from "react-icons/ri";

const Card2 = () => {
  return (
    <div className="w-full h-[110px] border-2 border-green-500 rounded-lg shadow-md bg-zinc-100 flex mb-2">
      <div className="w-[60%] h-full  p-2 flex">
        <div className="w-[60%] h-full overflow-hidden rounded-lg">
          <img
            className="object-cover w-full h-full"
            src={image1}
            alt="food_item"
          />
        </div>
        <div className="w-[40%] h-full flex flex-col items-center gap-5">
          <div className="font-semibold text-[18px]">Pancake</div>
          <div className="w-[60%] h-[33px] flex justify-between items-center rounded-md overflow-hidden bg-white border-1 border-green-500">
            <button className="bg-slate-200 w-[30%] h-full hover:bg-green-400 transition-all duration-400 cursor-pointer">
              -
            </button>
            <span className="text-green-500 font-bold">1</span>
            <button className="bg-slate-200 w-[30%] h-full  hover:bg-green-400 transition-all duration-400 cursor-pointer">
              +
            </button>
          </div>
        </div>
      </div>
      <div className="w-[40%] h-full  flex flex-col gap-6 items-end p-2">
        <span className="text-green-500 font-semibold">Rs 499/-</span>
        <RiDeleteBinLine className="w-[22px] h-[22px] text-red-500 cursor-pointer hover:scale-120 transition-all duration-300" />
      </div>
    </div>
  );
};

export default Card2;
