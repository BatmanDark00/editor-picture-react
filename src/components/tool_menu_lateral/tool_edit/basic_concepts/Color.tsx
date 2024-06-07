import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "@/assets/styles/components/tool_menu_lateral/edit/basic_concepts/color.scss";

import SliderBase from "@/components/common/SliderBase";

import { setToneCropper, setFilterValCropper, setToneTypeCropper } from "@/redux/imageCropperSlice";
import { setComponentMain } from "@/redux/menuLateralEditSlice";
import { setApplyStyles} from "@/redux/imageCropperSlice";
import ButtonBase from "@/components/common/ButtonBase";

const listsFiltersColors = [
  {
    id: 0,
    nameValue: "hue-rotate",
    name: "Tone",
    className: "input-tone",
    typeVal: "°",
    type: "deg",
    min: 0,
    max: 360,
  },
  {
    id: 1,
    nameValue: "saturate",
    name: "Saturation",
    className: "input-saturation",
    typeVal: "%",
    type: "%",
    min: 0,
    max: 300,
  },
  {
    id: 2,
    nameValue: "sepia",
    name: "Temperature",
    className: "input-temperature",
    typeVal: "%",
    type: "%",
    min: 0,
    max: 100,
  }
]

export default function Color() {
  const dispatch = useDispatch();
  const [toneFilter, setToneFilter] = useState<number[]>(Array(listsFiltersColors.length).fill(0));
  const [selectFilterColor, setSelectFilterColor] = useState(listsFiltersColors[0].id)

  const handleColorsChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = [...toneFilter];
    newValue[index] = parseInt(event.target.value)
    setToneFilter(newValue);
    dispatch(setFilterValCropper(parseInt(event.target.value)));

    const selectedValue = parseInt(event.target.value);
    setSelectFilterColor(selectedValue);

    const selectFilter = listsFiltersColors.find(
      (item) => item.id === index);

      if (selectFilter){
        dispatch(setToneCropper(selectFilter.nameValue));
        dispatch(setToneTypeCropper(selectFilter.type));
      }
  };


  const applyStyles = () => {
    dispatch(setApplyStyles(true));
  }

/*  
  const clearPropertiesSelected = () => {
    setTone(0);
    setSaturation(0);
    setTemperature(0);

    dispatch(setComponentMain(true));
  };*/

  return (
    <>
    <div className="menu-color">
      {listsFiltersColors.map((item, index) => (
        <div className="container-input-color">
          <p>{item.name}</p>
          <div className="section-slider-change">
           <p>{toneFilter[index]}
             <span>{item.typeVal}</span>
           </p>
         </div>
         
         <SliderBase
           key={item.id}
           className={item.className}
           value={toneFilter[index]}
           min={item.min}
           max={item.max}
           onChange={(e) => handleColorsChange(e, index)}
         />
        </div>
        ))}
    </div>

    <ButtonBase
          className="btn_primary"
          textAlign="center"
          size="small"
          onClick={applyStyles}
        >
          Aplicar
        </ButtonBase>
    </>
  );
}
