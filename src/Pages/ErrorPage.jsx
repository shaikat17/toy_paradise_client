import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section class="grid grid-cols-1 place-items-center">
      <h1 className="text-5xl font-black mb-0 absolute z-10 top-10">404</h1>

      <img className="relative"
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt=""
      />

      <div className="mt-0 absolute bottom-28">
        <h3 className="text-2xl font-bold">Look like you're lost</h3>

        <p className="capitalize my-2">the page you are looking for not avaible!</p>

        <Link className="w-fit bg-green-500 p-4 rounded text-white block" to="/">Go to Home</Link>
      </div>
    </section>
  );
};

export default ErrorPage;
