import React, { useState } from "react";

import "@/assets/scss/components/picture/menuHeader.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Toggle from "@/components/toggle/Toggle";
import unplashService from "@/services/unplashService";

interface Props {
  saveCropper: () => void;
  accept?: string;
  onFileUpload: (file: File) => void;
}

export default function MenuHeader({
  saveCropper,
  accept = "image/*",
  onFileUpload,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [menuType, setMenuType] = React.useState<string | null>(null);
  const [photos, setPhotos] = React.useState<any[]>([]);
  const [page, setPage] = React.useState<number>(1);
  const dropdownRef = React.useRef<HTMLLIElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

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
  };

  const handleClickInside = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleSave = () => {
    saveCropper();
  };

  const imagesUnplash = async () => {
    // console.log("llmando servicio aAPI unsplash");

   await unplashService.search
      .getPhotos({ query: "films", page: page, perPage: 12 })
      .then((result) => {
        console.log("result", result.response?.results);

        setPhotos(result.response?.results ?? []);
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
      });
  };

  const nextPage = () => {
    setPage(page + 1);
    imagesUnplash();
  }

  const prevPage = () => {
    setPage(page - 1);
    imagesUnplash();
  }

  

  const openDialog = () => {
    const dialog = document.getElementById("favDialog") as HTMLDialogElement;
    dialog.showModal();

    imagesUnplash();
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
                </ul>
              )}
            </li>

            <li className="dropdown" id="save" onClick={openDialog}>
              Unplash
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
        <div className="header">
          <p className="title">Imagenes</p>
          <p className="close" onClick={closeDialog}>
            X
          </p>
        </div>

        <div className="grid">
          {photos.map((photo) => (
            <div key={photo.id} className="content-image">
              <img src={photo.urls.small} alt={photo.alt_description} />
            </div>
          ))}
        </div>

        <menu>
          <button id="cancel" type="button" onClick={prevPage} >
            Anterior
          </button>
          <button type="button"  onClick={nextPage}>Siguiente</button>
        </menu>
      </dialog>
    </>
  );
}
