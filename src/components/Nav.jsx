import React, { useContext, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from "../context/UserContext";
import { food_items } from "../food";
import { useSelector } from "react-redux";

const Nav = () => {
  let {
    input,
    setInput,
    setFilterCatagory,
    setShowCart,
    setShowMenu,
    darkMode,
  } = useContext(dataContext);

  useEffect(() => {
    let newList = food_items.filter(
      (item) =>
        item.food_name.includes(input) ||
        item.food_name.toLowerCase().includes(input)
    );
    setFilterCatagory(newList);
  }, [input]);

  let items = useSelector((state) => state.cart);

  return (
    <div
      className={`w-full h-[100px] flex justify-between items-center px-5 md:px-8 ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="w-[60px] h-[60px] dark:bg-zinc-950 bg-white flex justify-center items-center shadow-xl transition-all duration-500 hover:bg-green-100 cursor-pointer rounded-md hover:scale-110">
        <IoMenu
          onClick={() => setShowMenu(true)}
          className="w-[30px] h-[60px] text-green-500"
        />
      </div>
      <form
        className="transition-all duration-1000 dark:bg-[#0d0d0d] w-[45%] md:w-[70%] h-[60px] px-5 gap-5 flex  items-center bg-white shadow-md rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <FaSearch className="w-[20px] h-[20px] text-green-500" />
        <input
          className="outline-none w-[100%] text-[14px] md:text-[20px] transition-all duration-1000 dark:text-zinc-100"
          type="text"
          placeholder="Search Items ..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <div
        onClick={() => setShowCart(true)}
        className=" dark:bg-zinc-950 w-[60px] h-[60px] bg-white flex justify-center items-center shadow-xl rounded-md relative hover:bg-green-100 cursor-pointer transition-all duration-500 hover:scale-110"
      >
        <span className="absolute top-0 right-2 text-green-500 font-bold text-[18px]">
          {items.length}
        </span>
        <LuShoppingBag className="w-[30px] h-[60px] text-green-500" />
      </div>
    </div>
  );
};

export default Nav;
