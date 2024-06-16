import React from "react";
import "@/modules/photo_editor/components/menu_lateral/edition/main/toolEdit.scss";

import Accordion from "@/components/common/Accordion";
import ButtonBase from "@/components/common/ButtonBase";
import Typography from "@/modules/common/components/typography/Typography";

import { useTranslation } from "react-i18next";

import dataToolEdit from "@/modules/photo_editor/components/menu_lateral/edition/main/dataToolEdit";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { RootState } from "@/states";
import { useDispatch, useSelector } from "react-redux";
import {
  setComponentMain,
  setApplyChanges,
} from "@/modules/photo_editor/states/menu_lateral/menuLateralEditSlice";

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
  const dispatchRedux = useDispatch();
  const menuLateralEditSlice = useSelector(
    (state: RootState) => state.menuLateralEdit
  );

  const { t } = useTranslation();
  const [state, dispatch] = React.useReducer(reducer, initialState);

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

    dispatchRedux(setComponentMain(false));
  };

  const resetComponent = (applyChangesValue: boolean) => {
    dispatch({
      type: "CLEAR_COMPONENT",
      payload: {
        component: null,
        titleComponent: null,
      },
    });

    dispatchRedux(setComponentMain(true));
    dispatchRedux(setApplyChanges(applyChangesValue));
  };

  const clearComponent = () => {
    resetComponent(false);
  };

  return (
    <div className="tool-edit">
      {state.component && (
        <ButtonBase onClick={clearComponent} className="btn_tertiary">
          <i className="fa-solid fa-arrow-left"></i> {state.titleComponent}
        </ButtonBase>
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
                  <FontAwesomeIcon icon={action.icon as IconProp} />
                  <span> {t(action.name)}</span>
                </ButtonBase>
              ))}
            </Accordion>
          ))}

          <div className="actions" key="action-section">
            {dataToolEdit.accordions.map((accordion) => (
              <div key={accordion.id}>
                {accordion.actions.map((action, key) => (
                  <div className="buttons" key={`${accordion.id}-${key}`}>
                    <ButtonBase
                      className="btn_elevated"
                      size="large"
                      textAlign="center"
                      onClick={() =>
                        selectComponent(action.component, action.name)
                      }
                    >
                      <FontAwesomeIcon icon={action.icon as IconProp} />
                      <span> {t(action.name)}</span>
                    </ButtonBase>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      )}

      {!menuLateralEditSlice.isComponentMain && state.component}
    </div>
  );
}
