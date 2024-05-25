import { useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { RootState } from "@/redux";

import "@/App.scss";
import router from "@/routes";

function App() {
  const themeMode = useSelector((state: RootState) => state.themeMode?.themeMode);

  return (
    <div className="app" data-theme={themeMode ?? 'dark'}>    
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
