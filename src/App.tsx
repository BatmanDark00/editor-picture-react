import { useState } from "react";

import reactLogo from "@/assets/react.svg";
import viteLogo from "../public/vite.svg";
import BaseButton from "@/components/base/BaseButton";

import NavBar from "@/components/header/NavBar";
import MenuEditPic from "./components/header/MenuEditPic";
import AsideBar from "@/components/section_aside/AsideBar";

import "@/App.scss";
//import BaseButton from './components/base/BaseButton'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <MenuEditPic />
      <AsideBar />

      <main>
        <div className="dark-theme">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>

          <br />

          <BaseButton />
        </div>

        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </main>
    </>
  );
}

export default App;
