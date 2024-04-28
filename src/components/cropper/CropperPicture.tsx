import React, { useState, useRef, useEffect } from "react";

import { CropperRef, Cropper } from "react-advanced-cropper";

import "react-advanced-cropper/dist/style.css";
import 'react-advanced-cropper/dist/themes/corners.css';


interface Props {
  src: string;
  downloadResult?: boolean; 
}

const onChange = (cropper: CropperRef) => {
  console.log(cropper.getCoordinates(), cropper.getCanvas());
};

export default function CropperPicture({ src, downloadResult }: Props) {
  const cropperRef = useRef<CropperRef>(null);

  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [image, setImage] = useState<string>();

  useEffect(() => {
    if (downloadResult) {
      console.log("Descargando estoy a la escucha");
      onCrop();
    }
    
  }, [downloadResult]);


  const onCrop = () => {
    if (cropperRef.current) {
      console.log("Listo para descargar");
      setCoordinates(cropperRef.current.getCoordinates());
      // You are able to do different manipulations at a canvas
      // but there we just get a cropped image, that can be used
      // as src for <img/> to preview result
      setImage(cropperRef.current.getCanvas()?.toDataURL());

      const pngData = cropperRef.current.getCanvas()?.toDataURL("image/png");

      const link = document.createElement("a");
      link.download = "batman" + ".png";
      link.href = pngData ?? ""; // Add nullish coalescing operator to provide a default value
      // Simular un clic en el enlace para iniciar la descarga
      link.click();
    }
  };

  return (
    <>     
      <Cropper
        ref={cropperRef}
        src={src}
        onChange={onChange}
        
      ></Cropper>
    </>
  );
}
