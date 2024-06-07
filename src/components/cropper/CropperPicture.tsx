import { CSSProperties, useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  CircleStencil,
  CropperRef,
  Cropper,
  Priority,
} from "react-advanced-cropper";

import "react-advanced-cropper/dist/style.css";
import "react-advanced-cropper/dist/themes/corners.css";

import SpinnerLoaderBase from "@/components/common/SpinnerLoaderBase";

import {
  setUrlImage,
  setImageCanvas,
  setApplyCrop,
  setApplyStyles,
} from "@/redux/imageCropperSlice";
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
  const [isLoaded, setIsLoaded] = useState(false);

  const minAspectRatio = imageCropper?.stencilProps?.minAspectRatio ?? 0;
  const maxAspectRatio = imageCropper?.stencilProps?.maxAspectRatio ?? 0;

  useEffect(() => {
    if (imageCropper.isCrop) {
      //console.log("Descargando estoy a la escucha");
      onCrop();
      dispatch(setApplyCrop(false));
    }

    if (imageCropper.isApplyStyles) {
      applyStylesImageCanva();
      dispatch(setApplyStyles(false));
    }
  });

  const onCrop = () => {
    if (cropperRef.current) {
      setCoordinates(cropperRef.current.getCoordinates());
      //Aqui se puede establecer el nuevo valor de la imagen

      const pngData = cropperRef.current.getCanvas()?.toDataURL("image/png");

      dispatch(setImageCanvas(pngData ?? ""));

      dispatch(setUrlImage(pngData ?? ""));
    }
  };

  const applyStylesImageCanva = () => {
    console.log("Apply Styles");
    const canva = document.createElement("canvas");
    const context = canva.getContext("2d");

    const image = new Image();
    image.src = imageCropper.urlImage;

    console.log("Image", image.width, image.height);

    canva.height = image.height;
    canva.width = image.width;

    context?.fillRect(0, 0, canva.width, canva.height);
    if (context) {
      context.filter = `${imageCropper.toneCropper}(${imageCropper.filterValCropper}${imageCropper.toneTypeCropper})`;

      context.font = "30px Arial";
      context.fillStyle = "blue";
      context.fillText("Hello World", 10, 50);
    }

    context?.drawImage(image, canva.width, canva.height);

    image.onload = () => {
      context?.drawImage(image, 0, 0);

      console.log("Canva rewsd", canva.toDataURL());
      dispatch(setImageCanvas(canva.toDataURL()));
      dispatch(setUrlImage(canva.toDataURL()));
    };

    // const pngData = canva.toDataURL("image/png");

    console.log("image", image.src);

    /*  console.log("Canva rewsd", canva.toDataURL());

    return canva.toDataURL(); */
  };

  const onChange = (cropper: CropperRef) => {
    console.log("oNchabge", cropper.getCoordinates(), cropper.getCanvas());
    setIsLoaded(true);
  };

  const onReady = (cropper: CropperRef) => {
    console.log("Cropper ready", cropper.getCanvas());

    if (imageCropper.urlImage === "") {
      return;
    }
    //Tamaño de la imagen

    console.log("Default Coordinates", cropper.getCanvas()?.width);
  };

  const defaultSize = ({ imageSize, visibleArea }) => {
    return {
      width: (visibleArea || imageSize).width,
      height: (visibleArea || imageSize).height,
    };
  };

  const style: CSSProperties = {
    filter: `${imageCropper.toneCropper}(${imageCropper.filterValCropper}${imageCropper.toneTypeCropper})`,
  };

  return (
    <>
      {!isLoaded && <SpinnerLoaderBase />}

      <Cropper
        ref={cropperRef}
        src={imageCropper?.urlImage}
        onChange={onChange}
        onReady={onReady}
        style={style}
        defaultSize={defaultSize}
        stencilProps={{
          aspectRatio: minAspectRatio / maxAspectRatio,
          grid: true,
        }}
      ></Cropper>
    </>
  );
}
