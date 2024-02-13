import React, { useRef, useState } from "react";
import { CropperRef, Cropper } from "react-advanced-cropper";
import "react-advanced-cropper/dist/style.css";

import "@/assets/scss/views/MainEditView.scss";
import upload from "@/assets/images/upload_re_pasx.svg";

export default function MainEditView() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const defaultVisibleArea = {
    width: 800,
    height: 775,
    left: 63,
    top: 668,
  };

  const onChange = (cropper: CropperRef) => {
    console.log(cropper.getCoordinates(), cropper.getCanvas());
  };

  function handleClick() {
    // Simula el clic en el input de archivo cuando se hace clic en la imagen
    if (inputRef.current) {
      console.log("Clic en la imagen");

      inputRef.current.click();
    }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    //obtener la imagen
    const file = e.target.files![0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target) {
          setPreview(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <>
      <div className="main-edit-view">
        <div className="upload_image">
          {/* Establece la visibilidad del input a "hidden" */}
          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          {!preview && (
            <img src={upload} onClick={handleClick} alt="Upload Image" />
          )}
          {preview && (
            <Cropper
              src={preview}
              onChange={onChange}
              className={"cropper"}
              defaultVisibleArea={defaultVisibleArea}
            />
          )}
        </div>
      </div>
    </>
  );
}
