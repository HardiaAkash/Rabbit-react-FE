import founderImageSrc from "../assets/image/founder.png";
import generalManagerSrc from "../assets/image/general-manager.png";
import operationImageSrc from "../assets/image/operation.png";
import customerServiceSrc from "../assets/image/customer-service.png";

const teamMembers = [
  {
    name: "Shyam Agarwal",
    position: "Founder",
    image: founderImageSrc,
  },
  {
    name: "Surya Prakash",
    position: "General Manager Sales & Operations",
    image: generalManagerSrc,
  },
  {
    name: "Vivek Agarwal",
    position: "USA & Canada Operations",
    image: operationImageSrc,
  },
  {
    name: "Anitha Rani",
    position: "Customer Service",
    image: customerServiceSrc,
  },
];

const OurTeam = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-0 mt-10">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center w-full md:w-auto"
        >
          <img
            src={member.image}
            alt={member.name}
            className="rounded-full w-32 h-32 sm:w-40 sm:h-40 lg:w-32 lg:h-32 object-cover mb-4"
          />
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">
            {member.name}
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            {member.position}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OurTeam;
