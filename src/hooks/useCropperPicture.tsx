import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CropperRef, Coordinates } from "react-advanced-cropper";
import { RootState } from "@/redux";
import {
  setImageCropper,
  setApplyCrop,
  setApplyStyles,
} from "@/redux/imageCropperSlice";

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

    console.log("Image", image.width, image.height);

    canva.height = image.height;
    canva.width = image.width;

    context?.fillRect(0, 0, canva.width, canva.height);
    if (context) {
      context.filter = `${imageCropper.toneCropper}(${imageCropper.filterValCropper}${imageCropper.toneTypeCropper})`;
    }

    context?.drawImage(image, canva.width, canva.height);

    image.onload = () => {
      context?.drawImage(image, 0, 0);
      dispatch(setImageCropper(canva.toDataURL()));
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
    defaultSize
  }
};

export default useCropperPicture;
