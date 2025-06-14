import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenLeg } from "react-icons/gi";

const Card = ({ name, price, type, image }) => {
  return (
    <div className="w-[290px] h-[400px] bg-white p-3 rounded-lg shadow-lg flex flex-col gap-3 border-1 border-slate-400 hover:border-2 hover:border-green-400 hover:scale-105 duration-300">
      <div className="w-full h-[60%] overflow-hidden rounded-lg">
        <img
          src={image}
          alt="food_item"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-xl font-semibold">{name}</div>
      <div className="flex justify-between items-center text-green-700">
        <div className="text-lg font-bold">Rs {price}/-</div>
        <div
          className={`flex justify-center items-center gap-2 text-lg font-semibold ${
            type === "veg" ? "text-green-500" : "text-red-500"
          } `}
        >
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenLeg />}
          <span>{type}</span>
        </div>
      </div>
      <button className="p-2 bg-green-500 rounded-lg font-semibold text-white hover:bg-green-200 hover:text-gray-700 transition-all duration-300 cursor-pointer">
        Add To Cart
      </button>
    </div>
  );
};

export default Card;
