import { RootState } from "@/states";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setImageForDownload,
  setIsDownloadImageCropper,
} from "@/modules/photo_editor/states/cropper/imageCropperSlice";

const useCanvaPicture = () => {
  const MAX_CANVAS_DIMENSION_WIDTH = 1400;
  const MAX_CANVAS_DIMENSION_HEIGHT = 700;

  const imageCropper = useSelector((state: RootState) => state.imageCropper);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasRefImage = useRef<HTMLCanvasElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isEditingText, setIsEditingText] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [draggedElementIndex, setDraggedElementIndex] = useState<null | number>(
    null
  );
  const [elements, setElements] = useState([
    { x: 50, y: 50, width: 0, height: 0, color: "blue", text: "Test 1" },
    { x: 150, y: 50, width: 0, height: 0, color: "red", text: "Test 2" },
    { x: 250, y: 50, width: 0, height: 0, color: "green", text: "Test 3" },
  ]);

  const dispatch = useDispatch();

  useEffect(() => {
    const canvasImage = canvasRefImage.current as HTMLCanvasElement;
    const contextImage = canvasImage?.getContext("2d");

    const canvas = canvasRef.current as HTMLCanvasElement;
    const context = canvas?.getContext("2d");

    if (contextImage) {
      const img = new Image();
      img.src = imageCropper?.imageCropper ?? "";

      img.onload = () => {
        const scale = Math.min(
          MAX_CANVAS_DIMENSION_WIDTH / img.width,
          MAX_CANVAS_DIMENSION_HEIGHT / img.height,
          1
        );

        const width = img.width * scale;
        const height = img.height * scale;

        canvas.width = width;
        canvas.height = height;

        canvasImage.width = width;
        canvasImage.height = height;

        contextImage.drawImage(img, 0, 0, width, height);
        if (context) {
          drawElements(context);
        }
      };
    }
  }, [imageCropper.imageCropper]);

  useEffect(() => {
    if (imageCropper.isDownloadImageCropper) {
      const canvasImage = canvasRefImage.current as HTMLCanvasElement;
      const contextImage = canvasImage.getContext("2d");

      const canvas = canvasRef.current as HTMLCanvasElement;
      const context = canvas?.getContext("2d");

      if (contextImage && context) {
        // Crear un nuevo canvas para combinar ambos canvas
        const combinedCanvas = document.createElement("canvas");
        combinedCanvas.width = canvasImage.width;
        combinedCanvas.height = canvasImage.height;
        const combinedContext = combinedCanvas.getContext("2d");

        if (combinedContext) {
          // Dibujar la imagen del canvasImage en el canvas combinado
          combinedContext.drawImage(canvasImage, 0, 0);
          // Dibujar la imagen del canvas en el canvas combinado
          combinedContext.drawImage(canvas, 0, 0);

          // Descargar la imagen combinada
          dispatch(setImageForDownload(combinedCanvas.toDataURL("image/png")));
          dispatch(setIsDownloadImageCropper(false));

        
        }
      }
    }
  }, [imageCropper.isDownloadImageCropper, dispatch]);

  const drawElements = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    elements.forEach((element) => {
      ctx.font = "20px Arial";
      const textWidth = ctx.measureText(element.text).width;
      const textHeight = 20;

      element.width = textWidth + 20;
      element.height = textHeight + 10;

      ctx.fillStyle = element.color;
      ctx.fillRect(element.x, element.y, element.width, element.height);
      ctx.fillStyle = "black";
      ctx.fillText(element.text, element.x + 10, element.y + textHeight);
    });
  };

  const getMousePosition = (evt: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      x: (evt.clientX - rect.left) * scaleX,
      y: (evt.clientY - rect.top) * scaleY,
    };
  };

  const isInsideElement = (
    mousePos: { x: number; y: number },
    element: { x: number; y: number; width: number; height: number }
  ) => {
    return (
      mousePos.x > element.x &&
      mousePos.x < element.x + element.width &&
      mousePos.y > element.y &&
      mousePos.y < element.y + element.height
    );
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const mousePos = getMousePosition(e);
    const elementIndex = elements.findIndex((element) =>
      isInsideElement(mousePos, element)
    );
    if (elementIndex !== -1) {
      setIsDragging(true);
      setDraggedElementIndex(elementIndex);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDragging && draggedElementIndex !== null) {
      const mousePos = getMousePosition(e);
      const newElements = [...elements];
      const element = newElements[draggedElementIndex];
      element.x = mousePos.x - element.width / 2;
      element.y = mousePos.y - element.height / 2;
      setElements(newElements);

      const canvas = canvasRef.current as HTMLCanvasElement;
      const context = canvas.getContext("2d");
      if (context) {
        drawElements(context);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDraggedElementIndex(null);
  };

  const handleDoubleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const mousePos = getMousePosition(e);
    const elementIndex = elements.findIndex((element) =>
      isInsideElement(mousePos, element)
    );
    if (elementIndex !== -1) {
      setIsEditingText(true);
      setDraggedElementIndex(elementIndex);
      setTextInput(elements[elementIndex].text);
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.target.value);
  };

  const handleTextSubmit = () => {
    if (draggedElementIndex !== null) {
      const newElements = [...elements];
      newElements[draggedElementIndex].text = textInput;
      setElements(newElements);

      const canvas = canvasRef.current as HTMLCanvasElement;
      const context = canvas.getContext("2d");
      if (context) {
        drawElements(context);
      }

      setIsEditingText(false);
      setDraggedElementIndex(null);
      setTextInput("");
    }
  };

  return {
    canvasRef,
    canvasRefImage,
    textInput,
    isEditingText,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleDoubleClick,
    handleTextChange,
    handleTextSubmit,
  };
};

export default useCanvaPicture;
