import React, {useState} from "react";
import "@/assets/styles/components/tool_menu_lateral/toolEdit.scss";

import Accordion from "@/components/common/Accordion";
import ButtonBase from "@/components/common/ButtonBase";
import Typography from "@/components/typography/Typography";

import { useTranslation } from "react-i18next";

import dataToolEdit from "@/components/tool_menu_lateral/tool_edit/main/dataToolEdit";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface State {
  component: React.ReactNode | null;
  titleComponent: string | null;
}

interface Action {
  type: "SET_COMPONENT" | "CLEAR_COMPONENT";
  payload: {
    component: React.ReactNode | null;
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
  const { t } = useTranslation();
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [selectedComponent, setSelectedComponent] = useState<React.ReactNode | null>(null);
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const renderComponent = () => {
    return state.component;
  };

  const selectComponent = (
    component: React.ReactNode | null,
    titleComponent: string
  ) => {
    dispatch({
      type: "SET_COMPONENT",
      payload: {
        component: component,
        titleComponent: t(titleComponent),
      },
    });
    setIsOpened(true);
  };

  const clearComponent = () => {
    dispatch({
      type: "CLEAR_COMPONENT",
      payload: {
        component: null,
        titleComponent: null,
      },
    });
    setIsOpened(false);
    setTimeout(() => setSelectedComponent(null), 500);
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
            <Typography variant="h3">{t(dataToolEdit.title)}</Typography>

            {dataToolEdit.accordions.map((accordion) => (
              <Accordion
                key={accordion.id}
                id={accordion.id}
                name={accordion.name}
                title={t(accordion.title)}
                open={accordion.open}
              >
                {accordion.actions.map((action) => (
                  <ButtonBase
                    key={action.name}
                    onClick={() =>
                      selectComponent(action.component, action.name)
                    }
                  >
                    {" "}
                    <FontAwesomeIcon icon={action.icon as IconProp} />
                    <span> {t(action.name)}</span>
                  </ButtonBase>
                ))}
              </Accordion>
            ))}
          </>
        )}

        {renderComponent()}
      </div>
    </>
  );
}
