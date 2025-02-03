import Schedule from "../assets/new-logo/one.svg";
import DoorStap from "../assets/new-logo/two.svg";
import AirPlane from "../assets/new-logo/three.svg";
import Delivery from "../assets/new-logo/four.svg";

const HowWork = () => {
  const works = [
    {
      title: "Schedule a pickup",
      image: Schedule,
      description:
        "Get doorstep pickup for parcels. Book couriers for yourself or loved ones on our website.",
    },
    {
      title: "We arrive at your doorstep",
      image: DoorStap,
      description:
        "Our partners reach your location within 24 hours of placing the order.",
    },

    {
      title: "Sit back and relax",
      image: AirPlane,
      description:
        "Your order will be delivered to the chosen destination. Track it from our website or app.",
    },
    {
      title: "Delivery at the doorstep",
      image: Delivery,
      description: "Convenient, reliable delivery right to your door.",
    },
  ];

  return (
    <div
      className="px-4 md:px-[30px] lg:px-[40px] mt-[60px] lg:mt-[100px]"
      id="work"
    >
      <p className="text-[32px] md:text-[36px] lg:text-[40px] font-bold text-[#100E3F] text-center">
        <span className="text-[#AF1E22]">How </span>We Work
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] lg:gap-[30px] mt-[40px] lg:mt-[60px]">
        {works.map((w, index) => {
          const ImageComponent = w.image;

          return (
            <div key={index} className="flex flex-col items-center text-center">
              {/* <ImageComponent className="w-[150px] md:w-[180px] lg:w-[200px] xl:w-[237px]" /> */}
              <img src={ImageComponent} alt="loading" className="w-[150px] md:w-[180px] lg:w-[200px] xl:w-[237px]"/>
              <p className="text-lg md:text-xl lg:text-2xl font-bold mt-5 h-[40px]">
                {w.title}
              </p>
              <div className="text-sm md:text-base lg:text-lg font-normal mt-5">
                {w.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowWork;
