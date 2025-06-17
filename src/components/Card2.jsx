import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { DecrementQty, IncrementQty, RemoveItem } from "../redux/cartSlice";

const Card2 = ({ foodItem }) => {
  let dispatch = useDispatch();
  return (
    <div className="w-full h-[120px] border-2 border-green-500 rounded-lg shadow-md bg-zinc-100 flex mb-2">
      <div className="w-[80%] h-full  p-2 flex gap-2">
        <div className="w-[40%] h-full overflow-hidden rounded-lg">
          <img
            className="object-cover w-full h-full"
            src={foodItem.image}
            alt="food_item"
          />
        </div>
        <div className="w-[40%] h-full flex flex-col items-center gap-3">
          <div className="md:font-semibold text-[15px]">{foodItem.name}</div>
          <div className="w-[75%] h-[33px] flex justify-between items-center rounded-md overflow-hidden bg-white border-1 border-green-500">
            <button
              onClick={() =>
                foodItem.qty > 1 ? dispatch(DecrementQty(foodItem.id)) : null
              }
              className="bg-slate-200 w-[30%] h-full hover:bg-green-400 transition-all duration-400 cursor-pointer"
            >
              -
            </button>
            <span className="text-green-500 font-bold">{foodItem.qty}</span>
            <button
              onClick={() => dispatch(IncrementQty(foodItem.id))}
              className="bg-slate-200 w-[30%] h-full  hover:bg-green-400 transition-all duration-400 cursor-pointer"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="w-[20%] h-full  flex flex-col gap-6 items-end p-2">
        <span className="text-green-500 font-semibold">
          Rs {foodItem.price}/-
        </span>
        <RiDeleteBinLine
          onClick={() => dispatch(RemoveItem(foodItem.id))}
          className="w-[22px] h-[22px] text-red-500 cursor-pointer hover:scale-120 transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default Card2;
