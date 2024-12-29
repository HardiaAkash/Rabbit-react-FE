import { useState } from "react";
import rabbit from "../assets/image/rabbit.gif";
import AboutUs from "./AboutUs";
import OurTeam from "./OurTeam";

const SecondSection = () => {
  const [activeButton, setActiveButton] = useState("aboutUs");

  return (
    <div
      className="bg-[#e7ecff] w-full pt-12 sm:pt-16 md:pt-24 flex flex-col md:flex-row gap-8 md:gap-16 justify-center px-5 sm:px-12 md:px-16 xl:px-24 pb-8"
      id="about"
    >
      <img
        src={rabbit}
        className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] mx-auto md:mx-0 object-contain"
        alt="Rabbit"
      />
      <div className="mt-6 md:mt-0 text-center md:text-left w-full">
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
          <button
            className={`w-fit rounded-full border border-[#100E3F] cursor-pointer ${
              activeButton === "aboutUs" ? "bg-[#BAE0F4]" : "bg-white"
            } text-sm sm:text-base py-2 sm:py-3 px-6 sm:px-8 md:px-10 xl:px-12`}
            onClick={() => setActiveButton("aboutUs")}
          >
            About Us
          </button>
          <button
            className={`w-fit rounded-full border border-[#100E3F] cursor-pointer ${
              activeButton === "ourTeam" ? "bg-[#BAE0F4]" : "bg-white"
            } text-sm sm:text-base py-2 sm:py-3 px-6 sm:px-8 md:px-10 xl:px-12`}
            onClick={() => setActiveButton("ourTeam")}
          >
            Our Team
          </button>
        </div>

        <div className="mt-6 md:mt-8 lg:mt-10 min-h-[250px] md:min-h-[300px] lg:min-h-[350px] xl:min-h-[400px]">
          {activeButton === "aboutUs" && <AboutUs />}
          {activeButton === "ourTeam" && <OurTeam />}
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
