import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CropperRef, Cropper } from "react-advanced-cropper";

import "react-advanced-cropper/dist/style.css";
import "react-advanced-cropper/dist/themes/corners.css";

import { setUrlImage } from "@/redux/imageCropperSlice";
import { RootState } from "@/redux";

interface Props {
   downloadResult?: boolean;
}

const onChange = (cropper: CropperRef) => {
  // console.log(cropper.getCoordinates(), cropper.getCanvas());
};

export default function CropperPicture({ downloadResult }: Props) {
  const cropperRef = useRef<CropperRef>(null);
  const imageCropper = useSelector((state: RootState) => state.imageCropper); 
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const dispatch = useDispatch();



  useEffect(() => {
    if (downloadResult) {
      //console.log("Descargando estoy a la escucha");
      onCrop();
    }
  }, [downloadResult]);

  const onCrop = () => {
    if (cropperRef.current) {
      console.log("Listo para descargar");
      setCoordinates(cropperRef.current.getCoordinates());
      //Aqui se puede establecer el nuevo valor de la imagen

      const pngData = cropperRef.current.getCanvas()?.toDataURL("image/png");

      dispatch(setUrlImage(pngData ?? ""));
   /*    const link = document.createElement("a");
      link.download = "batman" + ".png";
      link.href = pngData ?? ""; // Add nullish coalescing operator to provide a default value
     
      link.click(); */
    }
  };

  return (
    <>
      <Cropper
        ref={cropperRef}
        src={imageCropper?.urlImage}
        onChange={onChange}
      ></Cropper>
    </>
  );
}
