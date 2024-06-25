import React, { useState } from "react";
import styles from "@/modules/photo_editor/components/menu_lateral/filter/filters.module.scss";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/states";

import ButtonBase from "@/components/common/ButtonBase";
import SliderZoom from "@/components/common/SliderZoom";
import Typography from "@/modules/common/components/typography/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setApplyStyles } from "@/modules/photo_editor/states/cropper/imageCropperSlice";
import { setFilters } from "@/modules/photo_editor/states/cropper/filterSlice";

const dataFilterComponent = [
  {
    id: 0,
    title: "B&W Tone",
    nameValue: "grayscale",
    type: "%",
    min: 0,
    max: 100,
    typeRange: "%",
    value: 100,
    defaultValue: 100,
  },
  {
    id: 1,
    title: "Vintage",
    nameValue: "sepia",
    type: "%",
    min: 0,
    max: 100,
    typeRange: "%",
    value: 100,
    defaultValue: 100,
  },
  {
    id: 2,
    title: "Chromatic",
    nameValue: "saturate",
    type: "%",
    min: 0,
    max: 400,
    typeRange: "px",
    value: 400,
    defaultValue: 400,
  },
  {
    id: 3,
    title: "Brightness",
    nameValue: "brightness",
    type: "%",
    min: 0,
    max: 100,
    typeRange: "%",
    value: 50,
    defaultValue: 50,
  },
  {
    id: 4,
    title: "Opacity Tone",
    nameValue: "opacity",
    type: "%",
    min: 0,
    max: 100,
    typeRange: "%",
    value: 50,
    defaultValue: 50,
  },
  {
    id: 5,
    title: "High Contrast",
    nameValue: "contrast",
    type: "%",
    min: 0,
    max: 400,
    typeRange: "px",
    value: 400,
    defaultValue: 400,
  },
  {
    id: 6,
    title: "Blur Tone",
    nameValue: "blur",
    type: "px",
    min: 0,
    max: 10,
    typeRange: "rem",
    value: 4,
    defaultValue: 3,
  },
];

function Filters() {
  const dispatch = useDispatch();
  const imageCropper = useSelector((state: RootState) => state.imageCropper);
  const [indexVal, setIndexVal] = useState<number | null>(null);
  const [filtersVal, setFiltersVal] = useState<number[]>(
    //dataFilterComponent.map((filter) => filter.max)
    Array(dataFilterComponent.length).fill(0)
  );
  const listsFilters = dataFilterComponent;

  const handleOptionClick = (index: number) => {
    if (index !== indexVal) {
      setIndexVal(index);

      console.log("index", index);
      const selectFilterTone = dataFilterComponent[index];           

      dispatch(
        setFilters({
          [selectFilterTone.nameValue]: `${selectFilterTone.value}`,
        })
      );
    }
  };

  const handleSliderChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newFiltersVal = [...filtersVal];
    newFiltersVal[index] = parseInt(e.target.value);

    dataFilterComponent[index].value = parseInt(e.target.value);
    setFiltersVal(newFiltersVal);

    const selectFilterTone = dataFilterComponent[index];

    if (selectFilterTone) {
      console.log("selectFilterTone", selectFilterTone);
      dispatch(
        setFilters({
          [selectFilterTone.nameValue]: `${selectFilterTone.value}`,
        })
      );
    }
  };

  const handleCloseOptionClick = (/*index: number*/) => {
    setIndexVal(null);
    /* if (index !== null) {
      const newFiltersVal = [...filtersVal];
      newFiltersVal[index] = 0;
      setFiltersVal(newFiltersVal);
    } */
    dispatch(setApplyStyles(false));
  };

  const applyStyles = () => {
    dispatch(setApplyStyles(true));
  };

  return (
    <>
      <Typography variant="h3" weight="bold" >Filters</Typography>

      <div className={styles.containerFilter}>
        {listsFilters.map((item, index) => (
          <div
            className={`${styles.divFilter} ${
              index === indexVal ? styles.actived : styles.disabled
            }`}
            key={index}
            onClick={() => handleOptionClick(index)}
          >
            {index === indexVal ? (
              <div className={styles.divOption}>
                <div className={styles.divButtonSelect}>
                  <ButtonBase
                    textAlign="center"
                    onClick={() => handleCloseOptionClick()}
                  >
                    <FontAwesomeIcon icon={["fas", "xmark"]} />
                  </ButtonBase>
                  <ButtonBase
                    textAlign="center"
                    className="btn_primary"
                    onClick={applyStyles}
                  >
                    <FontAwesomeIcon icon={["fas", "check"]} />
                  </ButtonBase>
                </div>
                <div className={styles.divInput}>
                  <SliderZoom
                    min={item.min}
                    max={item.max}
                    value={item.value}
                    onChange={(e) => handleSliderChange(e, index)}
                  />
                </div>
              </div>
            ) : (
              <div className={styles.divImagePreview}>
                <figure
                  key={index}
                  style={{ display: `${index === indexVal ? "none" : "flex"}` }}
                >
                  <img
                    src={imageCropper?.urlImage}
                    alt={`picture with ${item.title}`}
                    className={styles.img}
                    style={{
                      filter: `${item.nameValue}(${item.defaultValue}${item.type})`,
                    }}
                  />
                  <figcaption className={styles.figcaption}>
                    {item.title}
                  </figcaption>
                </figure>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Filters;
