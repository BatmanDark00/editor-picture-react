import "@/assets/styles/components/toggle/Toggle.scss";

import { useSelector, useDispatch } from "react-redux";
import { changeDarkMode } from "@/redux/DarkModeChangeSlice";
import { RootState } from "@/redux";

export default function Toggle() {
  const dispatch = useDispatch();
  const tema = useSelector(
    (state: RootState) => state.darkMode.mode)

  const handleChageMode = () => {
    const optionalTheme = tema === "dark" ? "dark" : "light";
    dispatch(changeDarkMode(optionalTheme))
  }
    return (
        <div className="toggle-container">
          <input
            type="checkbox"
            id="check"
            className="toggle"
            onChange={handleChageMode}
          />
          <label htmlFor="check"></label>
        </div>
    );
}