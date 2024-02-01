import React, { useState } from "react";
import "@/assets/scss/components/header/Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL } from "@fortawesome/free-brands-svg-icons"

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPlus, setOpenPlus] = useState(false);
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

  const toggleDropdown = (type: string) => {
    console.log("hola llega al clicj", type);
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
                <ul className="dropdown-menu">
                  <li className="drop-title">
                    <h4>Nueva Imagen</h4>
                  </li>
                  <li className="dropdown-li">
                    <a href="#" className="dropdown-link">
                    <FontAwesomeIcon icon={["fas", "desktop"]} className="plus"/>
                      Ordenador <span>Ctrl+O</span>
                    </a>
                  </li>
                  <li className="dropdown-li">
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
                  <li className="dropdown-li li-plus" id="hoverme">
                    <FontAwesomeIcon icon={["fas", "plus"]} className="plus" />
                    <a href="#" className="dropdown-link-menu">
                      Más
                    </a>
                    <FontAwesomeIcon
                      icon={["fas", "chevron-right"]}
                      className="right"
                    />

                    <div className="dropdown-content">
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
                    </div>
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
                  </li>
                </ul>
              )}
            </li>

            <li
              className="dropdown"
              id="save"
              onClick={() => toggleDropdown("save")}
              ref={dropdownRef}
            >
              {" "}
              Save{" "}
              <FontAwesomeIcon
                icon={["fas", "chevron-down"]}
                className="dropdown-rown"
              />
              {isOpen && menuType === "save" && (
                <ul className="dropdown-menu" id="width-plus" >
                  <li className="drop-title">
                    <h4>Guardar como imagen</h4>
                  </li>
                  <li className="dropdown-li">
                    <a href="#" className="dropdown-link">
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
                  <li className="dropdown-li li-plus" id="hoverme">
                    <FontAwesomeIcon icon={["fas", "plus"]} className="plus" />
                    <a href="#" className="dropdown-link-menu">
                      Más
                    </a>
                    <FontAwesomeIcon
                      icon={["fas", "chevron-right"]}
                      className="right"
                    />

                    <div className="dropdown-content" id="left-submenu">
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
                  </li>
                  <li><hr /></li>
                  <li className="drop-title bold" >
                    <a href="#">Guardar proyecto</a> <span>Ctrl+⇧+S</span></li>
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
