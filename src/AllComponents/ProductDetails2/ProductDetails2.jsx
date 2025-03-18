import React, { useContext, useEffect, useState } from "react";
import { LiaStarSolid } from "react-icons/lia";
import { useParams } from "react-router-dom";
import Headers from "../Headers/Headers";
import ContextItems from "@/Context/ContextItems";

function ProductDetails2() {
  const [itemDetails, setItemDetails] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { addCartItem } = useContext(ContextItems);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();

        setItemDetails(data); // Update state instead of modifying a const
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <>
      <Headers />
      <div className="flex flex-col md:flex-row md:gap-16 rounded-lg p-6 max-w-4xl mx-auto mt-10">
        {/* Product Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={itemDetails.image}
            alt={itemDetails.title}
            className="rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-semibold">{itemDetails.title}</h2>
          <p className="text-xl text-blue-600 font-bold mt-2">
            {itemDetails.price} $
          </p>

          {/* Rating Section */}
          <div className="flex items-center mt-2">
            <button className="bg-blue-500 text-white px-2 py-1 text-sm rounded flex items-center">
              {itemDetails.rating?.rate}{" "}
              <LiaStarSolid className="text-yellow-300 px-1 text-xl" />
            </button>
            <span className="text-gray-600 ml-2"></span>
          </div>

          {/* Description */}
          <p className="text-gray-600 mt-4">{itemDetails.description}</p>

          {/* Availability & Brand */}
          <p className="mt-4">
            <span className="font-semibold">Available:</span>{" "}
            <span className="text-green-600">InStock</span>
          </p>
          <p>
            <span className="font-semibold">Brand:</span> UnKnown
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center mt-4">
            <button
              onClick={decreaseQuantity}
              className="bg-gray-200 px-3 py-1 rounded"
            >
              {" "}
              -
            </button>
            <span className="mx-3 text-lg">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="bg-gray-200 px-3 py-1 rounded"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            onClick={() => addCartItem({ ...itemDetails, quantity: 1 })}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductDetails2;
