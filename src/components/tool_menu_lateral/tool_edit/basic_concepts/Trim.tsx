import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "@/assets/styles/components/tool_menu_lateral/edit/basic_concepts/trim.scss";

import ButtonBase from "@/components/common/ButtonBase";

import { setStencilProps, setApplyCrop } from "@/redux/imageCropperSlice";

const listSizePhotos = [
  {
    id: 1,
    value: "1/1",
    name: "Cuadrado 1x1",
    minAspectRatio: 1,
    maxAspectRatio: 1,
  },
  {
    id: 2,
    value: "4/6",
    name: "Foto 4x6",
    minAspectRatio: 4,
    maxAspectRatio: 6,
  },
  {
    id: 3,
    value: "5/7",
    name: "Foto 5x7",
    minAspectRatio: 5,
    maxAspectRatio: 7,
  },
  {
    id: 4,
    value: "8/10",
    name: "Foto 8x10",
    minAspectRatio: 4,
    maxAspectRatio: 5,
  },
  {
    id: 5,
    value: "4/3",
    name: "Imagen 4:3",
    minAspectRatio: 4,
    maxAspectRatio: 3,
  },
  {
    id: 6,
    value: "4/5",
    name: "Imagen 4:5",
    minAspectRatio: 4,
    maxAspectRatio: 5,
  },
  {
    id: 7,
    value: "16/9",
    name: "Imagen 16:9",
    minAspectRatio: 16,
    maxAspectRatio: 9,
  },
  {
    id: 8,
    value: "11/14",
    name: "Imagen 11x14",
    minAspectRatio: 11,
    maxAspectRatio: 14,
  },
  {
    id: 9,
    value: "2.39/1",
    name: "Cine 2.39:1",
    minAspectRatio: 2.39,
    maxAspectRatio: 1,
  },
  {
    id: 10,
    value: "2/1",
    name: "Panorámica 2:1",
    minAspectRatio: 2,
    maxAspectRatio: 1,
  },
  {
    id: 11,
    value: "A4",
    name: "Imagen A4",
    minAspectRatio: 210,
    maxAspectRatio: 297,
  },
];

function Trim() {
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState(listSizePhotos[0].id);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = parseInt(event.target.value);
    setSelectedId(selectedValue);

    const selectedSize = listSizePhotos.find(
      (item) => item.id === selectedValue
    );
    if (selectedSize) {
      dispatch(
        setStencilProps({
          minAspectRatio: selectedSize.minAspectRatio,
          maxAspectRatio: selectedSize.maxAspectRatio,
        })
      );
    }
  };

  const selectedSize = listSizePhotos.find((item) => item.id === selectedId);

  const applyCropper = () => {
    dispatch(setApplyCrop(true));
  };

  return (
    <div className="trim-menu">
      <div className="trim-menu-option">
        <select onChange={handleChange}>
          {listSizePhotos.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>

        {selectedSize && (
          <div className="preview-container">
            <div
              className="preview-box"
              style={{
                width: `${selectedSize.minAspectRatio * 50}px`,
                height: `${selectedSize.maxAspectRatio * 50}px`,
              }}
            >
              {" "}
              aspectRatio<br></br> {selectedSize.minAspectRatio} x{" "}
              {selectedSize.maxAspectRatio}
            </div>
          </div>
        )}

        <ButtonBase
          className="btn_primary"
          textAlign="center"
          size="small"
          onClick={applyCropper}
        >
          Aplicar
        </ButtonBase>
      </div>
    </div>
  );
}

export default Trim;
