import React, { useState, useEffect } from 'react';
import "@/assets/scss/components/header/Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuType, setMenuType] = React.useState<string | null>(null);
  const dropdownRef = React.useRef<HTMLLIElement>(null);

  const user = {
    name: "Lener",
    age: 20,
  };

  const handleOpenMenuEdit = () => {
    const customEvent = new CustomEvent("openMenuEdit", { detail: user });
    window.dispatchEvent(customEvent);
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (dropdownRef.current && dropdownRef.current.contains(event.target as Node)) {
        
        // Si el clic ocurrió dentro del menú, no hacemos nada
        return;
      }

      // Cerrar el menú al hacer clic fuera de él
      setIsOpen(false);
      setMenuType(null);
    };

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const toggleDropdown = (type: string) => {
    setIsOpen(!isOpen);
    setMenuType(type);
  }; 

  return (
    <>
      <header>
        <nav className="nav-bar">
          <div>
            <a onClick={handleOpenMenuEdit}>
              <FontAwesomeIcon icon={["fas", "bars"]} /> Photo Editor
            </a>
          </div>

          <ul className="links">
            <li className="dropdown" onClick={() => toggleDropdown('open')} ref={dropdownRef}> Open <FontAwesomeIcon icon={["fas", "chevron-down"]} className="dropdown-rown"/>

            {isOpen && menuType === 'open' && (
       
            <ul className="dropdown-menu">
              <li><a href="#" className="dropdown-link">Ordenador 1 {isOpen} </a></li>
              <li><a href="#" className="dropdown-link">Ordenador 2</a></li>
              <li><a href="#" className="dropdown-link">Ordenador 3</a></li>
              <li><a href="#" className="dropdown-link">Ordenador 4</a></li>
            </ul>
        
            )}
              
            
            </li>
            <li className="dropdown" onClick={() => toggleDropdown('save')} ref={dropdownRef}> Save <FontAwesomeIcon icon={["fas", "chevron-down"]} className="dropdown-arrow"/>
            {isOpen && menuType === 'save' && (
            <ul className="dropdown-menu">
              <li><a href="#" className="dropdown-link">Guardar 1</a></li>
              <li><a href="#" className="dropdown-link">Guardar 2</a></li>
              <li><a href="#" className="dropdown-link">Guardar 3</a></li>
              <li><a href="#" className="dropdown-link">Guardar 4</a></li>
            </ul>   
            )}               
            </li>           
          </ul>
  
         {/*  <div className="dropdown-father-open">
            <ul className="dropdown" id="menu">
              <li className="dropdown-list">
                <a href="#" className="dropdown-link">
                  <span>
                    Open <FontAwesomeIcon icon={["fas", "chevron-down"]} className="dropdown-rown"/>
                  </span>
                  <input type="checkbox" className="dropdown-cheked" />
                </a>

                <div className="dropdown-content">
                  <h4 className="sub-title">Nueva imagen</h4>
                  <ul className="dropdown-sub">
                    <li className="dropdown-li">
                      <a href="#" className="dropdown-ancla">Ordenador</a>
                    </li>

                    <li className="dropdown-li">
                      <a href="#" className="dropdown-ancla">PhotoEditor</a>
                    </li>

                    <li className="dropdown-li">
                      <a href="#" className="dropdown-ancla">Google Drive</a>
                    </li>

                    <li className="dropdown-li">
                      <a href="#" className="dropdown-ancla">Google Fotos</a>
                    </li>
                  </ul>
                </div>

                <div className="dropdown-content">
                  <h4 className="sub-title">Proyeccto existente</h4>
                  <ul className="dropdown-sub">
                    <li className="dropdown-li">
                      <a href="#" className="dropdown-ancla">Ordenador</a>
                    </li>

                    <li className="dropdown-li">
                      <a href="#" className="dropdown-ancla">PhotoEditor</a>
                    </li>
                  </ul>
                </div>
              </li>
              </ul>
            </div> */}

{/*
             <div className="dropdown-father-save">
            <ul className="dropdown" id="menu">
              <li className="dropdown-list">
                <a href="#" className="dropdown-link">
                  <span>
                    Save <FontAwesomeIcon icon={["fas", "chevron-down"]} className="dropdown-arrow"/>
                  </span>
                  <input type="checkbox" className="dropdown-cheked" />
                </a>
                <div className="dropdown-content">
                  <h4 className="sub-title">Guardar como imagen</h4>
                  <ul className="dropdown-sub">
                    <li className="dropdown-li">
                      <a href="#" className="dropdown-ancla">Ordenador</a>
                    </li>

                    <li className="dropdown-li">
                      <a href="#" className="dropdown-ancla">PhotoEditor</a>
                    </li>

                    <li className="dropdown-li">
                      <a href="#" className="dropdown-ancla">Google Drive</a>
                    </li>

                    <li className="dropdown-li">
                      <a href="#" className="dropdown-ancla">Google Fotos</a>
                    </li>
                  </ul>
                </div>

                <div className="dropdown-content">
                  <h4 className="sub-title">Más</h4>
                  <ul className="dropdown-sub">
                    <li className="dropdown-li">
                      <a href="#" className="dropdown-ancla">Ordenador</a>
                    </li>

                    <li className="dropdown-li">
                      <a href="#" className="dropdown-ancla">PhotoEditor</a>
                    </li>
                  </ul>
                </div>
              </li>
              </ul>
            </div>
  */}

         {/*  <div>
            <button> Batch</button>
          </div>
          <div>
            <button>
              <FontAwesomeIcon icon={["fas", "circle-info"]} />
            </button>
            <button>
              <FontAwesomeIcon icon={["fas", "circle-user"]} />
            </button>
          </div> */}
        </nav>
      </header>
    </>
  );
}
