import React from "react";
import Headers from "../Headers/Headers";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function Mainpage() {
  const nagivate = useNavigate();

  const getStarted = () => {
    if (localStorage.getItem("User") === null) {
      nagivate("/login");
    } else {
      nagivate("/Shopitems");
    }
  };
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <Headers />
      <div className="flex flex-col justify-center md:flex-row  gap-5 items-center h-[100vh]  px-7">
        <img
          className="w-[600px] md:order-4 md:w-[400px] py-5 sm:w-[500px] rounded-br-[40px] rounded-tl-[40px]"
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
          alt="e-Commerce"
        />
        <div className="md:w-1/2 text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Clothes That Get <span className="text-blue-600">YOU</span> Noticed
          </h1>
          <p className="mt-4 text-gray-600">
            Fashion is part of the daily air and it does not quite help that it
            changes all the time. Clothes have always been a marker of the era
            and we are in a revolution. Your fashion makes you be seen and heard
            that way you are. So, celebrate the season's new and exciting
            fashion in your own way.
          </p>
          <Button
            className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md transition"
            onClick={getStarted}
          >
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
