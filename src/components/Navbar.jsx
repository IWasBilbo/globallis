import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import menu from "../images/menu.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-globallisBlue py-4">
        <div className="mx-8 lg:mx-12">
          <div className="flex items-center justify-between h-16">
            <div>
              <Link to="/">
                <h1 className="font-logo text-white font-bold text-[40px]">
                  GLOBALLIS
                </h1>
              </Link>
            </div>
            <div className="flex">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {!isOpen ? (
                  <div>
                    <img
                      src={menu}
                      className="object-fill w-[30.41px] h-[37.14px]"
                    />
                  </div>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="" id="mobile-menu">
              <div className="pt-2 pb-3 space-y-1 text-center">
                <Link to="/articles" onClick={() => setIsOpen(!isOpen)}>
                  <p className="text-white hover:bg-gray-800 block text-[50px] lg:text-[95px] leading-[55px] lg:leading-[100px] mt-10">
                    Articles
                  </p>
                </Link>
                <Link to="/gallery" onClick={() => setIsOpen(!isOpen)}>
                  <p className="text-white hover:bg-gray-800 block text-[50px] lg:text-[95px] leading-[55px] lg:leading-[100px] mt-10 py-4">
                    Gallery
                  </p>
                </Link>
                <Link to="/about" onClick={() => setIsOpen(!isOpen)}>
                  <p className="text-white hover:bg-gray-800 block text-[50px] lg:text-[95px] leading-[55px] lg:leading-[100px] mt-10">
                    About
                  </p>
                </Link>
                <Link to="/mailing" onClick={() => setIsOpen(!isOpen)}>
                  <p className="text-white hover:bg-gray-800 block text-[50px] lg:text-[95px] leading-[55px] lg:leading-[100px] mt-10 py-4">
                    Mailing
                  </p>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </>
  );
};

export default Navbar;
