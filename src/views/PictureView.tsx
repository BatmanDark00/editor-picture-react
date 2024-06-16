import { useDispatch, useSelector } from "react-redux";

import "@/assets/styles/views/pictureView.scss";

import { RootState } from "@/redux";
import { setUrlImage, setImageCropper } from "@/redux/imageCropperSlice";

import CropperPicture from "@/modules/photo_editor/components/cropper_preview/CropperPicture";
import EditMenuLateral from "@/modules/photo_editor/components/menu_lateral/EditMenuLateral";
import MenuFooter from "@/modules/photo_editor/components/main/footer/MenuFooter";
import MenuHeader from "@/modules/photo_editor/components/main/header/MenuHeader";
import MenuLateral from "@/modules/photo_editor/components/main/lateral/MenuLateral";
import UploadFile from "@/components/common/UploadFile";

export default function PictureView() {
  const imageCropper = useSelector((state: RootState) => state.imageCropper);
  const dispatch = useDispatch();
 
  const handleFileUpload = (file: File) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.result) {
        dispatch(setUrlImage(reader.result as string));
        dispatch(setImageCropper(reader.result as string));
      }
    };

    reader.readAsDataURL(file);
  };


  return (
    <main className="picture-view">
      <section className="header">
        <MenuHeader  onFileUpload={handleFileUpload} />
      </section>

      <section className="menu-lateral">
        <MenuLateral />
      </section>

      {imageCropper.urlImage && (
        <section className="menu-lateral-secondary">
          <EditMenuLateral />
        </section>
      )}

      <section className={imageCropper.urlImage ? "editor-cropper" : "editor-cropper-plus"}>
        {!imageCropper.urlImage ? (
          <div>
            <UploadFile onFileUpload={handleFileUpload} />
          </div>
        ) : (
          <div className="cropper-picture">
            <CropperPicture  />
          </div>
        )}
      </section>

      <section className={imageCropper.urlImage ? "footer" : "footer-plus"}>
        <MenuFooter />
      </section>
    </main>
  );
}
