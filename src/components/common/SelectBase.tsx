import React, {useState} from "react";
import "@/assets/styles/components/common/selectBase.scss";

interface listOptions {
  label?: string;
  value?: string;
}

interface SelectProps {
  options: listOptions[];
  value?: string;
  onChange?: (value: string) => void;
  onClick?: () => void;
}

function SelectBase({ options, onChange, value }: SelectProps) {
    const [selectedOption, setSelectedOption] = useState<string | undefined>(value);

  const handleItemClick = (selectedValue: string) => {
    setSelectedOption(selectedValue);
    if (onChange) {
      onChange(selectedValue);
    }
  };

  return (
    <>
      <ul className="list-options" >
        {options.map((option, index) => (
          <li 
           key={index} 
           onClick={() => handleItemClick(option.label || "")} 
           className={option.label === selectedOption ? "selected" : ""}>
            {option.label}
          </li>
        ))}
      </ul>
    </>
  );
}

export default SelectBase;
