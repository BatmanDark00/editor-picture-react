import React, { useState } from "react";
import styles from "@/assets/styles/components/tool_menu_lateral/filters.module.scss";

import { useSelector } from "react-redux";
import { RootState } from "@/redux";

import ButtonBase from "../common/ButtonBase";
import SliderZoom from "@/components/common/SliderZoom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const dataFilterComponent = [
  {
    id: 0,
    title: "B&W Tones",
  },
  {
    id: 1,
    title: "Orton Style",
  },
  {
    id: 2,
    title: "Chromatic",
  },
  {
    id: 3,
    title: "Color Grading",
  },
  {
    id: 4,
    title: "Segmented",
  },
];

function Filters() {
  const imageCropper = useSelector((state: RootState) => state.imageCropper);
  const [isOption, setIsOption] = useState<boolean>(false);
  const [indexVal, setIndexVal] = useState<number | null>(null);
  const [sliderZoom, setSliderZoom] = useState<number>(50)

  const listsFilters = dataFilterComponent;

  const handleOptionClick = (index: number) => {
    setIsOption(true);
    setIndexVal(index);
  };

  const handleSliderZoomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderZoom(parseInt(e.target.value));
  };

  return (
    <>
      <h3>Filters</h3>

      <div className={styles.containerFilter}>
        {listsFilters.map((item, index) => (
          <div
            className={`${styles.divFilter} ${index === indexVal ? styles.actived : styles.disabled}`}
            style={{backgroundColor: `${index === indexVal ? "var(--secondary-200)" : ""}`}}
            key={item.id}
            onClick={() => handleOptionClick(index)}
          >
            <figure
              key={index}
              style={{ display: `${index === indexVal ? "none" : "flex"}` }}
            >
              <img
                src={imageCropper?.urlImage}
                alt={`picture with ${item.title}`}
                className={styles.img}
              />
              <figcaption className={styles.figcaption}>
                {item.title}
              </figcaption>
            </figure>
            {isOption && index === indexVal && (
              <div className={styles.divOption}>
                <div className={styles.divInput}>
                  <SliderZoom 
                   min={0} 
                   max={100}
                   value={sliderZoom} 
                   onChange={handleSliderZoomChange}
                   />
                  <div
              className={styles.divRange}
              style={{ width: `${sliderZoom}%`}}
            >
              {sliderZoom}
            </div>
                </div>
                <div className={styles.divButtonSelect}>
                  <ButtonBase>
                    <FontAwesomeIcon icon={["fas", "xmark"]} />
                  </ButtonBase>
                  <ButtonBase className="btn_primary">
                    <FontAwesomeIcon icon={["fas", "check"]} />
                  </ButtonBase>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Filters;
