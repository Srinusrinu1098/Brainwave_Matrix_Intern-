import { Button } from "@/components/ui/button";
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import React from "react";
import Cookies from "js-cookie";
import { replace, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: (resp) => getUserDetails(resp),
    onError: (resp) => console.log(resp),
  });

  const getUserDetails = async (token) => {
    const Response = await fetch(
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token.access_token}`,
      {
        headers: {
          Accept: "application.json",
          Authorization: `Bearer ${token.access_token}`,
        },
      }
    );

    const data = await Response.json();
    localStorage.setItem("User", JSON.stringify(data));

    navigate("/", { replace: true });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h2 className="font-bold">Please login with Google</h2>
      <img
        src="https://img.lovepik.com/photo/45009/7677.jpg_wh860.jpg"
        alt="Login"
        className="lg:w-[700px] md:w-[600px]"
      />
      <div className="flex justify-center items-center gap-4">
        <Button onClick={login} className="animate-bounce">
          Login with
          <FcGoogle />
        </Button>
        <Button onClick={() => navigate("/")} className="animate-bounce">
          Go to Start Page
        </Button>
      </div>
    </div>
  );
}

export default Login;
