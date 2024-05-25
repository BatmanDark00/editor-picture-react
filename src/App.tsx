import { RouterProvider } from "react-router-dom";

import "@/App.scss";
import { useSelector } from "react-redux";
import { RootState } from "./redux/index";
import router from "@/routes";

function App() {
  const darkMode = useSelector(
    (state: RootState) => state.darkMode.mode)

  return (
    <div className="app" data-theme={darkMode ? "dark" : "light" }>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
