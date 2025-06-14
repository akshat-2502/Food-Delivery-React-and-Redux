import React from "react";
import Nav from "../components/Nav";
import categories from "../Category";

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
    </div>
  );
};

export default Home;
