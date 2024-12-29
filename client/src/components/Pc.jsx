import PC from "../assets/image/pc.png";
import Religious from "../assets/logo/religious.svg";
import Document from "../assets/logo/document.svg";
import Ship from "../assets/logo/ship.svg";
import Food from "../assets/logo/food.svg";
import HouseHold from "../assets/logo/house-hold.svg";
import Contact from "../assets/logo/contact.svg";
import Email from "../assets/logo/email.svg";

const Slider = [
  {
    name: "Religious Items",
    src: Religious,
  },
  {
    name: "Documents",
    src: Document,
  },
  {
    name: "Ship Any Quantity",
    src: Ship,
  },
  {
    name: "Food Items",
    src: Food,
  },
  {
    name: "Household Items",
    src: HouseHold,
  },
];

const Pc = () => {
  return (
    <div className="px-4 md:px-[60px] lg:px-[120px]">
      <div className="w-full flex flex-col lg:flex-row gap-[30px] lg:gap-[68px] mt-[50px] lg:mt-[100px]">
        <div className="w-full lg:w-1/2">
          <p className="text-[30px] lg:text-[40px] font-bold text-[#AF1E22]">
            Personal <span className="text-[#100E3F]">Courier</span>
          </p>
          <p className="text-base lg:text-lg font-normal text-justify text-[#333333] mt-[20px] lg:mt-[36px]">
            Courier across the World. Send Whatever You Want, From Wherever You
            Want, To Whomever You Want. Experience reliable and efficient
            delivery with our comprehensive services.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src={PC}
            alt="PC Image"
            className="object-contain max-w-full h-auto lg:max-w-[80%]"
          />
        </div>
      </div>

      <div className="bg-white py-[20px] lg:py-[30px] rounded-2xl mt-[30px] lg:mt-[50px] bg-[linear-gradient(144.33deg,_#FFFFFF_78.21%,_#FFDCE8_100%)]">
        <p className="text-[20px] lg:text-[24px] font-medium text-center">
          Ship at any scale for all types of business
        </p>
        <div className="flex flex-wrap justify-center lg:flex-nowrap mt-[20px] lg:mt-[30px] w-full">
          {Slider.map((s, index) => {
            const ImageComponent = s.src;

            return (
              <div
                key={index}
                className="w-[45%] md:w-[30%] lg:w-full flex flex-col justify-center items-center gap-[10px] lg:gap-[20px] mt-[15px] lg:mt-0"
              >
                {/* <ImageComponent /> */}
                <img src={ImageComponent} alt="loading"/>
                <p className="text-base lg:text-lg font-semibold mt-2 text-center">
                  {s.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full mt-[30px] lg:mt-[45px] gap-[50px] lg:gap-[100px]">
        <div className="w-full">
          <p className="text-[30px] lg:text-[40px] font-bold text-[#100E3F]">
            How it works
          </p>
          <p className="text-justify text-base lg:text-lg font-normal mt-2">
            Contact us for door pickup and personalized solutions based on your
            needs.
          </p>
        </div>
        <div className="w-full p-4 lg:p-5 bg-white rounded-2xl">
          <div className="flex gap-2.5">
            {/* <Contact /> */}
              <img src={Contact} alt="loading" />
            <div>
              <p className="text-base lg:text-lg font-normal">Contact us at:</p>
              <p className="text-base lg:text-lg font-normal">+91 7207775166</p>
              <p className="text-base lg:text-lg font-normal">+91 7207775169</p>
            </div>
          </div>
          <div className="flex gap-2.5 mt-[20px] lg:mt-[25px]">
            {/* <Email /> */}
            <img src={Email} alt="loading"/>
            <div>
              <p className="text-base lg:text-lg font-normal">Email at:</p>
              <p className="text-base lg:text-lg font-normal">
                enquiry@rabbitspeed.in
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pc;
