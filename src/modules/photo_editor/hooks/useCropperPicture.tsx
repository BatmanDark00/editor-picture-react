import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CropperRef, Coordinates } from "react-advanced-cropper";
import { RootState } from "@/states";
import {
  setImageCropper,
  setApplyCrop,
  setApplyStyles,
  setFilters,
} from "@/modules/photo_editor/states/cropper/imageCropperSlice";

import { composeFilterString } from "@/modules/photo_editor/states/cropper/imageCropperSlice";

const useCropperPicture = () => {
  const cropperRef = useRef<CropperRef>(null);
  const imageCropper = useSelector((state: RootState) => state.imageCropper);
  const dispatch = useDispatch();

  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (imageCropper.isCrop) {
      onCrop();
      dispatch(setApplyCrop(false));
    }
  });

  useEffect(() => {
    if (imageCropper.isApplyStyles) {
      applyStylesImageCanva();
      dispatch(setApplyStyles(false));

      console.log("Apply Styles", imageCropper.filters);

      //dispatch(setFilters(imageCropper.filters));
    }
  });

  const onCrop = () => {
    if (cropperRef.current) {
      setCoordinates(cropperRef.current.getCoordinates());
      const pngData = cropperRef.current.getCanvas()?.toDataURL("image/png");

      dispatch(setImageCropper(pngData ?? ""));
    }
  };

  const applyStylesImageCanva = () => {
    const canva = document.createElement("canvas");
    const context = canva.getContext("2d");
  
    const image = new Image();
    image.src = imageCropper.imageCropper;
  
    image.onload = () => {
      console.log("Image", image.width, image.height);
  
      canva.width = image.width;
      canva.height = image.height;
  
      // Aplicar filtros
      if (context) {
        context.filter = composeFilterString(imageCropper.filters);
  
        // Dibujar la imagen con los filtros aplicados
        context.drawImage(image, 0, 0, canva.width, canva.height);
  
        // Obtener la nueva imagen procesada
        const newImage = canva.toDataURL();
  
        // Despachar la acción para actualizar la imagen
        dispatch(setImageCropper(newImage));
      }
    };
  };
  
  const onChange = (cropper: CropperRef) => {
    console.log("oNchabge", cropper.getCoordinates(), cropper.getCanvas());
    setIsLoaded(true);
  };

  const onReady = (cropper: CropperRef) => {
    console.log("Cropper ready", cropper.getCanvas());

    if (imageCropper.imageCropper === "") {
      return;
    }

    console.log("Default Coordinates", cropper.getCanvas()?.width);
  };

  const defaultSize = ({ imageSize, visibleArea }) => {
    return {
      width: (visibleArea || imageSize).width,
      height: (visibleArea || imageSize).height,
    };
  };

  return {
    cropperRef,
    imageCropper,
    coordinates,
    isLoaded,
    onChange,
    onReady,
    defaultSize,
  };
};

export default useCropperPicture;
