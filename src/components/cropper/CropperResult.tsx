import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux";

import "@/assets/styles/components/cropper/cropperResult.scss";

import ButtonBase from "@/components/common/ButtonBase";

export default function CropperResult() {
  const imageCropper = useSelector((state: RootState) => state.imageCropper);
  const [extension, setExtension] = useState<string>("jpg");
  const [nameFile, setNameFile] = useState<string>("Picshur");

  const listExtensions = [
    { id: 1, name: "JPG", value: "jpg" },
    { id: 2, name: "PNG", value: "png" },
    { id: 3, name: "PDF", value: "pdf" },
  ];

  const resultCropper = () => {
    if (imageCropper?.imageCanvas) return downloadImageCanvas();

   return downloadImageCropper();
  };

  const downloadImageCanvas = () => {
    const link = document.createElement("a");
    link.download = `${nameFile}.${extension}`;
    link.href = imageCropper?.imageCanvas ?? "";
    link.click();
  };

  const downloadImageCropper = () => {
    const link = document.createElement("a");
    link.download = `${nameFile}.${extension}`;
    link.href = imageCropper?.urlImage ?? "";
    link.click();
  };

  const addNameFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameFile(e.target.value);
  };

  return (
    <>
      <div className="cropper-result">
        <div className="content">
          <img src={imageCropper?.urlImage} alt="result"></img>
        </div>

        <div className="save-image">
          <div className="name-file">
            <h3>Guardar en el ordenador </h3>
            <input
              type="text"
              placeholder="Nombre del archivo"
              onChange={addNameFile}
              value={nameFile}
            />
          </div>

          <div className="format">
            {listExtensions.map((ext) => (
              <ButtonBase
                key={ext.id}
                textAlign="center"
                onClick={() => setExtension(ext.value)}
                className={
                  extension === ext.value ? "btn_primary" : "btn_theme"
                }
              >
                {ext.name}
              </ButtonBase>
            ))}
          </div>

          <div className="actions">
            <ButtonBase textAlign="center">Cancelar</ButtonBase>
            <ButtonBase
              textAlign="center"
              className="btn_primary"
              onClick={resultCropper}
            >
              Guardar
            </ButtonBase>
          </div>
        </div>
      </div>
    </>
  );
}
