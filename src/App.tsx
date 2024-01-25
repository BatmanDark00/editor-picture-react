import { useState } from "react";


import MainEditView from "@/views/MainEditView";

import NavBar from "@/components/header/NavBar";
import MenuEditPic from "./components/header/MenuEditPic";
import AsideBar from "@/components/section_aside/AsideBar";

import "@/App.scss";
//import BaseButton from './components/base/BaseButton'

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <MenuEditPic />
      <AsideBar />

      <main>  
        <MainEditView/>
      </main>
    </>
  );
}

export default App;
