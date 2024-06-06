import React, { useState } from "react";
import styles from "@/assets/styles/components/tool_menu_lateral/filters.module.scss";

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "@/redux";

import ButtonBase from "../common/ButtonBase";
import SliderZoom from "@/components/common/SliderZoom";
import Typography from "../typography/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setToneCropper, setFilterValCropper, setToneTypeCropper } from "@/redux/imageCropperSlice";

const dataFilterComponent = [
  {
    id: 0,
    title: "B&W Tone",
    nameValue: "grayscale",
    type: "%",
    min: 0,
    max: 100,
    typeRange: "%",
  },
  {
    id: 1,
    title: "Vintage",
    nameValue: "sepia",
    type: "%",
    min: 0,
    max: 100,
    typeRange: "%",
  },
  {
    id: 2,
    title: "Chromatic",
    nameValue: "saturate",
    type: "%",
    min: 0,
    max: 400,
    typeRange: "px",
  },
  {
    id: 3,
    title: "Brightness",
    nameValue: "brightness",
    type: "%",
    min: 0,
    max: 100,
    typeRange: "%",
  },
  {
    id: 4,
    title: "Opacity Tone",
    nameValue: "opacity",
    type: "%",
    min: 0,
    max: 100,
    typeRange: "%",
  },
  {
    id: 5,
    title: "High Contrast",
    nameValue: "contrast",
    type: "%",
    min: 0,
    max: 400,
    typeRange: "px",
  },
  {
    id: 6,
    title: "Blur Tone",
    nameValue: "blur",
    type: "px",
    min: 0,
    max: 10,
    typeRange: "rem",
  }
];

function Filters() {
  const dispatch = useDispatch();
  const imageCropper = useSelector((state: RootState) => state.imageCropper);
  const [indexVal, setIndexVal] = useState<number | null>(null);
  const [filtersVal, setFiltersVal] = useState<number[]>(Array(dataFilterComponent.length).fill(50));
  const [selectFilterColor, setSelectFilterColor] = useState(dataFilterComponent[0].id)
  const listsFilters = dataFilterComponent;

  const handleOptionClick = (index: number) => {
    if (index !== indexVal) {
      setIndexVal(index);
    }
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newFiltersVal = [...filtersVal];
    newFiltersVal[index] = parseInt(e.target.value)
    setFiltersVal(newFiltersVal);
     dispatch(setFilterValCropper(parseInt(e.target.value)));

     const selectedValue = parseInt(e.target.value);
     setSelectFilterColor(selectedValue);
 
     const selectFilter = dataFilterComponent.find(
       (item) => item.id === index);
 
       if (selectFilter){
         dispatch(setToneCropper(selectFilter.nameValue));
         dispatch(setToneTypeCropper(selectFilter.type));
       }
  };

  const handleCloseOptionClick = (index: number) => {
    setIndexVal(null);
    if (index !== null) {
      const newFiltersVal = [...filtersVal];
      newFiltersVal[index] = 0; 
      setFiltersVal(newFiltersVal);
    }
  };

  return (
    <>
      <Typography variant="h3">Filters</Typography>

      <div className={styles.containerFilter}>
        {listsFilters.map((item, index) => (
          <div
            className={`${styles.divFilter} ${index === indexVal ? styles.actived : styles.disabled}`}
            style={{backgroundColor: `${index === indexVal ? "var(--secondary-200)" : ""}`}}
            key={item.id}
            onClick={() => handleOptionClick(index)}
          >
            {index === indexVal ? (
              <div className={styles.divOption}>
                <div className={styles.divInput}>
                  <SliderZoom 
                   min={item.min} 
                   max={item.max}
                   value={filtersVal[index]} 
                   onChange={(e) => handleSliderChange(e, index)}
                   />
                  <div
              className={styles.divRange}
              style={{ width: `${filtersVal[index]}${item.typeRange}`}}
            >
              {filtersVal[index]}
            </div>
                </div>
                <div className={styles.divButtonSelect}>
                  <ButtonBase
                    onClick={() => handleCloseOptionClick(index)}
                  >
                    <FontAwesomeIcon icon={["fas", "xmark"]} />
                  </ButtonBase>
                  <ButtonBase className="btn_primary">
                    <FontAwesomeIcon icon={["fas", "check"]} />
                  </ButtonBase>
                </div>
              </div>
            )
            :
              (<figure
              key={index}
              style={{ display: `${index === indexVal ? "none" : "flex"}` }}
            >
              <img
                src={imageCropper?.urlImage}
                alt={`picture with ${item.title}`}
                className={styles.img}
                style={{filter: `${item.nameValue}(${filtersVal[index]}%)`}}
              />
              <figcaption className={styles.figcaption}>
                {item.title}
              </figcaption>
            </figure>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Filters;
