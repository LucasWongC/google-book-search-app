import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactLottie from "lottie-react";
import lottie404 from "app/config/data/lottie/lottie404.json";

const Error404 = () => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="flex flex-col h-[100vh] justify-center gap-[10vh]">
      <ReactLottie
        animationData={lottie404}
        loop={true}
        className="w-full max-w-[600px] mx-auto"
      />
      <Link
        to={"/search"}
        className="bg-red-400 p-3 px-6 w-fit mx-auto text-white"
      >
        Redirect To Dashboard
      </Link>
    </div>
  );
};

export default Error404;
