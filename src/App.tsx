import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import reactLogo from './assets/react.svg'
import viteLogo from '../public/vite.svg'
import BaseButton from './components/base/BaseButton'

import NavBar from './components/base/header/NavBar'
import AsideBar from './components/base/section_aside/AsideBar'

import './App.scss'
//import BaseButton from './components/base/BaseButton'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
Prueba de como usar font-awseonse  <FontAwesomeIcon icon="fa-solid fa-check-square" />
    <AsideBar />
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

      
    </>
  )
}

export default App
