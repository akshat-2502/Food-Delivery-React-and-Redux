import React, { createContext, useState } from "react";
import { food_items } from "../food";
export const dataContext = createContext();

const UserContext = ({ children }) => {
  const [input, setInput] = useState("");
  const [filterCatagory, setFilterCatagory] = useState(food_items);
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  let data = {
    input,
    setInput,
    filterCatagory,
    setFilterCatagory,
    showCart,
    setShowCart,
    setShowMenu,
    showMenu,
    darkMode,
    setDarkMode,
  };
  return (
    <div>
      <dataContext.Provider value={data}>{children}</dataContext.Provider>
    </div>
  );
};

export default UserContext;
