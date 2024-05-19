import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "@/assets/styles/views/pictureView.scss";

import CropperPicture from "@/components/cropper/CropperPicture";
import EditMenuLateral from "@/components/tool_menu_lateral/EditMenuLateral";
import MenuFooter from "@/components/picture/MenuFooter";
import MenuHeader from "@/components/picture/MenuHeader";
import MenuLateral from "@/components/picture/MenuLateral";
import UploadFile from "@/components/common/UploadFile";

import { setUrlImage } from "@/redux/imageCropperSlice";
import { RootState } from "@/redux";

export default function PictureView() {
  const [downloadResult, setDownloadResult] = useState<boolean>(false);

  const imageCropper = useSelector((state: RootState) => state.imageCropper); // Utilizando RootState para tipar el estado global

  const dispatch = useDispatch();

  useEffect(() => {
    if (downloadResult) {
      setDownloadResult(false);
    }
  }, [downloadResult]);

  const handleFileUpload = (file: File) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.result) {
        dispatch(setUrlImage(reader.result as string));
      }
    };

    reader.readAsDataURL(file);
  };

  const downloadImage = () => {
    setDownloadResult(true);
  };

  return (
    <div className="picture-view">
      <div className="header">
         <MenuHeader
          saveCropper={downloadImage}
          onFileUpload={handleFileUpload}
        /> 
      </div>
      <div className="menu-lateral">
        <MenuLateral />
      </div>

      {imageCropper.urlImage && (
        <div className="menu-lateral-secondary">
          <EditMenuLateral />
        </div>
      )}

      <div
        className={
          imageCropper.urlImage ? "editor-cropper" : "editor-cropper-plus"
        }
      >
        {!imageCropper.urlImage && (
          <div className="upload-image">
            <UploadFile onFileUpload={handleFileUpload} />
          </div>
        )}
        {imageCropper.urlImage && (
          <div className="cropper-picture">
            <CropperPicture downloadResult={downloadResult} />
          </div>
        )}
      </div>
      <div className={imageCropper.urlImage ? "footer" : "footer-plus"}>
       {/*  <MenuFooter /> */}
      </div>
    </div>
  );
}
