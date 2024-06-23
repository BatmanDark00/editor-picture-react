import { RootState } from "@/states";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const useCanvaPicture = () => {
  const MAX_CANVAS_DIMENSION_WIDTH = 1400;
  const MAX_CANVAS_DIMENSION_HEIGHT = 700;

  const imageCropper = useSelector((state: RootState) => state.imageCropper);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
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

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const context = canvas?.getContext("2d");

    if (context) {
      const img = new Image();
      img.src = imageCropper?.imageCropper ?? "";

      img.onload = () => {
        const scale = Math.min(
          MAX_CANVAS_DIMENSION_WIDTH / img.width,
          MAX_CANVAS_DIMENSION_HEIGHT / img.height,
          1
        );

        canvas.width = img.width * scale;
        canvas.height = img.height * scale;

        context.drawImage(img, 0, 0, canvas.width, canvas.height);
        drawElements(context);
      };
    }
  });

  const drawElements = (ctx: CanvasRenderingContext2D) => {
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
      drawElements(canvas.getContext("2d")!);
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
      console.log("Element Index", elementIndex);
      setDraggedElementIndex(elementIndex);
      setTextInput(elements[elementIndex].text);
      setIsEditingText(true);
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.target.value);
  };

  const handleTextSubmit = () => {
    if (draggedElementIndex !== null) {
      const newElements = [...elements];
      newElements[draggedElementIndex] = {
        ...newElements[draggedElementIndex],
        text: textInput,
      };
      setElements(newElements);
      setIsEditingText(false);
      setDraggedElementIndex(null);
    }
  };

  return {
    canvasRef,
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
