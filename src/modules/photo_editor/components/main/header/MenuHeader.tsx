import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import "@/modules/photo_editor/components/main/header/menuHeader.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import ChangeLocale from "@/modules/common/components/locale/ChangeLocale";
import CropperResult from "@/modules/photo_editor/components/cropper_result/CropperResult";
import Toggle from "@/modules/common/components/toggle/Toggle";
import Unsplash from "@/modules/photo_editor/components/main/unsplash/Unsplash";

import ModalBase from "@/components/common/ModalBase";

import { useDispatch } from "react-redux";
import {  setIsDownloadImageCropper } from "@/modules/photo_editor/states/cropper/imageCropperSlice";


interface Props { 
  accept?: string;
  onFileUpload: (file: File) => void;
}

export default function MenuHeader({  
  accept = "image/*",
  onFileUpload,
}: Props) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [menuType, setMenuType] = React.useState<string | null>(null);
  const dropdownRef = React.useRef<HTMLLIElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isOpenUnsplash, setOpenUnsplash] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const user = {
    name: "Lener",
    age: 20,
  };

 /*  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); */

  const handleOpenMenuEdit = () => {
    const customEvent = new CustomEvent("openMenuEdit", { detail: user });
    window.dispatchEvent(customEvent);
  };

  const toggleDropdown = (type: string) => {
    setIsOpen(!isOpen);
    setMenuType(type);
  };

  const handleClickOutside = (e: MouseEvent) => {
    console.log("click outside");
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };


  function handleClickFile() {
    if (inputRef.current) {
      inputRef.current.click();
      console.log("click file");
    
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

  
  const openDialog = () => {
    setOpenUnsplash(true);
    toggleDropdown("close");
  };

  const closeDialog = () => {
    setOpenUnsplash(false);
  };

  const handleModalSaveFile = () => {
    setIsModalOpen(true);   
    dispatch(setIsDownloadImageCropper(true));  
  };

  const closeModalSaveFile = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="menu-header">
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

             <span className="version-desktop"> {t("common.open")} </span>
              <FontAwesomeIcon
                icon={["fas", "chevron-down"]}
                className="dropdown-rown version-desktop"
              />
              
              <FontAwesomeIcon
                icon={["fas", "folder-open"]}
                className="version-mobile"
              />


              {isOpen && (menuType === "open" || menuType === "plus") && (
                <ul className="dropdown-menu" onClick={handleClickInside}>
                  <li className="drop-title">
                    <h4> {t("menuHeader.newImage")}</h4>
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
                       {t("menuHeader.computer")} <span>Ctrl+O</span>
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
                    <i className="fa-brands fa-unsplash"></i>
                     {t("menuHeader.unsplash")}
                  </li>
                </ul>
              )}              
              {isOpen && (menuType === "open" || menuType === "plus") && (
                <ul className="dropdown-menu" onClick={handleClickInside}>
                  <li className="drop-title">
                    <h4> {t("menuHeader.newImage")}</h4>
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
                       {t("menuHeader.computer")} <span>Ctrl+O</span>
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
                    <i className="fa-brands fa-unsplash"></i> {t("menuHeader.unsplash")}
                  </li>
                </ul>
              )}
            </li>

            <li className="dropdown" id="save" onClick={handleModalSaveFile}>
              <span className="version-desktop">{t("common.save")}</span>
            

              <FontAwesomeIcon
                icon={["fas", "download"]}
                className="version-mobile"
                ></FontAwesomeIcon>
            </li>
          </ul>

          <div>
            <ChangeLocale />
            <Toggle />
          </div>
        </nav>
      </section>

      <ModalBase
        idModal="modal-unplash"
        title="Imagenes de Unsplash"
        isOpen={isOpenUnsplash}
        closeModal={closeDialog}
        size="medium"
      >
        <Unsplash isOpenUnsplash={isOpenUnsplash} closeUnsplash={closeDialog} />
      </ModalBase>

      <ModalBase
        title=""
        isOpen={isModalOpen}
        closeModal={closeModalSaveFile}
        size="medium"
      >
        <CropperResult />
      </ModalBase>
    </>
  );
}
