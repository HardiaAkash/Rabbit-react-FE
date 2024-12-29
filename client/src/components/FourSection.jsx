import React, { useState } from "react";
import thingsImageSrc from "../assets/image/things.png";
import RestrictedItem from "./RestrictedItem";
import { Modal } from "antd";
import CircleImage from "../assets/image/circle-image.png";

const FourSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-5 bg-white w-full px-4 sm:px-6 lg:px-[100px] xl:px-[120px] gap-[80px]">
      <div className="w-full md:w-1/2 mb-5 md:mb-0">
        <p className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-bold text-[#AF1E22] mb-4">
          Items <span className="text-[#100E3F]">Allowed</span>
        </p>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-base leading-relaxed mb-5 text-justify">
          At Rabbit Speed, we provide the flexibility to send a wide range of
          items, from as light as 1 gram to as heavy as 100 kilograms. Our
          services also cover liquid items such as kitchen oil, ghee, and
          pickles, with the added benefit of packing assistance right at your
          doorstep. Additionally, we offer the convenience of home pick-up. For
          more details, please refer to the list of restricted items.
        </p>
        <button
          className="bg-[#AF1E22] text-white py-2 px-5 hover:bg-red-500 rounded-full"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Restricted Items
        </button>
      </div>

      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="relative w-full max-w-[250px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[500px] xl:max-w-[570px] h-auto">
          <img
            src={thingsImageSrc}
            alt="Background"
            className="w-full h-full animate-[spin_15s_linear_infinite]"
          />
          <img
            src={CircleImage}
            alt="Overlay"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] lg:w-[240px] lg:h-[240px] xl:w-[280px] xl:h-[280px]"
          />
        </div>
      </div>

      <Modal
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width={900}
      >
        <RestrictedItem />
      </Modal>
    </div>
  );
};

export default FourSection;
