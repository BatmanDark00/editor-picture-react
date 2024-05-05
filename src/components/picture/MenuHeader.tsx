import React, {  useState } from "react";

import "@/assets/scss/components/picture/menuHeader.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Toggle from "@/components/toggle/Toggle";
import Unsplash from "@/components/picture/Unsplash";

interface Props {
  saveCropper: () => void;
  accept?: string;
  onFileUpload: (file: File) => void; 
}

export default function MenuHeader({
  saveCropper,
  accept = "image/*",
  onFileUpload  
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [menuType, setMenuType] = React.useState<string | null>(null);
  const dropdownRef = React.useRef<HTMLLIElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isOpenUnsplash, setOpenUnsplash] = useState(false);

  const user = {
    name: "Lener",
    age: 20,
  };

  const handleOpenMenuEdit = () => {
    const customEvent = new CustomEvent("openMenuEdit", { detail: user });
    window.dispatchEvent(customEvent);
  };

  const toggleDropdown = (type: string) => {
    setIsOpen(!isOpen);
    setMenuType(type);
  };

  function handleClickFile() {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    if (file) {
      onFileUpload(file);
    }

    toggleDropdown("close");
  };

  const handleClickInside = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleSave = () => {
    saveCropper();
  };

 

  const openDialog = () => {
    setOpenUnsplash(true);

    const dialog = document.getElementById("favDialog") as HTMLDialogElement;
    dialog.showModal();

    toggleDropdown("close");
   
  };

  const closeDialog = () => {
    const dialog = document.getElementById("favDialog") as HTMLDialogElement;
    dialog.close();

  };


  return (
    <>
      <div className="menu-header">
        <nav className="nav-bar">
          <div>
            <a onClick={handleOpenMenuEdit}>
              <FontAwesomeIcon icon={["fas", "bars"]} /> PicShur
            </a>
          </div>

          <ul className="links">
            <li
              className="dropdown"
              id="open"
              onClick={() => toggleDropdown("open")}
              ref={dropdownRef}
            >
              Open
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
                      onClick={handleClickFile}
                    >
                      <FontAwesomeIcon
                        icon={["fas", "desktop"]}
                        className="plus"
                      />
                      Ordenador <span>Ctrl+O</span>
                      <input
                        id="input-file"
                        className="input-file-change"
                        type="file"
                        accept={accept}
                        ref={inputRef}
                        onChange={handleFileChange}
                      />
                    </a>
                  </li>

                  <li className="dropdown-li" onClick={openDialog}>
                    <i className="fa-brands fa-unsplash"></i> Unsplash
                  </li>
                </ul>
              )}
            </li>

            <li className="dropdown" id="save" onClick={handleSave}>
              Save
            </li>
          </ul>

          <div>
            <Toggle />
          </div>
        </nav>
      </div>

      <dialog id="favDialog">
        <Unsplash 
         isOpenUnsplash={isOpenUnsplash} 
         closeUnsplash={closeDialog}         
        />
      </dialog>
    </>
  );
}
