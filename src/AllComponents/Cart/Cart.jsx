import React, { useContext, useEffect, useState } from "react";
import ContextItems from "../../Context/ContextItems";
import Headers from "../Headers/Headers";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Modal from "react-modal";

function Cart() {
  const nagivate = useNavigate();
  const {
    cartList,
    removeCartItem,
    incrementCartItemQuantity,
    decrementCartItemQuantity,
    removeAllItemsInCart,
  } = useContext(ContextItems);
  const [modalOpen, setModalOpen] = useState(false);
  const TotalSum = parseFloat(
    cartList?.reduce((acc, item) => acc + item.price, 0).toFixed(2)
  );

  useEffect(() => {
    if (!localStorage.getItem("User")) {
      nagivate("/login");
    }
  }, [nagivate]);

  return (
    <div>
      <Headers />
      <h1 className="pl-10 pt-6 font-bold text-blue-500">My Cart</h1>
      <div className="flex justify-end mx-4 sm:mx-7 ">
        <button
          className="text-blue-500 cursor-pointer"
          onClick={() => removeAllItemsInCart()}
        >
          Remove All
        </button>
      </div>
      {cartList.length === 0 ? (
        <div className="flex flex-col justify-center items-center my-[200px] sm:my-0 sm:px-40 sm:h-[80vh]">
          <img src="https://dlinkmea.com/images/no-product.png" className="" />
        </div>
      ) : (
        <ul className="flex flex-col justify-center sm:px-8 w-full">
          {cartList.map((item) => (
            <li key={item.id}>
              <div className="shadow-md flex py-4 justify-between  w-full  ">
                <div className="flex items-center">
                  <img
                    className="w-[60px]"
                    src={
                      item.images?.length === 1
                        ? item.images[0]
                        : item.images?.[1]
                    }
                  />
                  <div className="max-w-[130px]">
                    <h2 className="font-bold">{item.title?.slice(0, 10)}...</h2>
                    <p>{item.brand ? item.brand.slice(0, 10) : "UnKnown"}</p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center px-4 sm:flex-row">
                  <div className="flex justify-center items-center gap-5 order-4">
                    <p
                      onClick={() => decrementCartItemQuantity(item.id)}
                      className="text-5xl cursor-pointer"
                    >
                      -
                    </p>
                    <h2 className="font-bold text-blue-500">{item.quantity}</h2>
                    <p
                      onClick={() => incrementCartItemQuantity(item.id)}
                      className="text-3xl cursor-pointer"
                    >
                      +
                    </p>
                  </div>
                  <h1 className="text-blue-500 font-bold  sm:hidden">
                    {item.price} $
                  </h1>
                </div>
                <div className="flex items-center w-[100px] sm:w-[150px] justify-between sm:pr-5">
                  <h1 className="text-blue-500 font-bold hidden sm:flex">
                    {item.price} $
                  </h1>
                  <p
                    onClick={() => removeCartItem(item.id)}
                    className="cursor-pointer px-13 sm:px-0"
                  >
                    <MdOutlineDeleteOutline />
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cartList?.length > 0 && (
        <div className="flex flex-col justify-end items-end mx-4 sm:mx-8 py-5 ">
          <h1 className="text-blue-500 cursor-pointer font-bold">
            Total : {TotalSum} /-
          </h1>
          <Button
            className="bg-blue-500 animate-bounce my-7 "
            onClick={() => {
              setModalOpen(true);
            }}
          >
            CheckOut
          </Button>
        </div>
      )}
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center"
        ariaHideApp={false}
      >
        <div className="bg-white p-6 rounded-lg w-[300px] sm:w-[400px] text-center">
          <h2 className="text-xl font-bold text-blue-500">Checkout</h2>
          <p className="my-4">
            Your total is <span className="font-bold">${TotalSum}</span>.
            Proceed with payment?
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Button
              className="bg-green-500"
              onClick={() => {
                alert("Payment Succesfull ❤️ Thankyou for Shopping");
                setModalOpen(false);
                removeAllItemsInCart();
              }}
            >
              Confirm Payment
            </Button>
            <Button className="bg-red-500" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Cart;
