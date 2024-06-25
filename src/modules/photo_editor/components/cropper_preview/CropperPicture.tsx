import { CSSProperties } from "react";
import { Cropper } from "react-advanced-cropper";

import "react-advanced-cropper/dist/style.css";
import "react-advanced-cropper/dist/themes/corners.css";
import cropperPictureModule from "@/modules/photo_editor/components/cropper_preview/cropperPicture.module.scss";

import useCropperPicture from "@/modules/photo_editor/hooks/useCropperPicture";

import { composeFilterString } from "@/modules/photo_editor/states/cropper/filterSlice";
import useCanvaPicture from "@/modules/photo_editor/hooks/useCanvaPicture";

export default function CropperPicture() {
  const {
    cropperRef,
    filtersCropper,
    imageCropper,
    onChange,
    onReady,
    defaultSize,
    transformCropper,
  } = useCropperPicture();

  const {
    canvasRef,
    textInput,
    isEditingText,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleDoubleClick,
    handleTextChange,
    handleTextSubmit,
  } = useCanvaPicture();

  const minAspectRatio = imageCropper?.stencilProps?.minAspectRatio ?? 0;
  const maxAspectRatio = imageCropper?.stencilProps?.maxAspectRatio ?? 0;

  const style: CSSProperties = {
    filter: composeFilterString(filtersCropper.filters),
  };

  return (
    <div className={cropperPictureModule.cropper_picture}>
      {!imageCropper?.isVisibleCropper && (
        <canvas
          ref={canvasRef}
          id="idCanvasCropper"
          style={style}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onDoubleClick={handleDoubleClick}
        ></canvas>
      )}


      {isEditingText && (
        <div className={cropperPictureModule.cropper_picture__editing_text}>
          <input
            type="text"
            value={textInput}
            onChange={handleTextChange}
            onBlur={handleTextSubmit}
            autoFocus
          />
        </div>
      )}

      {imageCropper?.isVisibleCropper && (
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
      )}
    </div>


  );
}
