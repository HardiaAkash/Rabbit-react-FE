import React from "react";
import Passport from "../assets/logo/passport.svg";

const restrictedItemList = [
  {
    name: "Live Animals & Plants",
    imageSrc: Passport,
  },
  {
    name: "Passport",
    imageSrc: Passport,
  },
  {
    name: "Jewellery",
    imageSrc: Passport,
  },
  {
    name: "Liquor",
    imageSrc: Passport,
  },
  {
    name: "Industrial Solvents",
    imageSrc: Passport,
  },
  {
    name: "Military Equipment",
    imageSrc: Passport,
  },
  {
    name: "Infectious Substances",
    imageSrc: Passport,
  },
  {
    name: "Bullion",
    imageSrc: Passport,
  },
  {
    name: "Currency notes & coins",
    imageSrc: Passport,
  },
  {
    name: "Precious Stones",
    imageSrc: Passport,
  },
  {
    name: "Fertilizer & Poisons",
    imageSrc: Passport,
  },
  {
    name: "Explosives",
    imageSrc: Passport,
  },
  {
    name: "Flammable Adhesives",
    imageSrc: Passport,
  },
  {
    name: "Pornography material",
    imageSrc: Passport,
  },
  {
    name: "E-cigarette",
    imageSrc: Passport,
  },
  {
    name: "Uncrossed(bearer cheques)",
    imageSrc: Passport,
  },
  {
    name: "Radioactive material",
    imageSrc: Passport,
  },
  {
    name: "Batteries",
    imageSrc: Passport,
  },
  {
    name: "Bleach",
    imageSrc: Passport,
  },
  {
    name: "Magnetized Materials",
    imageSrc: Passport,
  },
  {
    name: "Cheques",
    imageSrc: Passport,
  },
];

const RestrictedItem = () => {
  return (
    <div>
      <p className="text-[32px] font-medium mb-8 ml-7">Restricted Items</p>
      <div className="flex flex-wrap justify-between">
        {restrictedItemList.map((r, index) => {
          const ImageComponent = r.imageSrc;

          return (
            <div
              key={index}
              className="flex flex-col justify-between items-center w-[45%] sm:w-[30%] md:w-[30%] lg:w-[30%] xl:w-[30%] mb-10"
            >
              <ImageComponent className="w-12 h-12" />
              <p className="text-lg font-semibold mt-2 text-center">{r.name}</p>
            </div>
          );
        })}
      </div>
      <p className="text-justify px-4">
        <span className="font-bold">Note -</span> There may many other items
        which are restricted but not mentioned in the above list. They might be
        based on the law of that particular country to which you want to ship
        your parcel. We will guide you with the items that are prohibited /
        restricted to courier to your destination country.
      </p>
    </div>
  );
};

export default RestrictedItem;
