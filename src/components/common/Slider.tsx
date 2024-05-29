import React from "react";
import "@/assets/styles/components/common/slider.scss"

interface SliderProps {
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: () => void;
  value?: string | number;
  min: number;
  max: number;
}

function Slider({ 
    className,
    value,
    onChange,
    min,
    max
   }: SliderProps) {
  return (
    <>
      <input 
       type="range" 
       className={className} 
       value={value}
       min={min}
       max={max}
       onChange={onChange}
      />
    </>
  );
}

export default Slider;
