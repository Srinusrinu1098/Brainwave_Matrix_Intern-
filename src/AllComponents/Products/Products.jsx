import React, { useContext, useEffect, useState } from "react";
import Headers from "../Headers/Headers";
import { useNavigate } from "react-router-dom";
import ContextItems from "@/Context/ContextItems";
import { Button } from "@/components/ui/button";

function Products() {
  const [decor, setDecor] = useState([]);
  const [electro, setElectro] = useState([]);
  const [fragra, setfragra] = useState([]);
  const [smart, setSmart] = useState([]);
  const [lap, setLap] = useState([]);
  const [jewel, setJewl] = useState([]);
  const [grow, setGrow] = useState([]);
  const navigate = useNavigate();

  const nagivate = useNavigate();
  const { addCartItem } = useContext(ContextItems);

  useEffect(() => {
    const electronics = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/category/electronics"
        );
        const data = await response.json();

        setElectro(data); // Update state instead of modifying a const
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const smartphones = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/category/smartphones"
        );
        const data = await response.json();

        setSmart(data.products); // Update state instead of modifying a const
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const laptops = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/category/laptops"
        );
        const data = await response.json();

        setLap(data.products); // Update state instead of modifying a const
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    const fragrances = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/category/fragrances"
        );
        const data = await response.json();

        setfragra(data.products); // Update state instead of modifying a const
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    const groceries = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/category/groceries"
        );
        const data = await response.json();

        setGrow(data.products); // Update state instead of modifying a const
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    const decoration = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/category/home-decoration"
        );
        const data = await response.json();

        setDecor(data.products); // Update state instead of modifying a const
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const jewelery = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/category/jewelery"
        );
        const data = await response.json();

        setJewl(data); // Update state instead of modifying a const
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    jewelery();
    smartphones();
    electronics();
    laptops();
    fragrances();
    groceries();
    decoration();
  }, []);

  if (!localStorage.getItem("User")) {
    navigate("/login", { replace: true });
  }
  return (
    <div>
      <Headers />
      <div className="mx-6">
        <h1 className="font-bold p-4 text-blue-500"> Decorations</h1>
        <div className=" grid gap-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {decor.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 shadow rounded-lg text-center flex flex-col justify-center items-center transform transition duration-100 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-[150px] lg:w-[200px] h-40 object-cover"
              />
              <h4 className="mt-2 text-lg font-semibold">{product.title}</h4>
              <p className="text-blue-600 font-bold">${product.price}</p>
              <div className=" flex flex-col md:flex-row gap-2 ">
                <Button
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => addCartItem({ ...product, quantity: 1 })}
                >
                  Add to Cart
                </Button>
                <Button
                  className="mt-2 bg-gray-500 md:bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => nagivate(`/productdetails/${product.id}`)}
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-6">
        <h1 className="font-bold p-4 text-blue-500"> Smartphones</h1>
        <div className=" grid gap-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {smart.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 shadow rounded-lg text-center flex flex-col justify-center items-center transform transition duration-100 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-[70px] h-40 object-cover"
              />
              <h4 className="mt-2 text-lg font-semibold">{product.title}</h4>
              <p className="text-blue-600 font-bold">${product.price}</p>
              <div className=" flex flex-col md:flex-row gap-2 ">
                <Button
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => addCartItem({ ...product, quantity: 1 })}
                >
                  Add to Cart
                </Button>
                <Button
                  className="mt-2 bg-gray-500 md:bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => nagivate(`/productdetails/${product.id}`)}
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-6">
        <h1 className="font-bold p-4 text-blue-500"> Laptops</h1>
        <div className=" grid gap-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {lap.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 shadow rounded-lg text-center flex flex-col justify-center items-center transform transition duration-100 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-[150px] lg:w-[200px] h-40 object-cover"
              />
              <h4 className="mt-2 text-lg font-semibold">{product.title}</h4>
              <p className="text-blue-600 font-bold">${product.price}</p>
              <div className=" flex flex-col md:flex-row gap-2 ">
                <Button
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => addCartItem({ ...product, quantity: 1 })}
                >
                  Add to Cart
                </Button>
                <Button
                  className="mt-2 bg-gray-500 md:bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => nagivate(`/productdetails/${product.id}`)}
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-6">
        <h1 className="font-bold p-4 text-blue-500"> Fragrances</h1>
        <div className=" grid gap-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {fragra.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 shadow rounded-lg text-center flex flex-col justify-center items-center transform transition duration-100 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-[150px] lg:w-[200px] h-40 object-cover"
              />
              <h4 className="mt-2 text-lg font-semibold">{product.title}</h4>
              <p className="text-blue-600 font-bold">${product.price}</p>
              <div className=" flex flex-col md:flex-row gap-2 ">
                <Button
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => addCartItem({ ...product, quantity: 1 })}
                >
                  Add to Cart
                </Button>
                <Button
                  className="mt-2 bg-gray-500 md:bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => nagivate(`/productdetails/${product.id}`)}
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-6">
        <h1 className="font-bold p-4 text-blue-500"> Groceries</h1>
        <div className=" grid gap-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {grow.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 shadow rounded-lg text-center flex flex-col justify-center items-center transform transition duration-100 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-[150px] lg:w-[200px] h-40 object-cover"
              />
              <h4 className="mt-2 text-lg font-semibold">{product.title}</h4>
              <p className="text-blue-600 font-bold">${product.price}</p>
              <div className=" flex flex-col md:flex-row gap-2 ">
                <Button
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => addCartItem({ ...product, quantity: 1 })}
                >
                  Add to Cart
                </Button>
                <Button
                  className="mt-2 bg-gray-500 md:bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => nagivate(`/productdetails/${product.id}`)}
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-6">
        <h1 className="font-bold p-4 text-blue-500">Electronics</h1>
        <div className=" grid gap-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {electro.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 shadow rounded-lg text-center flex flex-col justify-center items-center transform transition duration-100 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-[180px] h-40 object-cover"
              />
              <h4 className="mt-2 text-lg font-semibold">{product.title}</h4>
              <p className="text-blue-600 font-bold">${product.price}</p>
              <div className=" flex flex-col md:flex-row md:gap-2">
                <Button
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => addCartItem({ ...product, quantity: 1 })}
                >
                  Add to Cart
                </Button>
                <Button
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => nagivate(`/productdetails2/${product.id}`)}
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-6">
        <h1 className="font-bold p-4 text-blue-500">Jewelery</h1>
        <div className=" grid gap-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {jewel.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 shadow rounded-lg text-center flex flex-col justify-center items-center transform transition duration-100 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-[150px] h-20 object-cover"
              />
              <h4 className="mt-2 text-lg font-semibold">{product.title}</h4>
              <p className="text-blue-600 font-bold">${product.price}</p>
              <div className=" flex flex-col md:flex-row md:gap-2">
                <Button
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => addCartItem({ ...product, quantity: 1 })}
                >
                  Add to Cart
                </Button>
                <Button
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => nagivate(`/productdetails2/${product.id}`)}
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="bg-gray-800 text-white text-center p-4 mt-10">
        &copy; 2025 BlueShop. All rights reserved.{" "}
        <span className="text-gray-500">Made by Srinu</span>
      </footer>
    </div>
  );
}

export default Products;
