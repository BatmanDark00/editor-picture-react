import { useEffect, useState } from "react";

import "@/assets/scss/views/pictureView.scss";

import CropperPicture from "@/components/cropper/CropperPicture";
import UploadFile from "@/components/common/UploadFile";
import MenuHeader from "@/components/picture/MenuHeader";
import MenuFooter from "@/components/picture/MenuFooter";
import MenuLateral from "@/components/picture/MenuLateral";

export default function PictureView() {
  const [preview, setPreview] = useState<string | null>(null);
  const [downloadResult, setDownloadResult] = useState<boolean>(false);

  const handleFileUpload = (file: File) => {
    console.log("Archivo recibido del padre: ", file);

    const reader = new FileReader();

    reader.onload = () => {
      if (reader.result) {
        setPreview(reader.result as string);
      }
    };

    reader.readAsDataURL(file);
  };

  const downloadImage = () => {
    console.log("Descargando imagen...");
    setDownloadResult(true);

    console.log("el estado es: ", downloadResult);

    console.log("el estado es falso: ", downloadResult);
  };

  useEffect(() => {
    if (downloadResult) {
      setDownloadResult(false);
    }
  }, [downloadResult]);

  return (
    <>
      <div className="picture-view">
        <div className="menu-header">
          <MenuHeader 
           saveCropper={downloadImage}
           onFileUpload={handleFileUpload}
           />
        </div>

        <main>
          <MenuLateral />

          <div className="editor-main">
            <div className="area-cropper">
              {/* {preview && (
                <button onClick={downloadImage}>Descargar resultado</button>
              )} */}

              {!preview && (
                <div className="upload-image">
                  <UploadFile onFileUpload={handleFileUpload} />
                </div>
              )}

              {preview && (
                <div className="cropper-picture">
                  <CropperPicture
                    src={preview}
                    downloadResult={downloadResult}
                  />{" "}
                </div>
              )}
            </div>
            <MenuFooter />
          </div>
        </main>
      </div>
    </>
  );
}
