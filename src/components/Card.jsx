import React, { useContext } from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenLeg } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { AddItem } from "../redux/cartSlice";
import { toast } from "react-toastify";
import { dataContext } from "../context/UserContext";

const Card = ({ name, price, type, image, id }) => {
  let dispatch = useDispatch();
  let { darkMode } = useContext(dataContext);
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="w-[290px] h-[400px] transition-all duration-1000 dark:bg-[#0d0d0d] bg-white p-3 rounded-lg shadow-lg flex flex-col gap-3 border-1 border-slate-400 hover:border-2 hover:border-green-400 hover:scale-105 hover:duration-300">
        <div className="w-full h-[60%] overflow-hidden rounded-lg">
          <img
            src={image}
            alt="food_item"
            className="w-full h-full sobject-cover"
          />
        </div>
        <div className="text-xl dark:text-zinc-100 transition-all duration-1000 font-semibold">
          {name}
        </div>
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
        <button
          onClick={() => {
            dispatch(
              AddItem({
                id: id,
                name: name,
                price: price,
                image: image,
                qty: 1,
              })
            );
            toast.success(name + " added to cart");
          }}
          className="p-2 bg-green-500 rounded-lg font-semibold text-white hover:bg-green-200 hover:text-gray-700 transition-all duration-300 cursor-pointer"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
