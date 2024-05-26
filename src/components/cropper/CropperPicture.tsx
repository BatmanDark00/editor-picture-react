import { CSSProperties, useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CropperRef, Cropper } from "react-advanced-cropper";

import "react-advanced-cropper/dist/style.css";
import "react-advanced-cropper/dist/themes/corners.css";

import { setUrlImage, setImageCanvas } from "@/redux/imageCropperSlice";
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

  const dispatch = useDispatch();

  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);

  useEffect(() => {
    if (downloadResult) {
      //console.log("Descargando estoy a la escucha");
      onCrop();
    }
  }, [downloadResult]);

  const onCrop = () => {
    if (cropperRef.current) {
      setCoordinates(cropperRef.current.getCoordinates());
      //Aqui se puede establecer el nuevo valor de la imagen
      

      const pngData = cropperRef.current.getCanvas()?.toDataURL("image/png");

      //add style to image
      dispatch(setImageCanvas(pngData ?? ""));

      dispatch(setUrlImage(pngData ?? ""));     
    }
  };

  const style: CSSProperties = {
    filter: `hue-rotate(${imageCropper.toneCropper}deg) sepia(10%)`,   
    
  };

  return (
    <>
      <Cropper
        ref={cropperRef}
        src={imageCropper?.urlImage}
        onChange={onChange}
        style={style}
      ></Cropper>
    </>
  );
}
