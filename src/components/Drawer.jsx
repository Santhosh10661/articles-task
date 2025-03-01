"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Drawer = (props) => {
  let { mobileMenuOpen, setMobileMenuOpen } = props;
  const themeDark = useSelector((state) => state.theme.dark);

  return (
    <Dialog
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
      className="relative z-10"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
            >
              <TransitionChild>
                <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="relative cursor-pointer rounded-md text-gray-300 hover:text-white "
                  >
                    <span className="absolute -inset-2.5" />
                    <span className="sr-only">Close panel</span>
                    <XMarkIcon aria-hidden="true" className="size-6" />
                  </button>
                </div>
              </TransitionChild>
              <div
                className={`flex h-full flex-col overflow-y-scroll ${
                  themeDark
                    ? "bg-gray-800 text-gray-50"
                    : "bg-gray-50 text-gray-800"
                }  py-6 shadow-xl`}
              >
                <div className="px-4 sm:px-6">
                  <DialogTitle className="text-center text-4xl font-semibold ">
                    Menu
                  </DialogTitle>
                </div>
                <ul className="relative mt-6 flex-1 px-4 sm:px-6">
                  {["general", "business", "sports", "technology"].map(
                    (item) => (
                      <li
                        key={item}
                        className="h-fit w-fit mx-auto relative p-1"
                      >
                        <NavLink
                          to={item === "general" ? "/" : `/${item}`}
                          className="rounded-md px-3 block py-2 text-sm font-medium  capitalize navItem"
                        >
                          {item}
                        </NavLink>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
export default Drawer;
