import { RouterProvider } from "react-router-dom";

import "@/App.scss";

import useDarkMode from "@/hooks/useDarkMode";

import router from "@/routes";

function App() {
  const { isDark } = useDarkMode();

  return (
    <div className="app" data-theme={isDark ? "dark" : "light"}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
