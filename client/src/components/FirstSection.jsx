import Navbar from "./Navbar";

import map from "../assets/image/rabbitone.gif";

const FirstSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#ffffff] to-[#ffe6ef] h-auto w-full">
      <Navbar />
      <h1 className="text-4xl md:text-5xl font-bold text-[#100E3F] mt-8 text-center">
        We Move More Than Just <span className="text-[#AF1E22]">Parcels</span>
        <br />
        We Move <span className="text-[#AF1E22]">Emotions</span>
      </h1>
      <div className="flex justify-center gap-4 py-[38px] flex-col lg:flex-row items-center">
        <button
          className=" text-white flex bg-[#AF1E22] rounded-full py-2 px-4 lg:py-4 lg:px-[32px] gap-1.5 items-center w-fit"
          onClick={() =>
            document
              .getElementById("quote")
              .scrollIntoView({ behavior: "auto" })
          }
        >
          Get a Quote
        </button>
        <button
          className=" text-white flex bg-[#AF1E22] rounded-full py-2 px-4 lg:py-4 lg:px-[32px] gap-1.5 items-center w-fit"
          onClick={() =>
            document
              .getElementById("currency")
              .scrollIntoView({ behavior: "auto" })
          }
        >
          Currency Converter
        </button>
        <button
          className=" text-white flex bg-[#AF1E22] rounded-full py-2 px-4 lg:py-4 lg:px-[32px] gap-1.5 items-center w-fit"
          onClick={() =>
            document
              .getElementById("enquire")
              .scrollIntoView({ behavior: "auto" })
          }
        >
          Talk to Experts
        </button>
      </div>
      <div className="flex justify-center items-center w-full pt-10">
        <img src={map} className="max-w-full h-auto" />
      </div>
    </div>
  );
};
export default FirstSection;
