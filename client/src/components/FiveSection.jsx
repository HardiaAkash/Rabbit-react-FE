import { useState } from "react";
import D2c from "./D2c";
import Pc from "./Pc";
import B2b from "./B2b";
import HowWork from "./HowWork";
import WhyChoose from "./WhyChoose";
import Calculation from "./Calculation";

const FiveSection = () => {
  const [activeButton, setActiveButton] = useState("D2C");
  return (
    <div className="bg-[#e7ecff] pt-[60px] lg:pt-[120px]">
      <p className="text-[#100E3F] text-[32px] lg:text-[48px] font-bold text-center px-4">
        <span className="text-[#AF1E22]">Suitable </span>Solutions For
      </p>
      <div className="flex flex-wrap justify-center gap-3 lg:gap-5 mt-[20px] lg:mt-[40px] px-4">
        <button
          className={`${
            activeButton === "D2C" ? "bg-[#BAE0F4]" : "bg-white"
          } rounded-full px-4 lg:px-[25px] py-2 border border-black font-medium text-sm lg:text-base`}
          onClick={() => setActiveButton("D2C")}
        >
          D2C-Direct to Customer
        </button>

        <button
          className={`${
            activeButton === "PC" ? "bg-[#BAE0F4]" : "bg-white"
          } rounded-full px-4 lg:px-[25px] py-2 border border-black font-medium text-sm lg:text-base`}
          onClick={() => setActiveButton("PC")}
        >
          Personal Courier
        </button>
        <button
          className={`${
            activeButton === "B2B" ? "bg-[#BAE0F4]" : "bg-white"
          } rounded-full px-4 lg:px-[25px] py-2 border border-black font-medium text-sm lg:text-base`}
          onClick={() => setActiveButton("B2B")}
        >
          Business to Business
        </button>
      </div>

      <div className="mt-[30px] lg:mt-[50px]">
        {activeButton === "D2C" && <D2c />}
        {activeButton === "PC" && <Pc />}
        {activeButton === "B2B" && <B2b />}
      </div>

      <HowWork />
      <WhyChoose />
      <Calculation />
    </div>
  );
};

export default FiveSection;
