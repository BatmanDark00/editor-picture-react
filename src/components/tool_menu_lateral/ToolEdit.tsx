import React from "react";

import "@/assets/styles/components/tool_menu_lateral/toolEdit.scss";

import Accordion from "@/components/common/Accordion";
import ButtonBase from "@/components/common/ButtonBase";

export default function ToolEdit() {
  return (
    <>
      <div className="tool-edit">
        <h3 className="title-section-tool-edit">Editar </h3>

       {/*  <div className="accordion">
        <input type="checkbox" id="collapse1" className="collapse-checkbox" /S>
          <label htmlFor="collapse1" className="accordion-header">
            Conceptos básicos
          </label>
          <div className="accordion-content">
            <button>
              <i className="fa-solid fa-crop-simple"></i>Recortar
            </button>
            <button>
              <i className="fa-solid fa-rotate-right"></i>Rotar
            </button>
            <button>
              <i className="fas fa-exchange-alt"></i>Voltear
            </button>
            <button>
              <i className="fas fa-expand-alt"></i>Redimensionar
            </button>
            <button>
              <i className="fa-solid fa-palette"></i>Color
            </button>
          </div>
        </div> */}
   

      <Accordion id="accordion1" name="accordion1" title="Conceptos básicos">
      
          <ButtonBase> <i className="fa-solid fa-crop-simple"></i>Recortar</ButtonBase>
          <ButtonBase> <i className="fa-solid fa-crop-simple"></i>Recortar</ButtonBase>
          <ButtonBase> <i className="fa-solid fa-crop-simple"></i>Recortar</ButtonBase>
          <ButtonBase> <i className="fa-solid fa-crop-simple"></i>Recortar</ButtonBase>
      </Accordion>

      <Accordion id="accordion2" name="accordion2" title="Remove replace">
        Aqui va el del contenido dos
      </Accordion>
      </div>
    </>
  );
}
