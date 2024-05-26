import Default from "@/components/tool_menu_lateral/Default";
import ToolEdit from "@/components/tool_menu_lateral/tool_edit/main/ToolEdit";

import { RootState } from "@/redux";
import { useSelector } from "react-redux";

export default function EditMenuLateral() {
  const menuLateralEdit = useSelector(
    (state: RootState) => state.menuLateralEdit
  );

  const renderComponent = () => {
    switch (menuLateralEdit.component) {
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
      <div className="tool-menu">{renderComponent()}</div>     
    </>
  );
}
