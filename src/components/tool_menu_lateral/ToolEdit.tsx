import React from "react";
import "@/assets/styles/components/tool_menu_lateral/toolEdit.scss";

import Accordion from "@/components/common/Accordion";
import ButtonBase from "@/components/common/ButtonBase";

import Color from "@/components/tool_menu_lateral/edit/basic_concepts/Color";
import Trim from "@/components/tool_menu_lateral/edit/basic_concepts/Trim";

export default function ToolEdit() {
  const [component, setComponent] = React.useState<string | null>(null);
  const [titleComponent, setTitleComponent] = React.useState<string | null>(null);

  const renderComponent = () => {
    switch (component) {
      case "Trim":
        return <Trim />;
      case "Color":
        return <Color />;

      default:
        return null; // Puedes devolver null o algún componente por defecto
    }
  };

  const selectComponent = (component: string, titleComponent:string) => {
    setComponent(component);
    setTitleComponent(titleComponent);
    console.log(component);
  };

  return (
    <>
      <div className="tool-edit">

        {component && (
          <>
          <ButtonBase onClick={() => setComponent(null)}>
            {" "}
            <i className="fa-solid fa-arrow-left"></i> {titleComponent}
          </ButtonBase>
          </>
        )}

        {!component && (
          <>
            <h3>Editar </h3>
            <Accordion
              id="accordion1"
              name="accordion1"
              title="Conceptos básicos"
              open={true}
            >
              <ButtonBase  onClick={() => selectComponent("Trim", "Recortar")}>
                {" "}
                <i className="fa-solid fa-crop-simple"></i> Recortar
              </ButtonBase>
              <ButtonBase onClick={() => selectComponent("Color", "Color")}>
                {" "}
                <i className="fa-solid fa-palette"></i> Color
              </ButtonBase>
              <ButtonBase>
                {" "}
                <i className="fa-solid fa-crop-simple"></i> Recortar
              </ButtonBase>
              <ButtonBase>
                {" "}
                <i className="fa-solid fa-crop-simple"></i> Recortar
              </ButtonBase>
            </Accordion>

            <Accordion
              id="accordion2"
              name="accordion2"
              title="Remove replace"
              open={true}
            >
              <ButtonBase>
                {" "}
                <i className="fa-solid fa-crop-simple"></i> Otra cosa
              </ButtonBase>
              <ButtonBase>
                {" "}
                <i className="fa-solid fa-crop-simple"></i> Recortar
              </ButtonBase>
              <ButtonBase>
                {" "}
                <i className="fa-solid fa-crop-simple"></i> Recortar
              </ButtonBase>
              <ButtonBase>
                {" "}
                <i className="fa-solid fa-crop-simple"></i> Recortar
              </ButtonBase>
            </Accordion>
          </>
        )}

        {renderComponent()}
      </div>
    </>
  );
}
