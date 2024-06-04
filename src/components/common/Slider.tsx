import React, { useEffect, useCallback, useState, useRef, ChangeEvent } from "react";
import "@/assets/styles/components/common/slider.scss";

interface MultiRangeSliderProps {
  min: number;
  max: number;
  onChange: Function;
}

function Slider ({
  min,
  max,
  onChange
}:MultiRangeSliderProps) {
  const [minVal, setMinVal] = useState<number>(0);
  const [maxVal, setMaxVal] = useState<number>(0);
  const maxValRef = useRef<HTMLInputElement>(null);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxTooltipRef = useRef<HTMLDivElement>(null);
  const minTooltipRef = useRef<HTMLDivElement>(null);

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    if (maxValRef.current && maxTooltipRef.current) {
      const maxPercent = getPercent(maxVal);
      const thumbWidth = maxValRef.current.offsetWidth;
      maxTooltipRef.current.style.left = `calc(${maxPercent}% - ${thumbWidth / 2}px)`;
    }
    if (minValRef.current && minTooltipRef.current) {
      const minPercent = getPercent(minVal);
      const thumbWidth = minValRef.current.offsetWidth;
      minTooltipRef.current.style.left = `calc(${minPercent}% - ${thumbWidth / 2}px)`;
    }  
  }, [minVal, maxVal, getPercent]);

  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div className="container">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
         onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = +event.target.value;
          setMinVal(value);
          if (value < maxVal) {
            setMinVal(value)
          }
        }} 
        className="thumb thumb--zindex-3"
        disabled
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = +event.target.value;
          setMaxVal(value);
          if (value > minVal) {
            setMaxVal(value);
          }
        }}
        className="thumb thumb--zindex-4"
      />

      <div className="slider">
        <div className={`slider-range ${maxVal >= 0 ? "range-positive" : "range-negative"}`} style={{width: `${Math.abs(maxVal)}px`, left: `${maxVal >= 0 ? 90 : maxVal}px`}}>{maxVal}</div>
        <div className="tooltip " style={{left: `${getPercent(maxVal)}%`}}>{maxVal}</div>
      </div>
    </div>
  );
}

export default Slider;