import React from "react";
import { useState } from "react";
import WorldLogo from "../assets/worldLogo.png";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../redux/app/slices/themeReducer";
import { MdLightMode } from "react-icons/md";
import { GiNightSleep } from "react-icons/gi";

export default function Navbar() {
  const themeDark = useSelector((state) => state.theme.dark);
  const dispatch = useDispatch();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`w-full md:w-2xl lg:w-3xl xl:w-6xl rounded-full ${
        themeDark ? "bg-gray-800 text-gray-50" : "bg-gray-50 text-gray-800"
      }`}
      style={{
        position: "absolute",
        top: "10%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        zIndex: "1",
      }}
    >
      <div className=" px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex  w-fit items-center ">
            <img
              className="h-13 w-auto "
              src={WorldLogo}
              alt="Your Company"
              style={{ transform: "scale(1.2)" }}
            />
            {/* nav list */}
            <div className="hidden sm:ml-6 sm:block flex items-center h-fit my-auto">
              <ul className="flex space-x-4">
                {["general", "business", "sports", "technology"].map((item) => (
                  <li key={item} className="navItem h-fit relative p-1">
                    <NavLink
                      to={item === "general" ? "/" : `/${item}`}
                      className="rounded-md px-3 py-2 text-sm font-medium capitalize  "
                    >
                      {item}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative flex justify-evenly">
            {/* user btn */}
            <button
              className={`flex rounded-full cursor-pointer aspect-1/1 mx-1 text-sm p-2 ${
                themeDark
                  ? "bg-gray-50 text-gray-800"
                  : "bg-gray-800 text-gray-50"
              }`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <FaUser className=" size-5" />
            </button>
            {/* theme change button */}
            <button
              className={`px-4 py-2 rounded-full cursor-pointer ${
                themeDark
                  ? "bg-gray-50 text-gray-800"
                  : "bg-gray-800 text-gray-50"
              }`}
              onClick={() => dispatch(setTheme(!themeDark))}
            >
              {themeDark ? <MdLightMode /> : <GiNightSleep />}
            </button>
            <div className=" flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:ring-inset"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <svg
                    className="size-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="size-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="sm:hidden relative">
          <div className="absolute  right-10 px-2 pt-2 pb-3 w-48 space-y-1 bg-gray-50">
            {["general", "business", "sports", "technology"].map((item) => (
              <NavLink
                to={item === "general" ? "/" : `/${item}`}
                className="rounded-md px-3 block py-2 text-sm font-medium text-gray-800 capitalize navItem"
                key={item}
              >
                {item}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
