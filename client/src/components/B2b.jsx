import B2B from "../assets/image/b2b.png";
import Export from "../assets/logo/export.svg";
import Quantity from "../assets/logo/quantity.svg";
import Sample from "../assets/logo/sample.svg";
import RemoteLocation from "../assets/logo/remote-location.svg";
import Contact from "../assets/logo/contact.svg";
import Email from "../assets/logo/email.svg";

const Slider = [
  {
    name: "Export Orders",
    src: Export,
  },
  {
    name: "Any Quantity",
    src: Quantity,
  },
  {
    name: "Small Samples",
    src: Sample,
  },
  {
    name: "Remote Location Pick-Up",
    src: RemoteLocation,
  },
];

const B2b = () => {
  return (
    <div className="px-4 md:px-[60px] lg:px-[120px]">
      <div className="w-full flex flex-col lg:flex-row gap-[30px] lg:gap-[68px] mt-[50px] lg:mt-[100px]">
        <div className="w-full lg:w-1/2">
          <p className="text-[30px] lg:text-[40px] font-bold text-[#AF1E22]">
            Business <span className="text-[#100E3F]">to business</span>
          </p>
          <p className="text-base lg:text-lg font-normal text-justify text-[#333333] mt-[20px] lg:mt-[36px]">
            You focus on growing your business, and let us handle the shipping.
            Expand your horizons and think global. Made in India, shipped
            worldwide.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src={B2B}
            alt="B2B"
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
            Reach out to us for a personalized shipping solution tailored to
            your business needs. Our team will create a customized plan to meet
            your specific shipping requirements.
          </p>
        </div>
        <div className="w-full p-4 lg:p-5 bg-white rounded-2xl">
          <div className="flex gap-2.5">
            {/* <Contact /> */}
            <img src={Contact} alt="loading"/>
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

export default B2b;
