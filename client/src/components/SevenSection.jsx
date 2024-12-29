import Rabbit from "../assets/logo/rabbit-4.svg";
import Facebook from "../assets/logo/facebook.svg";
import InstaGram from "../assets/logo/insta.svg";

const SevenSection = () => {
  return (
    <div className="bg-[#100E3F] px-4 sm:px-8 lg:px-[120px] text-white pb-[20px]">
      <div className="flex flex-col lg:flex-row justify-between pt-[38px] pb-[45px] border-b border-[#FFFFFF1A] items-center">
        <div className="mb-8 lg:mb-0">
          {/* <Rabbit /> */}
          <img src={Rabbit} alt="loading"/>
        </div>
        <div className="mb-8 lg:mb-0">
          <p className="text-lg font-bold">Explore</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-[72px] mt-5">
            <div className="flex flex-col gap-2.5">
              <a className="text-sm font-medium" href="#about">
                About us
              </a>
              <a className="text-sm font-medium" href="#work">
                How We Work
              </a>
              <a className="text-sm font-medium" href="#choose">
                Why Choose Us
              </a>
            </div>
            <div className="flex flex-col gap-2.5">
              <a className="text-sm font-medium" href="#quote">
                Get a Quote
              </a>
              <a className="text-sm font-medium" href="#enquire">
                Enquire Now
              </a>
            </div>
          </div>
        </div>
        <div>
          <p className="text-lg font-bold">Social Media</p>
          <div className="flex gap-5 mt-5">
            <a
              href="https://www.google.com/url?q=https://www.facebook.com/profile.php?id%3D61559242487226%26mibextid%3DLQQJ4d&sa=D&source=docs&ust=1725176623900960&usg=AOvVaw12K46pKYSfV1DuieQxZHX1"
              target="_blank"
              rel="noreferrer"
            >
              {/* <Facebook /> */}
              <img src={Facebook} alt="loading"/>
            </a>
            <a
              href="https://www.instagram.com/rabbitspeedinternational?igsh=c3ZwYmhxeWowNmd2&utm_source=qr"
              target="_blank"
              rel="noreferrer"
            >
              {/* <InstaGram /> */}
              <img src={InstaGram} alt="loading"/>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between mt-[13px] text-center lg:text-left">
        <p>A Unit of Rabbit International Cargo Systems Pvt. Ltd.</p>
        <p className="mt-4 lg:mt-0">
          Copyright @2024 Rabbit. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default SevenSection;
