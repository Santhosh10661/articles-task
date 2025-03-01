import React, { useState } from "react";
import Navbar from "./Navbar";

import { FaArrowRightLong } from "react-icons/fa6";

const Hero = (props) => {
  let { classN, qoutes, setIsSearched, FindTheArticles } = props;
  let [inputVal, setInputVal] = useState("");

  const handleChange = (val) => {
    if (val) {
      setInputVal(val);
    } else {
      setInputVal(val);
      setIsSearched(false);
    }
  };
  const handleSearch = (e) => {
    e.preventDefault();
    if (inputVal) {
      setIsSearched(true);
      FindTheArticles(inputVal);
    }
  };
  return (
    <section
      className={`hero ${classN}`}
      style={{
        height: "100dvh",
        position: "relative",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          top: "0%",
          left: "0%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      >
        <Navbar />

        <div
          className=" p-3 md:p-10  xl:m-6 w-full md:w-2xl lg:w-4xl xl:w-7xl "
          style={{
            position: "absolute",
            top: "50%",
            left: "0%",
            transform: "translate(-0%,-50%)",
          }}
        >
          <p className="text-gray-50 text-5xl md:text-6xl lg:text-7xl xl:text-8xl capitalize font-medium ">
            {qoutes}
          </p>
          <div className="bg-gray-50 rounded-full w-full sm:w-sm md:w-sm lg:w-md my-5  p-1 ">
            <form action="" className="flex" onSubmit={(e) => handleSearch(e)}>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => handleChange(e.target.value)}
                className="p-3 w-auto text-gray-800 flex-2 border-none outline-none text-xl font-medium"
                placeholder="Search"
              />
              <button
                className="bg-gray-800 text-gray-50 px-5 py-1 rounded-full flex-1 cursor-pointer text-xl flex justify-between items-center "
                type="submit"
              >
                Search
                <div className="bg-gray-50 rounded-full flex justify-center items-center aspect-1/1 p-2 ">
                  <FaArrowRightLong className="text-gray-800 " />
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
