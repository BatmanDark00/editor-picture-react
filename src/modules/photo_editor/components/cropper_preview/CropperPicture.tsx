import { CSSProperties, useEffect, useRef, useState } from "react";
import { Cropper } from "react-advanced-cropper";

import "react-advanced-cropper/dist/style.css";
import "react-advanced-cropper/dist/themes/corners.css";
import cropperPictureModule from "@/modules/photo_editor/components/cropper_preview/cropperPicture.module.scss";

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
    transformCropper,
  } = useCropperPicture();

  const minAspectRatio = imageCropper?.stencilProps?.minAspectRatio ?? 0;
  const maxAspectRatio = imageCropper?.stencilProps?.maxAspectRatio ?? 0;

  const canvasRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [draggedElementIndex, setDraggedElementIndex] = useState(null);
  const [elements, setElements] = useState([
    { x: 50, y: 50, width: 0, height: 0, color: "blue", text: "Test 1" },
    { x: 150, y: 50, width: 0, height: 0, color: "red", text: "Test 2" },
    { x: 250, y: 50, width: 0, height: 0, color: "green", text: "Test 3" },
  ]);

  const style: CSSProperties = {
    //filter: `${imageCropper.toneCropper}(${imageCropper.filterValCropper}${imageCropper.toneTypeCropper})`,
    filter: composeFilterString(filtersCropper.filters),
  };

  const MAX_CANVAS_DIMENSION_WIDTH = 1400; 
  const MAX_CANVAS_DIMENSION_HEIGHT = 700;

  useEffect(() => {
    const canvas = document.getElementById(
      "idCanvasCropper"
    ) as HTMLCanvasElement;
    const context = canvas?.getContext("2d");

    if (context) {
      const img = new Image();
      img.src = imageCropper?.imageCropper ?? "";

      img.onload = () => {
        drawElements(context);

        const scale = Math.min(MAX_CANVAS_DIMENSION_WIDTH / img.width, MAX_CANVAS_DIMENSION_HEIGHT / img.height, 1);

        console.log("Image", img.width, img.height);
        canvas.width = img.width * scale;
        canvas.height = img.height * scale; 


        /* canvas.width = 900;
        canvas.height = 500; */

        // add text to canvas
        context.font = "30px Arial";
        context.fillStyle = "white";
        context.fillText("Hello World eest", 10, 50);

        context.drawImage(img, 0, 0, canvas.width, canvas.height);

        drawElements(context);
      };
    }
  }, [imageCropper?.imageCropper, elements]);

  const drawElements = (ctx: CanvasRenderingContext2D) => {


   // const canvas = canvasRef.current! as HTMLCanvasElement;
  //   ctx.clearRect(0, 0, canvas?.width, canvas.height);
    elements.forEach((element) => {
      // Measure text width and height
      ctx.font = "20px Arial";
      const textWidth = ctx.measureText(element.text).width;
      const textHeight = 20; // Font size

      // Adjust element size based on text size
      element.width = textWidth + 20; // Add padding for aesthetics
      element.height = textHeight + 10;

      // Draw rectangle and text
      ctx.fillStyle = element.color;
      ctx.fillRect(element.x, element.y, element.width, element.height);
      ctx.fillStyle = "black";
      ctx.fillText(element.text, element.x + 10, element.y + textHeight);
    });
  };

  const getMousePosition = (evt: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current! as HTMLCanvasElement;
    const rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top,
    };
  };

  const isInsideElement = (
    mousePos: { x: number; y: number },
    element: { x: number; y: number; width: number; height: number }
  ) => {
    console.log("isInsideElement");
    return (
      mousePos.x > element.x &&
      mousePos.x < element.x + element.width &&
      mousePos.y > element.y &&
      mousePos.y < element.y + element.height
    );
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    console.log("handleMouseDown");
    const mousePos = getMousePosition(e);
    const elementIndex = elements.findIndex((element) =>
      isInsideElement(mousePos, element)
    );
    if (elementIndex !== -1) {
      console.log("elementIndex", elementIndex);
      setIsDragging(true);
      setDraggedElementIndex(elementIndex);
    
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    console.log("handleMouseMove");
    if (isDragging && draggedElementIndex !== null) {
      const mousePos = getMousePosition(e);
      const newElements = [...elements];
      const element = newElements[draggedElementIndex];
      element.x = mousePos.x - element.width / 2;
      element.y = mousePos.y - element.height / 2;
      setElements(newElements);

      const canvas = canvasRef.current! as HTMLCanvasElement;
      drawElements(canvas.getContext("2d")!);
     
    } 
  };

  const handleMouseUp = () => { 
    console.log("handleMouseUp");
    setIsDragging(false);
    setDraggedElementIndex(null);
  }

  

  return (
    <div className={cropperPictureModule.cropper_picture}>
      {/*  {!isLoaded && <SpinnerLoaderBase />} */}

      {/* {!imageCropper?.isVisibleCropper && ( */}
      <canvas
        ref={canvasRef}
        id="idCanvasCropper"
       
        style={style}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      ></canvas>
      {/* )} */}

      {/*    {imageCropper?.isVisibleCropper && (
        <Cropper
          ref={cropperRef}
          src={imageCropper?.imageCropper}
          onChange={onChange}
          onReady={onReady}
          defaultTransforms={transformCropper}
          style={style}
          defaultSize={defaultSize}
          stencilProps={{
            aspectRatio: minAspectRatio / maxAspectRatio,
            grid: true,
          }}
        ></Cropper>
      )} */}
    </div>
  );
}
