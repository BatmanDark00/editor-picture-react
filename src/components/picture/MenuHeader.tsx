import React, { useState } from "react";


import "@/assets/scss/components/header/Navbar.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Toggle from "@/components/toggle/Toggle";


interface Props {
  saveCropper: () => void;
  accept?: string;
  onFileUpload: (file: File) => void;
}


export default function MenuHeader({ saveCropper, accept = "image/*", onFileUpload }: Props) {
  const [isOpen, setIsOpen] = useState(false);  
  const [menuType, setMenuType] = React.useState<string | null>(null);
  const dropdownRef = React.useRef<HTMLLIElement>(null);
  //const inputRef = React.useRef<HTMLInputElement>(null);
 // const [fileComputer, setFileComputer] = useState<string | null>(null);
  //const [openWindow, setOpenWIndow] = useState(false);


  const user = {
    name: "Lener",
    age: 20,
  };

  const handleOpenMenuEdit = () => {
    const customEvent = new CustomEvent("openMenuEdit", { detail: user });
    window.dispatchEvent(customEvent);
  };

  const toggleDropdown = (type: string) => {
    console.log("hola llega al clicj", type);
    setIsOpen(!isOpen);
    setMenuType(type);
  };


 /*  const uploadFile = () => {
    if (inputRef.current) {
      console.log("Clic en la imagen desde el navbar");

      inputRef.current.click();
    }

    const customEvent = new CustomEvent("send-file", { detail: fileComputer });
    window.dispatchEvent(customEvent);
  } */

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //obtener la imagen
    const file = e.target.files![0];

    if (file) {
      onFileUpload(file);
    }
  };

  const handleClickInside = (e: React.MouseEvent) => {
    e.stopPropagation();
  }

 /*  const handleOpenWindow = () => {
    setOpenWIndow(!openWindow)
  } */

  const handleSave = () => {
    console.log("Guardando imagen desde el navbar");

    saveCropper();

  }

 /*  const handleChange = () => {
      onFileUpload();
    
  } */

  return (
    <>
      <header>
        <nav className="nav-bar">
          <div>
            <a onClick={handleOpenMenuEdit}>
              <FontAwesomeIcon icon={["fas", "bars"]} /> PicShur
            </a>
          </div>

        
{/* 
          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          /> */}

          <ul className="links">
            {/* <li>
              <a onClick={handleSave}>
                Save
              </a>
              </li> */}
            <li
              className="dropdown"
              id="open"
              onClick={() => toggleDropdown("open")}
              ref={dropdownRef}
            >
              {" "}
              Open{" "}
              <FontAwesomeIcon
                icon={["fas", "chevron-down"]}
                className="dropdown-rown"
              />
              {isOpen && (menuType === "open" || menuType === "plus") && (
                <ul className="dropdown-menu" onClick={handleClickInside}>
                  <li className="drop-title">
                    <h4>Nueva Imagen</h4>
                  </li>
                  <li className="dropdown-li">
                    <a 
                     href="#" 
                     className="dropdown-link" 
                    >
                    <FontAwesomeIcon icon={["fas", "desktop"]} className="plus"/>
                      Ordenador <span>Ctrl+O</span>
                      <input 
                        id="input-file"
                        className="input-file-change"
                        type="file"
                        accept={accept}
                        /* ref={inputRef} */
                        onChange={handleFileChange}
                       />
                    </a>
                  </li>
                  {/* <li className="dropdown-li">
                    <a href="#" className="dropdown-link">
                    <FontAwesomeIcon icon={["fas", "react"]} className="plus"/>
                      PhotoEditor
                    </a>
                  </li>
                  <li className="dropdown-li">
                    <a href="#" className="dropdown-link">
                    <FontAwesomeIcon icon={["fal", "google-drive"]} className="plus"/>
                      Google Drive
                    </a>
                  </li>
                  <li className="dropdown-li">
                    <a href="#" className="dropdown-link">
                    <FontAwesomeIcon icon={["fas", "google-wallet"]} className="plus"/>
                      Google Fotos
                    </a>
                  </li>
                  <li 
                  className="dropdown-li li-plus" 
                  id="hoverme"
                  onClick={handleOpenWindow}>
                    <FontAwesomeIcon icon={["fas", "plus"]} className="plus" />
                    <a href="#" className="dropdown-link-menu">
                      Más
                    </a>
                    <FontAwesomeIcon
                      icon={["fas", "chevron-right"]}
                      className="right"
                    />

                 {openWindow && (
                 <div 
                 className="dropdown-content"  
                 onClick={handleClickInside}>
                      <ul className="sub-menu">
                        <li className="sub-li">
                        <FontAwesomeIcon icon={["fas", "file-image"]} className="plus"/>
                          <a href="#">Imagenes de Stock</a>
                        </li>
                        <li className="sub-li">
                        <FontAwesomeIcon icon={["fas", "dropbox"]} className="plus"/>
                          <a href="#">Dropbox</a>
                        </li>
                        <li className="sub-li">
                        <FontAwesomeIcon icon={["fas", "camera-rotate"]} className="plus"/>
                          <a href="#">Webcam</a>
                        </li>
                      </ul>
                    </div>)}
                  </li>
                  <li className="drop-title">
                    <h4>Proyecto Existente</h4>
                  </li>
                  <li className="dropdown-li">
                  <FontAwesomeIcon icon={["fas", "desktop"]} className="plus"/>
                    <a href="#">Ordenador</a><span>Ctrl+O</span>
                  </li>
                  <li className="dropdown-li">
                  <FontAwesomeIcon icon={["fas", "phoenix-framework"]} className="plus"/>
                    <a href="#">PhotoEditor</a>
                  </li>*/}
                </ul>
              )} 
            </li>

            <li
              className="dropdown"
              id="save"
              onClick={handleSave}
             /* onClick={() => toggleDropdown("save")}
               ref={dropdownRef} */
            >
              {" "}
              Save{" "}
              {/* <FontAwesomeIcon
                icon={["fas", "chevron-down"]}
                className="dropdown-rown"
              />
              {isOpen && menuType === "save" && (
                <ul 
                 className="dropdown-menu" 
                 id="width-plus" 
                 onClick={handleClickInside}
                >
                  <li className="drop-title">
                    <h4>Guardar como imagen</h4>
                  </li>
                  <li className="dropdown-li">
                    <a href="#" className="dropdown-link" onClick={uploadFile}>
                    <FontAwesomeIcon icon={["fas", "desktop"]} className="plus"/>
                      Ordenador <span>Ctrl+S</span>
                    </a>
                  </li>
                  <li className="dropdown-li">
                  <FontAwesomeIcon icon={["fas", "react"]} className="plus"/>
                    <a href="#" className="dropdown-link">
                      PhotoEditor
                    </a>
                  </li>
                  <li className="dropdown-li">
                  <FontAwesomeIcon icon={["fal", "google-drive"]} className="plus"/>
                    <a href="#" className="dropdown-link">
                      Google Drive
                    </a>
                  </li>
                  <li className="dropdown-li">
                  <FontAwesomeIcon icon={["fas", "google-wallet"]} className="plus"/>
                    <a href="#" className="dropdown-link">
                      Google Fotos
                    </a>
                  </li>
                  <li 
                   className="dropdown-li li-plus" 
                   id="hoverme"  
                   onClick={handleOpenWindow}
                  >
                    <FontAwesomeIcon icon={["fas", "plus"]} className="plus" />
                    <a href="#" className="dropdown-link-menu">
                      Más
                    </a>
                    <FontAwesomeIcon
                      icon={["fas", "chevron-right"]}
                      className="right"
                    />

                    {openWindow && (
                    <div className="dropdown-content" id="left-submenu"  onClick={handleClickInside}>
                      <ul className="sub-menu">
                        <li className="sub-li">
                        <FontAwesomeIcon icon={["fas", "facebook"]} className="plus"/>

                          <a href="#">Facebook</a>
                        </li>
                        <li className="sub-li">
                        <FontAwesomeIcon icon={["fas", "dropbox"]} className="plus"/>

                          <a href="#">Dropbox</a>
                        </li>
                        <li className="sub-li">
                        <FontAwesomeIcon icon={["fas", "pinterest"]} className="plus" />
                          <a href="#">Pinterest</a>
                        </li>
                        <li className="sub-li">
                        <FontAwesomeIcon icon={["fas", "square-twitter"]} className="plus" />
                          <a href="#">Twitter</a>
                        </li>
                      </ul>
                    </div>
                  )}
                  </li>
                  <li><hr /></li>
                  <li className="drop-title bold" >
                    <a href="#">Guardar proyecto</a> <span>Ctrl+⇧+S</span></li>
                </ul>
              )} */}
            </li>
          </ul>

          <Toggle />
      </nav>

      </header>
    </>
  );
}
function saveCropper() {
  throw new Error("Function not implemented.");
}
