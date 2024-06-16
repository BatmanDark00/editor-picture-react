import { RootState } from "@/redux";
import { useSelector } from "react-redux";

import "@/assets/styles/components/toggle/Toggle.scss";

import useDarkMode from "@/modules/photo_editor/hooks/useDarkMode";

export default function Toggle() {
  const darkMode = useSelector((state: RootState) => state.themeMode.themeMode);

  const { toggleDarkMode } = useDarkMode();

  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        checked={darkMode === "dark"}
        onChange={toggleDarkMode}
      />
      <label htmlFor="check"></label>
    </div>
  );
}
