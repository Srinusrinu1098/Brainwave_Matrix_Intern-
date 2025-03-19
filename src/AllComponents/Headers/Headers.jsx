import { Button } from "@/components/ui/button";
import ContextItems from "@/Context/ContextItems";
import React, { useContext, useEffect, useState } from "react";
import { FaShoppingCart, FaBoxOpen } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { BsHandbagFill } from "react-icons/bs";
import { TbLogout, TbLogin } from "react-icons/tb";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function Headers() {
  const nagivate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState("Initial");
  const { cartList } = useContext(ContextItems);

  const [cartItems, SetCartItems] = useState([]);
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
  const user = localStorage.getItem("User");

  useEffect(() => {
    if (location.pathname === "/Shopitems") setActive("Home");
    else if (location.pathname === "/shop") setActive("Products");
    else if (location.pathname === "/Cart") setActive("Cart");
    else if (location.pathname === "/orders") setActive("Orders");
    SetCartItems(cartList);
  }, [location.pathname, cartList]);

  const logout = () => {
    localStorage.removeItem("User");
    nagivate("/login");
  };

  const storage = localStorage.getItem("User");

  return (
    <nav className=" shadow-md p-2 flex justify-between  items-center bg-white">
      <h1
        className="text-xl font-bold text-gray-800 cursor-pointer"
        onClick={() => nagivate("/")}
      >
        BlueShop
      </h1>
      <div className="flex w-[400px] justify-center items-center gap-4 ">
        <button
          className={`flex items-center  text-black hover:border sm:hidden hover:border-black hover:rounded-md px-2 py-2 cursor-pointer ${
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
          className={`flex items-center text-black sm:hidden hover:border hover:border-black hover:rounded-md px-2 py-2 cursor-pointer ${
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
          className={`flex items-center text-black sm:hidden hover:border hover:border-black hover:rounded-md px-2 h-[30px] cursor-pointer ${
            active === "Cart" && "bg-blue-500 rounded-md text-white"
          }`}
          onClick={() => {
            nagivate("/Cart");
            setActive("Cart");
          }}
        >
          <div className="flex flex-col justify-center items-center">
            {cartItems?.length > 0 && storage != null && (
              <h2 className=" m-[0px] p-[0px] text-[10px] pl-2   text-red-600 font-bold ">
                {cartItems?.length}
              </h2>
            )}
            <FaShoppingCart className="p-[0px] " />
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
            {cartItems?.length > 0 && storage != null && (
              <h2 className=" m-0 text-[10px] pl-2 text-red-600 font-bold animate-bounce">
                {cartItems?.length}
              </h2>
            )}
            <FaShoppingCart className="ml-2 m-0 text-[12px]" />
          </div>
        </h2>
        <h2
          className={`flex items-center text-black sm:hidden hover:border hover:border-black hover:rounded-md px-2 py-2 cursor-pointer ${
            active === "Orders" && "bg-blue-500 rounded-md text-white"
          }`}
          onClick={() => {
            nagivate("/orders");
            setActive("Orders");
          }}
        >
          <FaBoxOpen />
        </h2>{" "}
        <h2
          className={`hidden items-center text-black hover:border sm:flex hover:border-black hover:rounded-md px-4 py-2 cursor-pointer ${
            active === "Orders" && "bg-blue-500 rounded-md text-white"
          }`}
          onClick={() => {
            nagivate("/orders");
            setActive("Orders");
          }}
        >
          Orders
        </h2>
      </div>
      <div>
        {user && (
          <div className="hidden sm:flex">
            <AlertDialog
              open={logoutDialogOpen}
              onOpenChange={setLogoutDialogOpen}
            >
              <AlertDialogTrigger>
                <div className="bg-black flex flex-col justify-center items-center h-[40px] w-[80px] cursor-pointer rounded-md text-white">
                  Logout
                </div>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Are you sure you want to log out?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    You will be signed out from your account. To access your
                    data again, you will need to log in.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={logout}>
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        )}
        {user && (
          <div className="flex sm:hidden">
            <AlertDialog
              open={logoutDialogOpen}
              onOpenChange={setLogoutDialogOpen}
            >
              <AlertDialogTrigger>
                <div className="bg-black flex flex-col cursor-pointer justify-center items-center h-[40px] w-[40px] rounded-md text-white">
                  <TbLogout />
                </div>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Are you sure you want to log out?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    You will be signed out from your account. To access your
                    data again, you will need to log in.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={logout}>
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
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
  );
}

export default Headers;
