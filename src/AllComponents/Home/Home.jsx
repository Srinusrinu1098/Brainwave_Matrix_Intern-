import { Button } from "@/components/ui/button";
import { useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import Headers from "../Headers/Headers";
import ContextItems from "@/Context/ContextItems";

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]); // Store products in state
  const { addCartItem } = useContext(ContextItems);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();

        setProducts(data.products); // Update state instead of modifying a const
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  if (!localStorage.getItem("User")) {
    return navigate("/login");
  }

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <Headers />
      {/* Hero Section */}
      <header className="bg-blue-600 text-white text-center py-20 mx-4 m-4 rounded-md">
        <h2 className="text-4xl font-bold">Discover the Best Deals!</h2>
        <p className="mt-2 text-lg">
          Shop the latest products at unbeatable prices.
        </p>
        <Button
          onClick={() => navigate("/shop")}
          className="mt-4 bg-white text-blue-600 px-6 py-2 font-semibold rounded shadow cursor-pointer hover:text-white"
        >
          Shop Now
        </Button>
      </header>

      {/* Featured Products */}
      <section className="py-10 px-6">
        <h3 className="text-2xl font-semibold text-gray-800 text-center">
          Featured Products
        </h3>
        <div className="mt-6 grid gap-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
          {products.slice(0, 6).map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 shadow rounded-lg text-center flex flex-col justify-center items-center"
            >
              <img
                src={product.images[0]}
                alt={product.title}
                className=" h-40 object-cover"
              />
              <h4 className="mt-2 text-lg font-semibold">{product.title}</h4>
              <p className="text-blue-600 font-bold">${product.price}</p>
              <Button
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => addCartItem({ ...product, quantity: 1 })}
              >
                Add to Cart
              </Button>
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

export default Home;
