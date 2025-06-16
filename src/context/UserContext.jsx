import React, { createContext, useState } from "react";
import { food_items } from "../food";
export const dataContext = createContext();

const UserContext = ({ children }) => {
  const [input, setInput] = useState("");
  const [filterCatagory, setFilterCatagory] = useState(food_items);
  let data = {
    input,
    setInput,
    filterCatagory,
    setFilterCatagory,
  };
  return (
    <div>
      <dataContext.Provider value={data}>{children}</dataContext.Provider>
    </div>
  );
};

export default UserContext;
