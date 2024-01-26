import { useRef } from "react";
import "@/assets/scss/views/MainEditView.scss";
import upload from "@/assets/images/upload_re_pasx.svg";

export default function MainEditView() {
const inputRef = useRef<HTMLInputElement>(null);

function handleClick() {
    // Simula el clic en el input de archivo cuando se hace clic en la imagen
    if (inputRef.current) {
        inputRef.current.click();
    }
}

  return (
    <>
      <div className="main-edit-view">
        {/* Establece la visibilidad del input a "hidden" */}
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          style={{ display: "none" }}
        />
        <img src={upload} onClick={handleClick} alt="Upload Image" />
      </div>
    </>
  );
}
