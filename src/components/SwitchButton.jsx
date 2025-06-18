import React, { useContext } from "react";
import { dataContext } from "../context/UserContext";

const SwitchButton = () => {
  let { darkMode, setDarkMode } = useContext(dataContext);
  return (
    <div
      onClick={() => setDarkMode(!darkMode)}
      onCl
      className={`w-[50px] h-[22px] transition-all duration-600 bg-gray-700 flex border-1 border-green-500 overflow-hidden rounded-full ${
        darkMode ? "bg-green-500" : null
      }`}
    >
      <span
        className={`h-[20px] w-[20px] rounded-full transition-all duration-600 bg-white overflow-hidden ${
          darkMode ? "ml-7" : null
        }`}
      ></span>
    </div>
  );
};

export default SwitchButton;
