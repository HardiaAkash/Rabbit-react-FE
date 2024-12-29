import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const CustomSelect = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <div
        className="flex items-center cursor-pointer rounded-md py-2 px-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value.icon && <value.icon className="w-6 h-6 mr-2 flex-shrink-0" />}
        <span>{value.label}</span>
        {isOpen ? (
          <FaChevronUp className="w-4 h-4 ml-2" />
        ) : (
          <FaChevronDown className="w-4 h-4 ml-2" />
        )}
      </div>
      {isOpen && (
        <div className="absolute bg-white border border-gray-300 mt-2 rounded-md z-10">
          {options.map((option) => (
            <div
              key={option.value}
              className="flex items-center py-2 px-3 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelect(option)}
            >
              {option.icon && (
                <option.icon className="w-6 h-6 mr-2 flex-shrink-0" />
              )}
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
