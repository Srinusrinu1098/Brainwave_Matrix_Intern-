import React, { useContext, useEffect, useState } from "react";
import { LiaStarSolid } from "react-icons/lia";
import { useParams } from "react-router-dom";
import Headers from "../Headers/Headers";
import { Button } from "@/components/ui/button";

import ContextItems from "@/Context/ContextItems";

function PoductsDetails() {
  const [itemDetails, setItemDetails] = useState({});

  const { addCartItem } = useContext(ContextItems);

  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
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
            src={
              itemDetails.images?.length === 1
                ? itemDetails.images[0]
                : itemDetails.images?.[1]
            }
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
              {itemDetails.rating}{" "}
              <LiaStarSolid className="text-yellow-300 px-1 text-xl" />
            </button>
            <span className="text-gray-600 ml-2"></span>
          </div>

          {/* Description */}
          <p className="text-gray-600 mt-4">{itemDetails.description}</p>

          {/* Availability & Brand */}
          <p className="mt-4">
            <span className="font-semibold">Available:</span>{" "}
            <span className="text-green-600">
              {itemDetails.availabilityStatus}
            </span>
          </p>
          <p>
            <span className="font-semibold">Brand:</span> {itemDetails.brand}
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center mt-2">
            <Button
              onClick={decreaseQuantity}
              className=" px-3 py-1 rounded bg-blue-500"
            >
              -
            </Button>
            <span className="mx-3 text-lg">{quantity}</span>
            <Button
              onClick={increaseQuantity}
              className="px-3 py-1 rounded bg-blue-500"
            >
              +
            </Button>
          </div>

          {/* Add to Cart Button */}
          <Button
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg"
            onClick={() => addCartItem({ ...itemDetails, quantity: 1 })}
          >
            ADD TO CART
          </Button>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row  items-center sm:justify-center gap-4 sm:px-4">
        {itemDetails.reviews?.map((review, index) => (
          <div
            key={index}
            className="border-b pb-4 mb-4 border border-solid py-5 px-5 flex flex-col justify-center items-center hover: transition transform  duration-100 hover:scale-105 hover:shadow-xl rounded-2xl"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              className="h-12"
            />
            <div className="flex items-center gap-2">
              <span className="font-bold">{review.reviewerName}</span>
              <span className="text-gray-500 text-sm">
                {new Date(review.date).toLocaleDateString()}
              </span>
            </div>
            <p className="text-yellow-500"> {review.rating}/5 ⭐</p>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default PoductsDetails;
