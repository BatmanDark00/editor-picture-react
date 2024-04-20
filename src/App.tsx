

import "@/App.scss";

import AsideBar from "@/components/section_aside/AsideBar";
import MainEditView from "@/views/MainEditView";
import MenuEditPic from "./components/header/MenuEditPic";
import NavBar from "@/components/header/NavBar";
/* import NavBarLote from "./components/header/NavBarLote"; */
import NavFooter from "./components/footer/NavFooter";

import useDarkMode from "@/hooks/useDarkMode";
import  useOpenMenuEdit  from "@/hooks/useOpenMenuEdit";


//import BaseButton from './components/base/BaseButton'

function App() {
 const { isMenuEditOpen, handleClosedMenuEdit } = useOpenMenuEdit();
 const { isDark } = useDarkMode(); 

  return (
    <div className="app" data-theme={isDark ? "dark": "light"}  >
      <NavBar /> 
       {isMenuEditOpen && <MenuEditPic onClose={handleClosedMenuEdit} />}
      {/* <NavBarLote /> */}
      <AsideBar />
      <main>  
        <MainEditView/>
      </main>
      <NavFooter />
      </div>
  );
}

export default App;
