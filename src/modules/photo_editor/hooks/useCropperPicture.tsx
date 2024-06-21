import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CropperRef, Coordinates } from "react-advanced-cropper";
import { RootState } from "@/states";
import {
  setImageCropper,
  setApplyCrop,
  setApplyStyles,
 } from "@/modules/photo_editor/states/cropper/imageCropperSlice";

import { setFilters } from "@/modules/photo_editor/states/cropper/filterSlice";
import { composeFilterString } from "@/modules/photo_editor/states/cropper/filterSlice";

const useCropperPicture = () => {
  const cropperRef = useRef<CropperRef>(null);
  const filtersCropper = useSelector((state: RootState) => state.filter);
  const imageCropper = useSelector((state: RootState) => state.imageCropper);
  const transformCropper = useSelector((state: RootState) => state.transform);
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

      console.log("Apply Styles", filtersCropper.filters);

      //dispatch(setFilters(imageCropper.filters));
    }
  });

  useEffect(() => {
    if (imageCropper.rotate || transformCropper.flip) {
      console.log("🚀 ~ useEffect ~ imageCropper:", imageCropper.rotate)
      dispatch(setApplyStyles(false))

    }
  }, [dispatch, imageCropper.rotate, transformCropper.flip])

useEffect(() => {
  console.log("aplicando transformacion", transformCropper);
  if (cropperRef.current) {
    const cropper = cropperRef.current;
  
   if (cropper.transformImage) {
   cropper.transformImage({
      flip: {
        horizontal: transformCropper.flip?.horizontal,
        vertical: transformCropper.flip?.vertical,
      }
    }) 
  } 

  console.log("x or y", transformCropper.flip);
  }
  }, [transformCropper]);

  useEffect(() => {
    if (cropperRef.current) {
      cropperRef.current.rotateImage(90)
    }

    console.log("rotando", imageCropper.rotate);
  }, [imageCropper.rotate])


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
        context.filter = composeFilterString(filtersCropper.filters);
        
        // Dibujar la imagen con los filtros aplicados
        context.drawImage(image, 0, 0, canva.width, canva.height);

        // Obtener la nueva imagen procesada
        const newImage = canva.toDataURL();

        
        // Despachar la acción para actualizar la imagen
        dispatch(setImageCropper(newImage));

        //filtros
        dispatch(
          setFilters({
            hueRotate: 0,
            saturate: 0,
            sepia: 0,
          })
        );
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
    filtersCropper,
    imageCropper,
    coordinates,
    isLoaded,
    onChange,
    onReady,
    defaultSize,
    transformCropper,
  };
};

export default useCropperPicture;
