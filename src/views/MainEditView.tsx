import { useEffect, useState } from "react";

import CropperPicture from "@/components/cropper/CropperPicture";
import UploadFile from "@/components/common/UploadFile";

export default function MainEditView() {
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
  }

  useEffect(() => {
    if (downloadResult) {
     setDownloadResult(false);
    }
  }, [downloadResult]);

  return (
    <>
      <div className="main-edit-view">
        <h1>Editor de imágenes</h1>
        {preview && <button onClick={downloadImage}>Descargar resultado</button>}
        <div className="upload_image">
          {!preview && <UploadFile onFileUpload={handleFileUpload} />}
          {preview && (
            <div className={"cropper"}>
              <CropperPicture src={preview} downloadResult={downloadResult} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
