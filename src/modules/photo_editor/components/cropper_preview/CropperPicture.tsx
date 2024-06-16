import { CSSProperties } from "react";
import { Cropper } from "react-advanced-cropper";

import "react-advanced-cropper/dist/style.css";
import "react-advanced-cropper/dist/themes/corners.css";

import SpinnerLoaderBase from "@/components/common/SpinnerLoaderBase";
import useCropperPicture from "@/modules/photo_editor/hooks/useCropperPicture";

import { composeFilterString } from "@/modules/photo_editor/states/cropper/filterSlice";

export default function CropperPicture() {
  const {
    cropperRef,
    filtersCropper,
    imageCropper,   
    isLoaded,
    onChange,
    onReady,
    defaultSize,
  } = useCropperPicture();

  const minAspectRatio = imageCropper?.stencilProps?.minAspectRatio ?? 0;
  const maxAspectRatio = imageCropper?.stencilProps?.maxAspectRatio ?? 0;

  const style: CSSProperties = {
    //filter: `${imageCropper.toneCropper}(${imageCropper.filterValCropper}${imageCropper.toneTypeCropper})`,
    filter: composeFilterString(filtersCropper.filters),
  };

  return (
    <>
      {!isLoaded && <SpinnerLoaderBase />}

    

      <Cropper
        ref={cropperRef}
        src={imageCropper?.imageCropper}
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
