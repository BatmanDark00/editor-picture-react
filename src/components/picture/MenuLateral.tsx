import { useState } from "react";

import "@/assets/scss/components/picture/menuLateral.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import Default from "@/components/tool_menu_lateral/Default";
import ToolEdit from "@/components/tool_menu_lateral/ToolEdit";

import { menuLateralData } from "@/json/picture/menuLateralData";

export default function MenuLateral() {
  const [component, setComponent] = useState<string>();

  const handleComponent = (component: string) => {
    console.log("Componente: ", component);
    setComponent(component);
  };

  const renderComponent = () => {
    switch (component) {
      case "Default":
        return <Default />;
      case "ToolEdit":
        return <ToolEdit />;
      // Agrega casos para otros componentes según sea necesario
      default:
        return null; // Puedes devolver null o algún componente por defecto
    }
  };

  return (
    <>
      <div className="clear-fixed"></div>
      <div className="menu-lateral">
      <section className="section-actions">
        <aside>
          {menuLateralData.map((menu, index) => (
            <div
              className="item-menu"
              key={index}
              onClick={() => handleComponent(menu.component)}
            >
              <button>
                <FontAwesomeIcon icon={menu.icon as IconProp} />
              </button>
              <p>{menu.text} </p>
            </div>
          ))}

          <div className="clear-fixed"></div>
        </aside>

       
      </section>
      <section className="section-components">
      {component && <div className="tool-menu">{renderComponent()}</div>}

      </section>
      </div>
    </>
  );
}
