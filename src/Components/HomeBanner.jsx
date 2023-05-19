import React from "react";
import banner from "../assets/homebanner.jpg";
import { NavLink } from "react-router-dom";

const HomeBanner = () => {
  return (
    <section
      className="h-screen w-full bg-center bg-cover relative bg-no-repeat mb-20"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="absolute absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-brightness-90 h-full w-full text-white flex  justify-center flex-col text-center">
        <h1 className="text-5xl font-black">
          The Ultimate Destination
          <br/>for Childhood Delights
        </h1>
        <h3 className="text-4xl font-black mt-3">
          <span className="text-red-500">Toy</span>{" "}
          <span className="text-green-500">Paradise</span>
        </h3>
        <div>
          <button className="btn btn-outline btn-warning mt-5 w-60">
           <span className="text-white">Shop Now</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
