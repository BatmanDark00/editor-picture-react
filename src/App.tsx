/* import { useState } from "react";
import { useEffect } from 'react'; */
import MainEditView from "@/views/MainEditView";
import NavBar from "@/components/header/NavBar";
import MenuEditPic from "./components/header/MenuEditPic";
/* import NavBarLote from "./components/header/NavBarLote"; */
import AsideBar from "@/components/section_aside/AsideBar";
import NavFooter from "./components/footer/NavFooter";
import { useOpenMenuEdit } from "./hooks/useOpenMenuEdit"

import "@/App.scss";
//import BaseButton from './components/base/BaseButton'

function App() {
 const { isMenuEditOpen, handleClosedMenuEdit } = useOpenMenuEdit(true);

  return (
    <>
      <NavBar />
      {isMenuEditOpen && <MenuEditPic onClose={handleClosedMenuEdit} />}
      {/* <NavBarLote /> */}
      <AsideBar />
      <main>  
        <MainEditView/>
      </main>
      <NavFooter />
    </>
  );
}

export default App;
