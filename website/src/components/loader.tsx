import React from "react";
import { RingLoader } from "react-spinners";
import "@/styles/spinners.css";
const Loader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <RingLoader color="#09f" size={60} />
    </div>
  );
};

export default Loader;
