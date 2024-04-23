import  {  useState } from "react";

import { CropperRef, Cropper } from "react-advanced-cropper";

import "react-advanced-cropper/dist/style.css";
import "@/assets/scss/views/MainEditView.scss";

import UploadFile from "@/components/common/UploadFile";

export default function MainEditView() {

  const [preview, setPreview] = useState<string | null>(null);

/*   const defaultVisibleArea = {
    width: 800,
    height: 775,
    left: 0,
    top: 668,
  };
 */
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

  const onChange = (cropper: CropperRef) => {
    console.log(cropper.getCoordinates(), cropper.getCanvas());
  };

  return (
    <>
      <div className="main-edit-view">
        <div className="upload_image">
          {!preview && <UploadFile onFileUpload={handleFileUpload} />}
          {preview && (
            <div className={"cropper"}>
              <Cropper
                src={preview}
                onChange={onChange}                            
              />
            </div>
          )}
        </div>       
      </div>
    </>
  );
}
