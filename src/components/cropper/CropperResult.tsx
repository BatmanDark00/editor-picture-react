import { useSelector } from "react-redux";
import { RootState } from "@/redux";

import "@/assets/styles/components/cropper/cropperResult.scss";

import ButtonBase from "@/components/common/ButtonBase";

export default function CropperResult() {
  const imageCropper = useSelector((state: RootState) => state.imageCropper);

  return (
    <>
      <div className="cropper-result">
        <div className="content">
          <img src={imageCropper?.urlImage}></img>
        </div>

        <div className="save-image">
          <div className="name-file">
            <h3>Guardar en el ordenador </h3>
            <input type="text" placeholder="Nombre del archivo" />
          </div>

          <div className="format">
            <ButtonBase>JPG</ButtonBase>
            <ButtonBase>PNG</ButtonBase>

            <ButtonBase>PDF</ButtonBase>
          </div>

          <div className="actions">
            <ButtonBase>Cancelar</ButtonBase>
            <ButtonBase className="btn_primary">Guardar</ButtonBase>
          </div>
        </div>
      </div>
    </>
  );
}
