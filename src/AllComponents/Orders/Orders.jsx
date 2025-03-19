import React, { useContext, useEffect, useState } from "react";
import ContextItems from "../../Context/ContextItems";
import { motion } from "framer-motion";
import Headers from "../Headers/Headers";
import { useNavigate } from "react-router-dom";

function Orders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("User")) {
      navigate("/login");
    }
  }, [navigate]);

  const removeAllOrders = () => {
    localStorage.removeItem("orders");
    setOrders([]);
  };

  return (
    <div>
      <Headers />
      <h1 className="pl-10 pt-6 font-bold text-blue-500">My Orders</h1>
      <div className="flex justify-end mx-4 sm:mx-7 ">
        <button
          className="text-blue-500 cursor-pointer"
          onClick={removeAllOrders}
        >
          Remove All
        </button>
      </div>

      {orders.length === 0 ? (
        <div className="flex flex-col justify-center items-center my-[200px]">
          <img
            src="https://cdn-icons-png.flaticon.com/512/455/455705.png"
            className="w-40"
            alt="No Orders"
          />
          <p className="text-gray-500 mt-4 text-4xl">No orders placed yet!</p>
        </div>
      ) : (
        <motion.ul
          className="flex flex-col gap-4 px-6 sm:px-12 mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {orders.map((order, index) => (
            <motion.li
              key={index}
              className="shadow-md p-5 rounded-lg bg-white"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col sm:flex-row justify-between">
                <div>
                  <h2 className="font-bold text-blue-500 text-lg">
                    Order #{order.id}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    Date: {new Date(order.date).toLocaleDateString()}
                  </p>
                </div>
                <p
                  className="text-sm font-bold 
                      text-green-500"
                >
                  Delivery status :- {order.status}...
                </p>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 p-3 border rounded-lg"
                  >
                    <img
                      src={item.images?.[0]}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.brand}</p>
                      <p className="text-blue-500 font-bold">
                        ${item.price} x {item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </div>
  );
}

export default Orders;
