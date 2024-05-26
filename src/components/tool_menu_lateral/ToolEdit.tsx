import React from "react";
import "@/assets/styles/components/tool_menu_lateral/toolEdit.scss";

import Accordion from "@/components/common/Accordion";
import ButtonBase from "@/components/common/ButtonBase";
import Typography from "@/components/typography/Typography";

import Color from "@/components/tool_menu_lateral/edit/basic_concepts/Color";
import Trim from "@/components/tool_menu_lateral/edit/basic_concepts/Trim";

interface State {
  component: string | null;
  titleComponent: string | null;}

interface Action {
  type: "SET_COMPONENT" | "CLEAR_COMPONENT";
  payload: {
    component: string | null;
    titleComponent: string | null;
  };
}

const initialState: State = {
  component: null,
  titleComponent: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_COMPONENT":
      return {
        ...state,
        component: action.payload.component,
        titleComponent: action.payload.titleComponent,
      };
    case "CLEAR_COMPONENT":
      return {
        ...state,
        component: null,
        titleComponent: null,
      };
    default:
      return state;
  }
}
export default function ToolEdit() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const renderComponent = () => {
    switch (state.component) {
      case "Trim":
        return <Trim />;
      case "Color":
        return <Color />;

      default:
        return null; // Puedes devolver null o algún componente por defecto
    }
  };

  const selectComponent = (component: string, titleComponent: string) => {
    dispatch({
      type: "SET_COMPONENT",
      payload: {
        component: component,
        titleComponent: titleComponent,
      },
    });
  };

  const clearComponent = () => {
    dispatch({
      type: "CLEAR_COMPONENT",
      payload: {
        component: null,
        titleComponent: null,
      },
    });
  };

  return (
    <>
      <div className="tool-edit">
        {state.component && (
          <>
            <ButtonBase onClick={() => clearComponent()}>
              {" "}
              <i className="fa-solid fa-arrow-left"></i> {state.titleComponent}
            </ButtonBase>
          </>
        )}

        {!state.component && (
          <>
            <Typography variant="h3">Editar </Typography>

            <Accordion
              id="accordion1"
              name="accordion1"
              title="Conceptos básicos"
              open={true}
            >
              <ButtonBase onClick={() => selectComponent("Trim", "Recortar")}>
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
