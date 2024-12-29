import FAQAccordion from "./FaqAccordion";
import HelpSection from "./HelpSection";
import ContactUs from "./ContactUs";
import BackgroundImage from "../assets/image/city-image.png";

const SixSection = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-[120px] bg-[#e7ecff] pt-5 lg:pt-0">
      <p className="text-[28px] sm:text-[32px] lg:text-[40px] text-[#AF1E22] font-bold text-center">
        Frequently <span className="text-[#100E3F]">Asked Questions</span>
      </p>
      <p className="text-base sm:text-lg font-normal text-center mt-2.5">
        Leverage agile frameworks to provide a robust synopsis for strategy
        foster collaborative thinking to further the
      </p>
      <div className="container mx-auto p-4 lg:p-8 w-full">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 items-center">
          <div className="w-full">
            <FAQAccordion />
          </div>
          <div className="w-full">
            <HelpSection />
          </div>
        </div>
      </div>
      <ContactUs />

      <div
        className="w-full h-[50px] sm:h-[75px] lg:h-[100px] bg-cover bg-center mt-8"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      ></div>

      <div className="relative w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d243747.84111443086!2d78.5919247!3d17.3367652!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9100196f7b93%3A0x82411f89e650a024!2sRabbit%20Speed!5e0!3m2!1sen!2sin!4v1724957438679!5m2!1sen!2sin"
          className="w-full h-[200px] sm:h-[300px] lg:h-[400px]"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div
        className="w-full h-[50px] sm:h-[75px] lg:h-[100px] bg-cover bg-center mt-4 lg:mt-8"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      ></div>
    </div>
  );
};

export default SixSection;
