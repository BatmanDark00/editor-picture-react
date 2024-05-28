import React, { useState } from "react";
import "@/assets/styles/components/tool_menu_lateral/edit/basic_concepts/trim.scss";

import ButtonBase from "@/components/common/ButtonBase";
import SelectBase from "@/components/common/SelectBase";

const listSizePhotos = [
  {
    id: 1,
    value: "formFree",
    name: "Forma Libre",
  },
  {
    id: 2,
    value: "photo4x6",
    name: "Foto 4x6",
  },
  {
    id: 3,
    value: "square1x1",
    name: "Cuadrado 1x1",
  },
  {
    id: 4,
    value: "cine",
    name: "Cine",
  },
  {
    id: 5,
    value: "image 4:3",
    name: "Imagen 4:3",
  },
  {
    id: 6,
    value: "image 4:5",
    name: "Imagen 4:5",
  },
];

function Trim() {
  const [selectedOption, setSelectedOption] = useState<string>("Forma Libre");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const list = listSizePhotos;

  const handleChange = (selectedValue: string) => {
    setSelectedOption(selectedValue);
  };

  const openSeletorClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="trim-menu">
      <div className="trim-menu-option">
        <div
          className={`selected-header ${isOpen ? "focus-selected" : ""}`}
          onClick={openSeletorClick}
        >
          {selectedOption}
          <span>
            <i className="fa-solid fa-angle-down"></i>
          </span>
        </div>
        <div className="section-selections">
          {isOpen && (
            <SelectBase
              onChange={handleChange}
              options={list.map((item) => ({
                value: item.value,
                label: item.name,
              }))}
            />
          )}
        </div>

        <div className="orientation-option">
          <p className="title">Orientación</p>
          <div className="actions">
            <ButtonBase>Retrato</ButtonBase>
            <ButtonBase>Paisaje</ButtonBase>
          </div>
        </div>

        {/*  <div className="size-option">
          <p className="text">anchura</p>
          <ButtonBase>32px</ButtonBase>

          <p className="text">Altura</p>
          <ButtonBase>32px</ButtonBase>
        </div>

        <div className="option-aplication">
          <ButtonBase className="cancel">Cancelar</ButtonBase>
          <ButtonBase className="aplic">Aplicar</ButtonBase>
        </div> */}
      </div>
    </div>
  );
}

export default Trim;
