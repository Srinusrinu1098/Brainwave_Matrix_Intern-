import { Button } from "@/components/ui/button";
import ContextItems from "@/Context/ContextItems";
import React, { useContext, useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { BsHandbagFill } from "react-icons/bs";
import { TbLogout, TbLogin } from "react-icons/tb";

function Headers() {
  const nagivate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState("Initial");
  const { cartList } = useContext(ContextItems);

  const [cartItems, SetCartItems] = useState([]);
  const user = localStorage.getItem("User");

  useEffect(() => {
    if (location.pathname === "/Shopitems") setActive("Home");
    else if (location.pathname === "/shop") setActive("Products");
    else if (location.pathname === "/Cart") setActive("Cart");
    SetCartItems(cartList);
  }, [location.pathname, cartList]);

  const logout = () => {
    localStorage.removeItem("User");
    nagivate("/login");
  };

  return (
    <div>
      <nav className="bg-white shadow-md p-2 flex justify-between items-center">
        <h1
          className="text-xl font-bold text-gray-800 cursor-pointer"
          onClick={() => nagivate("/")}
        >
          BlueShop
        </h1>
        <div className="flex w-[400px] justify-center items-center gap-4 ">
          <button
            className={`flex items-center text-black hover:border sm:hidden hover:border-black hover:rounded-md px-4 py-2 cursor-pointer ${
              active === "Home" && "bg-blue-500 rounded-md text-white"
            }`}
            onClick={() => {
              nagivate("/Shopitems");
              setActive("Home");
            }}
          >
            <IoIosHome />
          </button>
          <button
            className={`hidden items-center sm:flex text-black hover:border hover:border-black hover:rounded-md px-4 py-2 cursor-pointer ${
              active === "Home" && "bg-blue-500 rounded-md text-white"
            }`}
            onClick={() => {
              nagivate("/Shopitems");
              setActive("Home");
            }}
          >
            Home
          </button>
          <h2
            className={`flex items-center text-black sm:hidden hover:border hover:border-black hover:rounded-md px-4 py-2 cursor-pointer ${
              active === "Products" && "bg-blue-500 rounded-md text-white"
            }`}
            onClick={() => {
              nagivate("/shop");
              setActive("Products");
            }}
          >
            <BsHandbagFill />
          </h2>{" "}
          <h2
            className={`hidden items-center text-black hover:border sm:flex hover:border-black hover:rounded-md px-4 py-2 cursor-pointer ${
              active === "Products" && "bg-blue-500 rounded-md text-white"
            }`}
            onClick={() => {
              nagivate("/shop");
              setActive("Products");
            }}
          >
            Products
          </h2>
          <h2
            className={`flex items-center text-black sm:hidden hover:border hover:border-black hover:rounded-md px-4 py-2 cursor-pointer ${
              active === "Cart" && "bg-blue-500 rounded-md text-white"
            }`}
            onClick={() => {
              nagivate("/Cart");
              setActive("Cart");
            }}
          >
            <div className="flex flex-col justify-center items-center">
              {cartItems?.length > 0 && (
                <h2 className=" m-0 text-[10px] pl-2 text-red-600 font-bold animate-bounce">
                  {cartItems?.length}
                </h2>
              )}
              <FaShoppingCart className=" m-0 text-[12px]" />
            </div>
          </h2>
          <h2
            className={`hidden items-center text-black sm:flex hover:border hover:border-black hover:rounded-md px-4 py-2 cursor-pointer ${
              active === "Cart" && "bg-blue-500 rounded-md text-white"
            }`}
            onClick={() => {
              nagivate("/Cart");
              setActive("Cart");
            }}
          >
            Cart{" "}
            <div className="flex flex-col justify-center items-center">
              {cartItems?.length > 0 && (
                <h2 className=" m-0 text-[10px] pl-2 text-red-600 font-bold animate-bounce">
                  {cartItems?.length}
                </h2>
              )}
              <FaShoppingCart className="ml-2 m-0 text-[12px]" />
            </div>
          </h2>
        </div>
        <div>
          {user && (
            <Button onClick={logout} className="hidden sm:flex">
              Logout
            </Button>
          )}
          {user && (
            <Button onClick={logout} className="flex sm:hidden">
              <TbLogout />
            </Button>
          )}
          {!user && (
            <Button onClick={logout} className="hidden sm:flex">
              Login
            </Button>
          )}
          {!user && (
            <Button onClick={logout} className="flex sm:hidden">
              <TbLogin />
            </Button>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Headers;
