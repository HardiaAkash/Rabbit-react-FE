import React, { useState } from "react";

import Malaysia from "../assets/logo/malaysia.svg";
import Uae from "../assets/logo/uae.svg";
import Germany from "../assets/logo/germany.svg";
import Canada from "../assets/logo/canada.svg";
import Usa from "../assets/logo/usa.svg";
import Newzealand from "../assets/logo/newzealand.svg";
import Australia from "../assets/logo/australia.svg";
import Uk from "../assets/logo/uk.svg";
import Singapore from "../assets/logo/singapore.svg";
import Rabbit2 from "../assets/image/rabbit-2.png";
import { Modal } from "antd";
import Country from "./Country";

const ThirdSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-[#e7ecff] pt-[60px] px-5 text-center w-full">
      <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-8">
        Countries <span className="text-[#100E3F]">Served</span>
      </h2>
      <div className="flex flex-wrap items-center gap-4 justify-center w-full">
        {[
          { logo: Usa, label: "Ship to USA" },
          { logo: Canada, label: "Ship to Canada" },
          { logo: Australia, label: "Ship to Australia" },
          { logo: Uk, label: "Ship to UK" },
          { logo: Uae, label: "Ship to UAE" },
          { logo: Newzealand, label: "Ship to New Zealand" },
          { logo: Germany, label: "Ship to Germany" },
          { logo: Malaysia, label: "Ship to Malaysia" },
          { logo: Singapore, label: "Ship to Singapore" },
        ].map((country, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-white px-[35px] py-[23px] rounded-lg shadow-md flex flex-col items-center justify-center w-[224px] h-[150px] gap-1">
              {/* <country.logo /> */}
              <img src={country.logo} alt={country.label}/>
              <p className="text-base font-semibold">{country.label}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="mt-8 bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition"
        onClick={() => setIsModalOpen(true)}
      >
        View All
      </button>
      <img src={Rabbit2} alt="Rabbit Image" className="mt-8" />

      <Modal
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width={1200}
      >
        <Country />
      </Modal>
    </div>
  );
};

export default ThirdSection;
