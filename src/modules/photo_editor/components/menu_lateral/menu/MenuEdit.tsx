import Default from "@/modules/photo_editor/components/menu_lateral/Default";
import ToolEdit from "@/modules/photo_editor/components/menu_lateral/edition/main/ToolEdit";
import Filters from "@/modules/photo_editor/components/menu_lateral/filter/Filters"

import { RootState } from "@/states";
import { useSelector } from "react-redux";

export default function MenuEdit() {
  const menuLateralEdit = useSelector(
    (state: RootState) => state.menuLateralEdit
  );

  const renderComponent = () => {
    switch (menuLateralEdit.component) {
      case "Default":
        return <Default />;
      case "ToolEdit":
        return <ToolEdit />;
      case "Filters":
        return <Filters />;
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
