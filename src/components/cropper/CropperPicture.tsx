import { CSSProperties, useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CropperRef, Cropper, Priority } from "react-advanced-cropper";

import "react-advanced-cropper/dist/style.css";
import "react-advanced-cropper/dist/themes/corners.css";

import { setUrlImage, setImageCanvas } from "@/redux/imageCropperSlice";
import { RootState } from "@/redux";

interface Props {
  downloadResult?: boolean;
}

interface CoordinatesInterface {
  x: number | 0;
  y: number | 0;
  width: number | 100;
  height: number | 100;
}

export default function CropperPicture({ downloadResult }: Props) {
  const cropperRef = useRef<CropperRef>(null);
  const imageCropper = useSelector((state: RootState) => state.imageCropper);

  const dispatch = useDispatch();

  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [defaultCoordinates, setDefaultCoordinates] =
    useState<CoordinatesInterface>({
      x: 0,
      y: 0,
      width: 400,
      height: 400,
    });

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

  const onChange = (cropper: CropperRef) => {
    console.log("oNchabge", cropper.getCoordinates(), cropper.getCanvas());
  };

  const onReady = (cropper: CropperRef) => {
    console.log("Cropper ready", cropper.getCanvas());

    if (imageCropper.urlImage === "") {
      return;
    }
    //Tamaño de la imagen

    setDefaultCoordinates({
      x: 0,
      y: 0,
      width: cropper.getCanvas()?.width ?? 0,
      height: 100,
    });

    console.log("Default Coordinates", cropper.getCanvas()?.width);
  };

  const defaultSize = ({ imageSize, visibleArea }) => {
    return {
      width: (visibleArea || imageSize).width,
      height: (visibleArea || imageSize).height,
    };
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
        onReady={onReady}
        style={style}
        defaultSize={defaultSize}
        stencilProps={{
          handlers: {
            n: true,
            e: true,
            s: true,
            w: true,
          },
          lines: {
            n: true,
            e: true,
            s: true,
            w: true,
          },
          grid: true,
        }}
      ></Cropper>
    </>
  );
}
