import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import categories from "../Category";
import Card from "../components/Card";
import { food_items } from "../food";
import { dataContext } from "../context/UserContext";
import { IoMdClose } from "react-icons/io";
import Card2 from "../components/Card2";

const Home = () => {
  let { filterCatagory, setFilterCatagory, input, showCart, setShowCart } =
    useContext(dataContext);
  const [activeCatagory, setActiveCatagory] = useState("all");

  const filter = (catagory) => {
    setActiveCatagory(catagory.toLowerCase());
    if (catagory.toLowerCase() === "all") {
      setFilterCatagory(food_items);
    } else {
      let newList = food_items.filter(
        (item) => item.food_category.toLowerCase() === catagory.toLowerCase()
      );
      setFilterCatagory(newList);
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-200">
      <Nav />
      {!input ? (
        <div className="flex flex-wrap justify-center items-center gap-5 w-[100%]">
          {categories.map((item) => (
            <div
              key={item.id}
              className={` ${
                activeCatagory === item.name.toLowerCase()
                  ? "bg-green-200"
                  : "bg-white"
              } w-[140px] h-[150px] text-[20px] text-gray-700 flex flex-col items-center gap-5 justify-center shadow-xl rounded-lg hover:bg-green-200 cursor-pointer transition-all duration-300`}
              onClick={() => filter(item.name)}
            >
              {item.image}
              {item.name}
            </div>
          ))}
        </div>
      ) : null}

      <div className="w-full flex flex-wrap gap-5 p-8 justify-center items-center">
        {filterCatagory.map((item) => (
          <Card
            name={item.food_name}
            price={item.price}
            image={item.food_image}
            type={item.food_type}
          />
        ))}
      </div>

      {/* CART */}

      <div
        className={`w-[40vw] h-[100vh] fixed top-0 right-0 bg-white border-2 border-green-600 rounded-lg py-6 px-3 transition-all duration-700 ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex justify-between items-center">
          <span className="text-green-500 text-[20px] font-serif font-semibold">
            Selected Items
          </span>
          <IoMdClose
            onClick={() => setShowCart(false)}
            className="w-[35px] h-[35px] text-green-500 font-semibold hover:text-green-800 cursor-pointer"
          />
        </header>
        <Card2 />
      </div>
    </div>
  );
};

export default Home;
