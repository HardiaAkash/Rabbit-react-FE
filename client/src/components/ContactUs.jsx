import Rabbit from "../assets/image/rabbit-3.png";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useFormik } from "formik";
import axios from "axios";
import { useState } from "react";

const ContactUs = () => {
  // const baseurl = process.env.VITE_API_BASE_URL;
  const [responseMessage, setResponseMessage] = useState(""); 
  const [isLoading, setIsLoading] = useState(false); 

  const formik = useFormik({
    initialValues: {
      fullName: "",
      contact: "",
      email: "",
      message: "",
    },
    onSubmit: async (values) => {
      setIsLoading(true); 
      try {
        const response = await axios.post(`/api/enquiry/contact`, {
          fullName: values.fullName,
          contact: values.contact,
          email: values.email,
          message: values.message,
        });
        formik.resetForm();
        setResponseMessage(response.data.message || "Enquiry sent successfully!"); // Show success message from response
      } catch (err) {
        setResponseMessage("There was an error submitting your enquiry. Please try again.");
        console.log("Error in Contact Form Submission", err);
      }
      setIsLoading(false); 
    },
  });

  return (
    <div className="bg-[#e7ecff] p-4">
      <div className="w-full max-w-[1200px] mx-auto rounded-[23px] overflow-hidden">
        <div className="flex flex-col lg:flex-row w-full">
          <div className="w-full lg:w-[35%] bg-[#AF1E22] p-6">
            <div className="flex items-end mb-6">
              <img
                src={Rabbit}
                alt="ContactUs"
                className="w-16 h-24 lg:w-20 lg:h-24"
              />
              <p className="text-[32px] lg:text-[36px] font-bold text-white ml-4">
                Contact Us
              </p>
            </div>
            <div className="space-y-6 text-white">
              <div className="flex items-center space-x-4">
                <FaWhatsapp className="text-3xl lg:text-4xl" />
                <div>
                  <p className="font-bold">Whatsapp</p>
                  <p>+91 7207775168</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-3xl lg:text-4xl" />
                <div>
                  <p className="font-bold">India Phone</p>
                  <p>+91 7207775166, +91 7207775169</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-3xl lg:text-4xl" />
                <div>
                  <p className="font-bold">USA & Canada</p>
                  <p>+1 778 723 9359</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-3xl lg:text-4xl" />
                <div>
                  <p className="font-bold">Email</p>
                  <p>enquiry@rabbitspeed.in</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-3xl lg:text-4xl" />
                <div>
                  <p className="font-bold">Address</p>
                  <p>
                    {/* 1-8-694, 95/S.R.T. Prakash Nagar, Begumpet, Hyderabad 500016 */}
                    1-10-27/5/1 Prakash nagar Extn, Nr Hanuman Temple Post office, Hyderabad 500016
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={formik.handleSubmit} className="bg-white w-full lg:w-[65%] lg:px-[40px] pt-[40px] mt-8 lg:mt-0 px-5 pb-5 lg:pb-8">
            <div>
              <div className="w-full">
                <label htmlFor="fullName" className="block font-medium">
                  Full Name
                </label>
                <input
                  className="w-full border border-[#1111111A] rounded-lg focus-visible:outline-none pl-3 h-[44px] focus-visible:border-black mt-1.5"
                  type="text"
                  name="fullName"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  required
                />
              </div>

              <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-[20px] mt-[24px] lg:mt-[32px]">
                <div className="w-full">
                  <label htmlFor="contact" className="block font-medium">
                    Phone Number*
                  </label>
                  <input
                    className="w-full border border-[#1111111A] rounded-lg focus-visible:outline-none pl-3 h-[44px] focus-visible:border-black mt-1.5"
                    type="number"
                     step="any"
                    name="contact"  
                    value={formik.values.contact}
                    onChange={formik.handleChange}
                    required
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="email" className="block font-medium">
                    Email
                  </label>
                  <input
                    className="w-full border border-[#1111111A] rounded-lg focus-visible:outline-none pl-3 h-[44px] focus-visible:border-black mt-1.5"
                    type="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>

              <div className="w-full mt-[24px] lg:mt-[32px]">
                <label htmlFor="message" className="block font-medium">
                  Message
                </label>
                <textarea
                  className="w-full border border-[#1111111A] rounded-lg focus-visible:outline-none pl-3 pt-2 focus-visible:border-black mt-1.5"
                  name="message"
                  rows="5"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                />
              </div>
              {responseMessage && (
            <p className="text-black-500 text-left mt-4">{responseMessage}</p>
          )}
              <button
                type="submit"
                className="bg-[#AF1E22] py-4 px-8 w-full lg:w-fit text-white rounded-full mt-[24px] lg:mt-[32px]"
                disabled={isLoading} 
              >
                {isLoading ? "Submitting..." : "Submit"} {/* Loader text */}
              </button>
            </div>
           
          </form>

       
        
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
