import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import categories from "../Category";
import Card from "../components/Card";
import { food_items } from "../food";
import { dataContext } from "../context/UserContext";
import { IoMdClose } from "react-icons/io";
import Card2 from "../components/Card2";
import { useDispatch, useSelector } from "react-redux";
import { TbMoodSad } from "react-icons/tb";
import { toast } from "react-toastify";
import { EmptyCart } from "../redux/cartSlice";
import SwitchButton from "../components/SwitchButton";
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

const Home = () => {
  let {
    filterCatagory,
    setFilterCatagory,
    input,
    showCart,
    setShowCart,
    setShowMenu,
    showMenu,
    darkMode,
  } = useContext(dataContext);
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

  let items = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  let subtotal = items.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  let delivery = 40;
  let taxes = Math.floor(subtotal * (5 / 100));
  let total = subtotal + taxes + delivery;

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="w-full min-h-screen transition-all duration-1000 dark:bg-[#1a222b] bg-slate-200">
        <Nav />
        {!input ? (
          <div className="flex flex-wrap justify-center items-center gap-5 w-[100%]">
            {categories.map((item) => (
              <div
                key={item.id}
                className={` ${
                  activeCatagory === item.name.toLowerCase()
                    ? "bg-green-200 dark:text-zinc-800"
                    : "bg-white dark:bg-zinc-950"
                } w-[140px] h-[150px] text-[20px] text-gray-700 dark:text-zinc-100 flex flex-col items-center gap-5 justify-center shadow-xl rounded-lg hover:bg-green-200  cursor-pointer transition-all duration-500`}
                onClick={() => filter(item.name)}
              >
                {item.image}
                {item.name}
              </div>
            ))}
          </div>
        ) : null}
        {filterCatagory.length > 0 ? (
          <>
            <div className="w-full flex flex-wrap gap-5 p-8 justify-center items-center">
              {filterCatagory.map((item) => (
                <Card
                  name={item.food_name}
                  price={item.price}
                  image={item.food_image}
                  type={item.food_type}
                  id={item.id}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-center gap-1 items-center mt-40 text-green-500">
              <span className="text-2xl font-semibold font-serif">
                No Dish Found...
              </span>
              <TbMoodSad className="w-[40px] h-[40px]" />
            </div>
          </>
        )}

        {/* CART */}

        <div
          className={`w-full md:w-[40vw] h-[100vh] fixed top-0 dark:bg-[#192129] right-0 overflow-y-scroll bg-white border-2 border-green-600 rounded-lg py-6 px-3 transition-all duration-700 ${
            showCart ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <header className="flex justify-between items-center mb-2">
            <span className="text-green-500  text-[20px] font-serif font-semibold">
              Selected Items
            </span>
            <IoMdClose
              onClick={() => setShowCart(false)}
              className="w-[35px] h-[35px] text-green-500 font-semibold hover:text-green-800 cursor-pointer"
            />
          </header>
          {items.length > 0 ? (
            <>
              <div>
                {items.map((item) => (
                  <Card2 key={item.id} foodItem={item} />
                ))}
              </div>
              <div className="w-full border-t-2 border-b-2 border-gray-400 dark:border-zinc-300 mt-8 p-6 flex flex-col justify-center">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-700 dark:text-zinc-100 font-serif">
                    Subtotal
                  </span>
                  <span className="text-green-500 font-semibold">
                    Rs {subtotal} /-
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-700 dark:text-zinc-100 font-serif">
                    Delivery
                  </span>
                  <span className="text-green-500 font-semibold">
                    Rs {delivery} /-
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-700 dark:text-zinc-100 font-serif">
                    Taxes
                  </span>
                  <span className="text-green-500 font-semibold">
                    Rs {taxes} /-
                  </span>
                </div>
              </div>
              <div
                className="flex justify-between items-center pt-3 pb-3 border-b-2
          border-gray-400 dark:border-zinc-300"
              >
                <span className="text-xl font-semibold text-gray-700 dark:text-zinc-100 font-serif">
                  Total
                </span>
                <span className="text-green-500 text-xl font-semibold">
                  Rs {total} /-
                </span>
              </div>
              <div className="flex justify-center items-center">
                <button
                  onClick={() => {
                    toast.success("ORDER PLACED");
                    dispatch(EmptyCart());
                  }}
                  className="w-[80%] bg-green-500 hover:bg-green-600 transition-all cursor-pointer duration-400 mt-4 text-white font-semibold rounded-lg py-2"
                >
                  Place Order
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-center items-center pt-30">
                <span className="text-green-500 font-semibold text-2xl font-serif">
                  No Items In The Cart...
                </span>
              </div>
            </>
          )}
        </div>

        {/* MENU */}

        <div
          className={`w-full md:w-[20vw] dark:bg-[#192129] h-full bg-white fixed top-0 left-0 border-2 border-green-500 p-2 rounded-lg font-serif transition-all duration-500 ${
            showMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <header className="flex justify-between items-center p-4">
            <div className=" font-bold text-green-500 text-2xl">Menu</div>
            <div>
              <IoMdClose
                onClick={() => setShowMenu(false)}
                className="w-[30px] h-[30px] cursor-pointer text-green-500 "
              />
            </div>
          </header>
          <div>
            <div className="flex items-center justify-center gap-4">
              <IoSunny className="w-[30px] h-[30px] text-yellow-400" />
              <SwitchButton />
              <FaMoon className="w-[24px] dark:text-zinc-100 transition-all duration-3000 h-[24px] text-zinc-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
