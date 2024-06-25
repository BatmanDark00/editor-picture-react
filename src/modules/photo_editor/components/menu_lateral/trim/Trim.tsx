import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/states";
import "@/modules/photo_editor/components/menu_lateral/trim/trim.scss";

import ButtonBase from "@/components/common/ButtonBase";


import { setStencilProps, setVisibleCropper,setApplyCrop } from "@/modules/photo_editor/states/cropper/imageCropperSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typography from "@/modules/common/components/typography/Typography";

const listSizePhotos = [
  {
    id: 0,
    value: "10/10",
    name: "Forma Libre",
    minAspectRatio: 0,
    maxAspectRatio: 0,
    //widthAspect: 70,
    //heightAspect: 70,
  },
  {
    id: 1,
    value: "1/1",
    name: "Cuadrado 1x1",
    minAspectRatio: 1,
    maxAspectRatio: 1,
    widthAspect: 70,
    heightAspect: 70,
    left: 3.5,
  },
  {
    id: 2,
    value: "4/6",
    name: "Foto 4x6",
    minAspectRatio: 4,
    maxAspectRatio: 6,
    widthAspect: 50,
    heightAspect: 75,
    left: 4.2,
  },
  {
    id: 3,
    value: "5/7",
    name: "Foto 5x7",
    minAspectRatio: 5,
    maxAspectRatio: 7,
    widthAspect: 55,
    heightAspect: 75,
    left: 4.1,
  },
  {
    id: 4,
    value: "8/10",
    name: "Foto 8x10",
    minAspectRatio: 4,
    maxAspectRatio: 5,
    widthAspect: 60,
    heightAspect: 75,
    left: 4,
  },
  {
    id: 5,
    value: "4/3",
    name: "Imagen 4:3",
    minAspectRatio: 4,
    maxAspectRatio: 3,
    widthAspect: 100,
    heightAspect: 75,
    left: 2.7,
  },
  {
    id: 6,
    value: "16/9",
    name: "Imagen 16:9",
    minAspectRatio: 16,
    maxAspectRatio: 9,
    widthAspect: 150,
    heightAspect: 70,
    left: 1.5,
  },
  {
    id: 7,
    value: "11/14",
    name: "Imagen 11x14",
    minAspectRatio: 11,
    maxAspectRatio: 14,
    widthAspect: 70,
    heightAspect: 75,
    left: 4,
  },
  {
    id: 8,
    value: "2.39/1",
    name: "Cine 2.39:1",
    minAspectRatio: 2.39,
    maxAspectRatio: 1,
    widthAspect: 195,
    heightAspect: 70,
    left: 0,
  },
  {
    id: 9,
    value: "2/1",
    name: "Panorámica 2:1",
    minAspectRatio: 2,
    maxAspectRatio: 1,
    widthAspect: 170,
    heightAspect: 70,
    left: 1,
  },
  {
    id: 10,
    value: "A4",
    name: "Imagen A4",
    minAspectRatio: 210,
    maxAspectRatio: 297,
    widthAspect: 40,
    heightAspect: 70,
    left: 4.8,
  },
];

function Trim() {
  const dispatch = useDispatch();
  const imageCropper = useSelector((state: RootState) => state.imageCropper);
  const [selectedId, setSelectedId] = useState(listSizePhotos[0].id);
  const [indexVal, setIndexVal] = useState<number | null>(null);

  const handleChange = (value: number) => {
    console.log("cambio entrante");
    setSelectedId(value);

    const selectedSize = listSizePhotos.find((item) => item.id === value);
    if (selectedSize) {
      dispatch(
        setStencilProps({
          minAspectRatio: selectedSize.minAspectRatio,
          maxAspectRatio: selectedSize.maxAspectRatio,
        })
      );
    }
  };

  // const selectedSize = listSizePhotos.find((item) => item.id === selectedId);

  const applyCropper = () => {
    dispatch(setApplyCrop(true));
   
  };

  const handleCutOptionClick = (index: number) => {
    if (index !== indexVal) {
      setIndexVal(index);
 
      dispatch(setVisibleCropper(true));
      console.log('entrando clic',imageCropper.isVisibleCropper);

      console.log("entrando clic");

    }
  };

  const handleClosedCutClick = () => {
    setIndexVal(null);
  };

  return (
    <>
      <Typography variant="h3" weight="bold">
        Cut Image
      </Typography>

      <div className="trim-menu-option">
        {listSizePhotos?.map((item, index) => (
          <div
            className={`preview-container ${
              index === indexVal ? "animated" : "not-animated"
            }`}
            key={index}
            style={{
              backgroundImage: `${
                index === indexVal ? `url(${imageCropper.urlImage})` : ""
              }`,
            }}
            onClick={() => handleCutOptionClick(index)}
          >
            {index === indexVal ? (
              <div className="div-buttons-cut">
                <div className="backdrop-buttons">
                  <ButtonBase
                    textAlign="center"
                    size="small"
                    onClick={handleClosedCutClick}
                  >
                    <FontAwesomeIcon icon={["fas", "xmark"]} />
                  </ButtonBase>
                  <ButtonBase
                    className="btn_primary"
                    textAlign="center"
                    size="small"
                    onClick={applyCropper}
                  >
                    <FontAwesomeIcon icon={["fas", "check"]} />
                  </ButtonBase>
                </div>
              </div>
            ) : (
              <div
                className="container-preview-cut"
                style={{ display: `${index === indexVal ? "none" : "block"}` }}
              >
                <button
                  className="button-transparent"
                  onClick={() => handleChange(item.id)}
                  value={item.id}
                />
                <div
                  className="preview-box"
                  style={{
                    width: `${item.widthAspect}px`,
                    height: `${item.heightAspect}px`,
                    left: `${item.left}rem`,
                  }}
                />

                <figure className="figure-cut">
                  <img
                    className="image-preview-cut"
                    src={imageCropper?.urlImage}
                    alt={`preview-image-appearance-${item.name}`}
                  />
                  <figcaption className="figcaption-cut">
                    {item.name}
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

export default Trim;
