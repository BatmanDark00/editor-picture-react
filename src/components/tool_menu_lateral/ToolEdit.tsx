import React from "react";

import "@/assets/styles/components/tool_menu_lateral/toolEdit.scss";

export default function ToolEdit() {
  return (
    <>
      <div className="tool-edit">
        <h3>Editar </h3>

        <div className="accordion">
          <input type="checkbox" id="collapse1" className="collapse-checkbox"/>
          <label htmlFor="collapse1" className="accordion-header">
            Conceptos básicos
          </label>
          <div className="accordion-content">
            <button><i className="fa-solid fa-crop-simple"></i>Recortar</button>
            <button><i className="fa-solid fa-rotate-right"></i>Rotar</button>
            <button><i className="fas fa-exchange-alt"></i>Voltear</button>
            <button><i className="fas fa-expand-alt"></i>Redimensionar</button>
            <button><i className="fa-solid fa-palette"></i>Color</button>

          
          </div>
        </div>
      </div>
    </>
  );
}
