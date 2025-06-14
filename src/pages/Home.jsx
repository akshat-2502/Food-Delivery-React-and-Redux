import React from "react";
import Nav from "../components/Nav";
import categories from "../Category";
import Card from "../components/Card";
import { food_items } from "../food";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-slate-200">
      <Nav />
      <div className="flex flex-wrap justify-center items-center gap-5 w-[100%]">
        {categories.map((item) => (
          <div
            key={item.id}
            className="w-[140px] h-[150px] text-[20px] text-gray-700 bg-white flex flex-col items-center gap-5 justify-center shadow-xl rounded-lg hover:bg-green-200 cursor-pointer transition-all duration-300"
          >
            {item.image}
            {item.name}
          </div>
        ))}
      </div>
      <div className="w-full flex flex-wrap gap-5 p-8 justify-center items-center">
        {food_items.map((item) => (
          <Card
            name={item.food_name}
            price={item.price}
            image={item.food_image}
            type={item.food_type}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
