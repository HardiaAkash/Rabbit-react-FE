import Contact from "../assets/logo/contact.svg";

const HelpSection = () => {
  return (
    <div>
      <div className="bg-[#1C2B4B] text-white p-8 rounded-lg shadow">
        <button className="bg-[#15233D] px-4 py-2 rounded-full mb-4">
          Let's Talk
        </button>
        <h3 className="text-[30px] mb-4 font-bold">
          You need any help? Get free consultation
        </h3>
        <div className="flex gap-2.5">
          {/* <Contact /> */}
          <img src={Contact} alt="loading" />
          <div>
            <p className="text-base lg:text-lg font-normal">
              Have Any Questions:
            </p>
            <p className="text-base lg:text-lg font-normal">+91 7207775166</p>
          </div>
        </div>
        <a href="#contact-us">
          <button className="bg-[#AF1E22] px-8 py-4 rounded-full mt-[40px]">
            Raise a Query
          </button>
        </a>
      </div>
    </div>
  );
};

export default HelpSection;
