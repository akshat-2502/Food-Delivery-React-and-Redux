import React, { useContext, useEffect } from "react";
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from "../context/UserContext";
import { food_items } from "../food";

const Nav = () => {
  let { input, setInput, setFilterCatagory } = useContext(dataContext);

  useEffect(() => {
    let newList = food_items.filter(
      (item) =>
        item.food_name.includes(input) ||
        item.food_name.toLowerCase().includes(input)
    );
    setFilterCatagory(newList);
  }, [input]);
  return (
    <div className="w-full h-[100px] flex justify-between items-center px-5 md:px-8">
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center shadow-xl rounded-md">
        <MdFastfood className="w-[30px] h-[60px] text-green-500" />
      </div>
      <form
        className=" w-[45%] md:w-[70%] h-[60px] px-5 gap-5 flex  items-center bg-white shadow-md rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <FaSearch className="w-[20px] h-[20px] text-green-500" />
        <input
          className="outline-none w-[100%] text-[14px] md:text-[20px]"
          type="text"
          placeholder="Search Items ..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center shadow-xl rounded-md relative">
        <span className="absolute top-0 right-2 text-green-500 font-bold text-[18px]">
          0
        </span>
        <LuShoppingBag className="w-[30px] h-[60px] text-green-500" />
      </div>
    </div>
  );
};

export default Nav;
