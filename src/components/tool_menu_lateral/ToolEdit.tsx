import React from "react";

import "@/assets/scss/components/tool_menu_lateral/toolEdit.scss";

export default function ToolEdit() {
  return (
    <>
      <div className="tool-edit">
        <h3>Editar zs</h3>

        <div className="accordion">
          <input type="checkbox" id="collapse1" className="collapse-checkbox" />
          <label htmlFor="collapse1" className="accordion-header">
            Conceptos básicos
          </label>
          <div className="accordion-content">

            <ul>
              <li>
                <p>Concepto 1</p>
              </li>
              <li>
                <p>Concepto 2</p>
              </li>
              <li>
                <p>Concepto 3</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
