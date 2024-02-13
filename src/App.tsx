import { useState } from "react";
import { useEffect } from 'react';



import MainEditView from "@/views/MainEditView";

import NavBar from "@/components/header/NavBar";
import MenuEditPic from "./components/header/MenuEditPic";
import NavBarLote from "./components/header/NavBarLote";
import AsideBar from "@/components/section_aside/AsideBar";
import NavFooter from "./components/base/footer/NavFooter";


import "@/App.scss";
//import BaseButton from './components/base/BaseButton'

function App() {
  const [isMenuEditOpen, setMenuEditOpen] = useState(false);

  useEffect(() => {
    const handleOpenMenuEdit = (event: { stopPropagation: () => void; detail: JSON; }) => {
      event.stopPropagation(); // Evita la propagación del evento
      console.log('Evento personalizado recibido:', event.detail);
      
      // Espera un breve momento antes de cerrar el menú
      setTimeout(() => {
        setMenuEditOpen(true);
      }, 10);
    };
  
    window.addEventListener('openMenuEdit', handleOpenMenuEdit);
  
    return () => {
      window.removeEventListener('openMenuEdit', handleOpenMenuEdit);
    };
  }, []); 
  

  const handleCloseMenuEdit = () => {
    console.log("Menú cerrado");
    setMenuEditOpen(false);
  };

  return (
    <>
      <NavBar />
  
      {isMenuEditOpen && <MenuEditPic onClose={handleCloseMenuEdit} />}

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
