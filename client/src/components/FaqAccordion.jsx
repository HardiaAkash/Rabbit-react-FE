import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-[#1111111A] rounded-xl mt-4">
      <button
        className="w-full text-left py-4 px-5 flex justify-between items-center focus:outline-none"
        onClick={toggleOpen}
      >
        <span className="text-lg font-normal text-gray-700">{question}</span>
        <span className="text-lg text-gray-500 font-normal">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="px-5 pb-4 text-gray-600 text-sm">{answer}</div>
      )}
    </div>
  );
};

const FAQAccordion = () => {
  const faqData = [
    {
      question: "1. What items can I send internationally?",
      answer:
        "You can send a wide range of items including documents, food, household items, clothes, and cultural items. For a detailed list of allowed and restricted items, please refer to our allowed items section.",
    },
    {
      question:
        "2. What items are restricted or prohibited for international shipping?",
      answer:
        "Restricted or prohibited items typically include hazardous materials, perishable goods, firearms, and illegal substances. For a complete list, please refer to our restricted items policy.",
    },
    {
      question: "3. Can I ship Internationally?",
      answer:
        "Yes! You can go local to global with us. Rabbit Speed offers international shipping across 150+ countries from India.",
    },
    {
      question: "4. How do we calculate the shipping cost?",
      answer:
        "We calculate the shipping price based on the greater of the two – actual weight or the volumetric weight of the shipments. Volumetric weight depends on the volume (size) of the shipment. It is easily calculated by multiplying a parcel’s length, width, and height (in cm) and dividing that figure by 5000. If the volumetric weight is more, then the shipping charge will be calculated based on that. For a detailed quote, please reach out to our customer service team on +91720 7775168.",
    },
    {
      question: "5. What is needed for international shipping?",
      answer:
        "According to regulations, we require your Aadhar number, as well as the sender's and receiver's details. Additionally, extra documentation may be needed depending on the nature of the shipment.",
    },
    {
      question: "6. Can I track my international shipment?",
      answer:
        "Yes, all international shipments come with a tracking number. You can track your package in real-time on our website.",
    },
    {
      question: "7. What happens if customs are holding our shipment?",
      answer:
        "We manage the customs clearance process for you, ensuring a hassle-free experience. However, additional custom duties or taxes may apply depending on the destination country’s regulations.",
    },
    {
      question: "8. How long does international shipping take?",
      answer:
        "Delivery times vary depending on the destination and the shipping method chosen. Typically, deliveries can take anywhere from 3 to 14 business days",
    },

    {
      question: "9. Can I send liquid items or perishable goods?",
      answer:
        "Yes, you can send liquid items such as kitchen oil, ghee, and pickles. For perishable goods please check our guidelines or contact Rabbit Speed customer support for specific instructions.",
    },
    {
      question: "10. Do you offer home pick-up services?",
      answer:
        "Yes, we offer convenient home pick-up services. Schedule a pick-up through our customer care service to arrange a time that works for you.",
    },
    {
      question: "11. What payment methods do you accept?",
      answer:
        "We accept various payment methods including credit/debit cards, online banking, and digital wallets like Gpay, PhonePe. Payment details will be provided during the booking process.",
    },
    {
      question: "12. How do I contact customer service?",
      answer:
        "You can reach our customer service team via  i. Phone:  +91 72077 75168/ +91 72077 75169  ii. WhatsApp: +91 72077 75168/ +91 72077 75169  iii. Email: enquiry@rabbitspeed.in   iv. Website: www.rabbitspeed.in",
    },
  ];

  return (
    <div className="bg-[#e7ecff] rounded-lg overflow-y-auto max-h-80 custom-scrollbar">
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQAccordion;
