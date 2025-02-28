import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-3" style={{ height: "40dvh", position: "relative" }}>
      <div
        className="flex flex-col justify-center items-center "
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          top: "0%",
          left: "0%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      >
        <h1 className="text-gray-50 text-center text-5xl md:text-7xl font-medium mb-3 capitalize">
          Media shapes the world’s view
        </h1>

        <div className="bg-gray-50 rounded-full w-sm sm:w-md my-5 flex p-1 ">
          <input
            type="text"
            className="p-3  w-50 sm:w-70 text-gray-800 border-none outline-none text-xl font-medium"
            placeholder="type your email address"
          />
          <button className="bg-gray-800 text-gray-50 px-5 py-1 rounded-full flex-1 cursor-pointer text-xl flex justify-between items-center">
            Join Now
            <div className="bg-gray-50 rounded-full flex justify-center items-center aspect-1/1 p-2 ">
              <FaArrowRightLong className="text-gray-800 " />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
