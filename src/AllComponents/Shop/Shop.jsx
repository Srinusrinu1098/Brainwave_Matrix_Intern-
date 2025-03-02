import { Button } from "@/components/ui/button";
import { useContext, useEffect, useState } from "react";
import Headers from "../Headers/Headers";
import { useNavigate } from "react-router-dom";
import ContextItems from "@/Context/ContextItems";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [products2, setProducts2] = useState([]);

  const nagivate = useNavigate();
  const { addCartItem } = useContext(ContextItems);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        console.log(data);
        setProducts(data.products); // Update state instead of modifying a const
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const fetchProducts2 = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
        setProducts2(data); // Update state instead of modifying a const
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
    fetchProducts2();
  }, []); // Empty dependency array to fetch data only once

  if (!localStorage.getItem("User")) {
    return nagivate("/login");
  }

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <Headers />
      {/* Featured Products */}
      <div
        className="flex justify-end cursor-pointer"
        onClick={() => nagivate("/products")}
      >
        <Button className="text-center font-serif text-white  px-10 py-8 my-10 rounded-4xl animate-bounce bg-blue-500 ">
          Click to <br />
          Category Section
        </Button>
      </div>
      <section className="py-2 px-6">
        <h3 className="text-2xl font-semibold text-gray-800 text-center">
          Brand New Products
        </h3>
        <div className="mt-6 grid gap-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          {products.map((product) => (
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
          {products2.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 shadow rounded-lg text-center flex flex-col justify-center items-center transform transition duration-100 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-[100px]  h-30 object-cover"
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
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-10">
        &copy; 2025 BlueShop. All rights reserved.{" "}
        <span className="text-gray-500">Made by Srinu</span>
      </footer>
    </div>
  );
};

export default Shop;
