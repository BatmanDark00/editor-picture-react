import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "@/assets/styles/components/tool_menu_lateral/edit/basic_concepts/color.scss";

import SliderBase from "@/components/common/SliderBase";

import {
  setToneCropper,
  setFilterValCropper,
  setToneTypeCropper,
  setApplyStyles,
  setFilters,
} from "@/redux/imageCropperSlice";
import ButtonBase from "@/components/common/ButtonBase";
import { list } from "unsplash-js/dist/methods/photos";

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
    value: 0,
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
    value: 0,
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
    value: 0,
  },
];

export default function Color() {
  const dispatch = useDispatch();
  const [filtersValues, setFiltersValues] = useState<number[]>(
    Array(listsFiltersColors.length).fill(0)
  );

  const handleColorsChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newValue = [...filtersValues];
    newValue[index] = parseInt(event.target.value);

    listsFiltersColors[index].value = parseInt(event.target.value);
    // setFiltersValues(listsFiltersColors[index].value);

    setFiltersValues(newValue);

    const selectFilter = listsFiltersColors[index];

    if (selectFilter) {
      dispatch(
        setFilters({
          hueRotate: listsFiltersColors[0].value,
          saturate: listsFiltersColors[1].value,
          sepia: listsFiltersColors[2].value,
        })
      );

      // resetear los valores de los filtros

      /* dispatch(setToneCropper(selectFilter.nameValue));
      dispatch(setToneTypeCropper(selectFilter.type)); */
      //  dispatch(setFilterValCropper(newValue[index]));
    }
  };

  const applyStyles = () => {
    dispatch(setApplyStyles(true));

    listsFiltersColors[0].value = 0;
    listsFiltersColors[1].value = 100;
    listsFiltersColors[2].value = 0;

    setFiltersValues(Array(listsFiltersColors.length).fill(0));

    setFilters({
      hueRotate: 0,
      saturate: 0,
      sepia: 0,
    });

    // resetear los valores de los filtros

    // resetear los valores de los filtros
    // setFiltersValues(Array(listsFiltersColors.length).fill(0));
  };

  return (
    <>
      <div className="menu-color">
        {listsFiltersColors.map((item, index) => (
          <div className="container-input-color" key={item.id}>
            <p>{item.name}</p>
            <div className="section-slider-change">
              <p>
                {item.value}
                <span>{item.typeVal}</span>
              </p>
            </div>
            <div className="section-slider-input-color">
              <SliderBase
                className={item.className}
                value={item.value}
                min={item.min}
                max={item.max}
                onChange={(e) => handleColorsChange(e, index)}
              />
            </div>
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
