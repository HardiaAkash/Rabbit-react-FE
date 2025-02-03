import React, { useState } from "react";
import Logo from "../assets/logo/logo2.png";
import Contact from "../assets/image/contact.svg";
import { HiMenu, HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-wrap justify-between items-center px-4 py-4 lg:px-[40px] xl:px-[70px] lg:py-[20px] xl:py-[25px] w-full">
      <div className="flex justify-between w-full lg:w-auto">
        <img
          src={Logo}
          className="h-[60px] w-[160px] lg:h-[70px] lg:w-[220px]" // Adjusted size for large screens
          onClick={() => {
            navigate("/");
          }}
        />
        <div className="lg:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? (
              <HiX className="h-8 w-8" />
            ) : (
              <HiMenu className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:flex flex-col lg:flex-row items-center gap-4 lg:gap-[30px] xl:gap-[40px] w-full lg:w-auto mt-4 lg:mt-0`}
      >
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 items-center text-center lg:text-left w-full lg:w-auto">
          <a
            href="#about"
            className="text-base lg:text-sm xl:text-base text-black font-semibold xl:text-lg"
          >
            About Us
          </a>
          <a
            href="#work"
            className="text-base lg:text-sm xl:text-base text-black font-semibold xl:text-lg"
          >
            How We Work
          </a>
          <a
            href="#choose"
            className="text-base lg:text-sm xl:text-base text-black font-semibold xl:text-lg"
          >
            Why Choose Us
          </a>
          <a
            href="#quote"
            className="text-base lg:text-sm xl:text-base text-black font-semibold xl:text-lg"
          >
            Get a Quote
          </a>
          <a
            href="#enquire"
            className="text-base lg:text-sm xl:text-base text-black font-semibold xl:text-lg"
          >
            Enquire Now
          </a>
        </div>
        <div className="w-full lg:w-auto flex justify-center lg:justify-start mt-4 lg:mt-0">
          <button className="flex bg-[#AF1E22] rounded-full py-2 px-4 lg:py-2 xl:py-3 lg:px-[20px] xl:px-[24px] gap-1.5 items-center">
            {/* <Contact className="h-5 lg:h-6 xl:h-6" /> */}
            <img src={Contact} alt="loading" className="h-5 lg:h-6 xl:h-6"/>
            <p className="text-white text-base lg:text-sm xl:text-lg">
              +91 7207775168
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
