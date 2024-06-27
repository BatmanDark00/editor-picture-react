import React, { useState } from "react";

import { useSelector } from "react-redux";
import { RootState } from "@/states";
import { useTranslation } from "react-i18next";

import "@/modules/photo_editor/components/cropper_result/cropperResult.scss";

import ButtonBase from "@/components/common/ButtonBase";
import InputBase from "@/components/common/InputBase";

export default function CropperResult() {
  const { t } = useTranslation();
  const imageCropper = useSelector((state: RootState) => state.imageCropper);
  const [extension, setExtension] = useState<string>("jpg");
  const [nameFile, setNameFile] = useState<string>("Picshur");

  const listExtensions = [
    { id: 1, name: "JPG", value: "jpg" },
    { id: 2, name: "PNG", value: "png" },
    { id: 3, name: "PDF", value: "pdf" },
  ];

  const resultCropper = () => {
    if (imageCropper?.imageForDownload) return downloadImageCanvas();

    return downloadImageCropper();
  };

  const downloadImageCanvas = () => {
    const link = document.createElement("a");
    link.download = `${nameFile}.${extension}`;
    link.href = imageCropper?.imageForDownload ?? "";
    link.click();
  };

  const downloadImageCropper = () => {
    const link = document.createElement("a");
    link.download = `${nameFile}.${extension}`;
    link.href = imageCropper?.imageForDownload ?? "";
    link.click();
  };

  const addNameFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameFile(e.target.value);
  };

  return (
    <>
      <div className="cropper-result">
        <div className="content">
          <img src={imageCropper?.imageForDownload} alt="result"></img>
        </div>

        <div className="save-image">
          <div className="name-file">
            <h3>{t("cropperResult.saveInComputer")} </h3>
            <InputBase
              onChange={addNameFile}
              value={nameFile}
              children="Nombre del Archivo"
            />
          </div>

          <div className="format">
            {listExtensions.map((ext) => (
              <ButtonBase
                key={ext.id}
                className="btn_secondary"
                textAlign="center"
                onClick={() => setExtension(ext.value)}
              >
                {ext.name}
              </ButtonBase>
            ))}
          </div>

          <div className="actions">
            <ButtonBase textAlign="center" className="btn_tertiary">
              {" "}
              {t("common.cancel")}
            </ButtonBase>
            <ButtonBase
              textAlign="center"
              className="btn_primary"
              onClick={resultCropper}
            >
              {t("common.save")}
            </ButtonBase>
          </div>
        </div>
      </div>
    </>
  );
}
