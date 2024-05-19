import { useState } from "react";

import "@/assets/styles/components/tool_menu_lateral/edit/basic_concepts/trim.scss";

import ButtonBase from "@/components/common/ButtonBase";

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
];

function Trim() {
  return (
    <div className="trim-menu">
      <div className="trim-menu-option">
        <select>
          {listSizePhotos.map((item) => (
            <option value={item.value} key={item.id}>
              {item.name}
            </option>
          ))}
        </select>


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
