import { CSSProperties, useState } from "react";
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
  } = useCropperPicture();

  const {
    canvasRef,
    canvasRefImage,
    textInput,
    elements,
    setElements,
    isEditingText,
    setElementSelect,
    isEditingElement,
    elementSelect,
    selectElementIndex,
    /* setSelectElementIndex, */
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleSelectElement,
    handleDoubleClick,
    handleTextChange,
    handleTextSubmit,
    drawElements,
  } = useCanvaPicture();

  const [resizeHandle, setResizeHandle] = useState<string>("");

  const minAspectRatio = imageCropper?.stencilProps?.minAspectRatio ?? 0;
  const maxAspectRatio = imageCropper?.stencilProps?.maxAspectRatio ?? 0;

  const style: CSSProperties = {
    filter: composeFilterString(filtersCropper.filters),
  };

  const styleResize: CSSProperties = {
    width: `${elementSelect?.width}px`,
    height: `${elementSelect?.height}px`,
    transform: `translate(${elementSelect?.x}px, ${elementSelect?.y}px)`,
  };

  const handleResizeMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    const handle = e.currentTarget.dataset.handle;

    if (handle) {
      setResizeHandle(handle);

      console.log("handle", handle);
      document.addEventListener("mousemove", handleResize);
      document.addEventListener("mouseup", handleResizeEnd);
    }
  };

  const handleResize = (e: MouseEvent) => {
    if (resizeHandle ) {
      if (!elementSelect) {
        return
      }
      console.log("handleResize, llegando");

      const canvas = canvasRef.current as HTMLCanvasElement;
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;

      let newWidth = elementSelect.width;
      let newHeight = elementSelect.height;
      let newX = elementSelect.x;
      let newY = elementSelect.y;

      const mouseX = (e.clientX - rect.left) * scaleX;
      const mouseY = (e.clientY - rect.top) * scaleY;

      console.log("mouseX", mouseX);
      console.log("mouseY", mouseY);

      switch (resizeHandle) {
        case "top-left":
          newWidth = elementSelect.width + elementSelect.x - mouseX;
          newHeight = elementSelect.height + elementSelect.y - mouseY;
          newX = mouseX;
          newY = mouseY;
          break;
        case "top-right":
          newWidth = mouseX - elementSelect.x;
          newHeight = elementSelect.height + elementSelect.y - mouseY;
          newY = mouseY;
          break;
        case "bottom-left":
          newWidth = elementSelect.width + elementSelect.x - mouseX;
          newHeight = mouseY - elementSelect.y;
          newX = mouseX;
          break;
        case "bottom-right":
          newWidth = mouseX - elementSelect.x;
          newHeight = mouseY - elementSelect.y;
          break;

        default:
          break;
      }

      // Limit minimum size
      newWidth = Math.max(newWidth, 10);
      newHeight = Math.max(newHeight, 10);

      console.log("llegue a cambiar texto", newWidth);

      if (selectElementIndex !== null) {
        console.log("selectElementIndex", selectElementIndex);
        const newElements = [...elements];
        newElements[selectElementIndex].x = newX;
        newElements[selectElementIndex].y = newY;
        newElements[selectElementIndex].width = newWidth;
        newElements[selectElementIndex].height = newHeight;

        setElements(newElements);
        setElementSelect(newElements[selectElementIndex]);

        const canvas = canvasRef.current as HTMLCanvasElement;
        const context = canvas.getContext("2d");

        if (context) {
          drawElements(context);
        }
      }
    }
  };

  const handleResizeEnd = () => {
    setResizeHandle("");

    console.log("handleResizeEnd");
    document.removeEventListener("mousemove", handleResize);
    document.removeEventListener("mouseup", handleResizeEnd);
  };

  return (
    <div className={cropperPictureModule.cropper_picture}>
      {!imageCropper?.isVisibleCropper && (
        <>
          <canvas
            ref={canvasRefImage}
            id="idCanvasImage"
            style={style}
          ></canvas>
          <canvas
            ref={canvasRef}
            id="idCanvasForm"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onClick={handleSelectElement}
            onDoubleClick={handleDoubleClick}
          ></canvas>
        </>
      )}

      {isEditingElement && elementSelect && (
        <div
          className={cropperPictureModule.cropper_picture__resize}
          style={styleResize}
        >
          <div
            className={cropperPictureModule.cropper_picture__resize__rotate}
          ></div>
          <div
            className={cropperPictureModule.cropper_picture__resize__top_left}
            data-handle="top-left"
            onMouseDown={handleResizeMouseDown}
          ></div>
          <div
            className={cropperPictureModule.cropper_picture__resize__top_right}
            data-handle="top-right"
            onMouseDown={handleResizeMouseDown}
          ></div>
          <div
            className={
              cropperPictureModule.cropper_picture__resize__bottom_left
            }
            data-handle="bottom-left"
            onMouseDown={handleResizeMouseDown}
          ></div>
          <div
            className={
              cropperPictureModule.cropper_picture__resize__bottom_right
            }
            data-handle="bottom-right"
            onMouseDown={handleResizeMouseDown}
          ></div>
        </div>
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
