import { RootState } from "@/states";
import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";

const CanvaView = () => {
  const imageCropper = useSelector((state: RootState) => state.imageCropper);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [draggedElementIndex, setDraggedElementIndex] = useState<number | null>(
    null
  );
  const [isEditingText, setIsEditingText] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [elements, setElements] = useState([
    {
      x: 50,
      y: 50,
      width: 0,
      height: 0,
      color: "blue",
      text: "A",
      rotation: 100,
    },
    {
      x: 150,
      y: 50,
      width: 0,
      height: 0,
      color: "red",
      text: "B",
      rotation: 100,
    },
    {
      x: 250,
      y: 50,
      width: 0,
      height: 0,
      color: "green",
      text: "C",
      rotation: 0,
    },
  ]);
  const [selectedHandle, setSelectedHandle] = useState<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const context = canvas?.getContext("2d");

    if (!context) {
      return;
    }

    drawElements(context);
  });

  const drawElements = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    elements.forEach((element) => {
      ctx.font = "20px Arial";
      const textWidth = ctx.measureText(element.text).width;
      const textHeight = 20;

      element.width = Math.max(element.width, textWidth + 20);
      element.height = Math.max(element.height, textHeight + 10);

      ctx.save();
      ctx.translate(
        element.x + element.width / 2,
        element.y + element.height / 2
      );
      ctx.rotate((element.rotation * Math.PI) / 180);
      ctx.translate(
        -element.x - element.width / 2,
        -element.y - element.height / 2
      );

      ctx.fillStyle = element.color;
      ctx.fillRect(element.x, element.y, element.width, element.height);
      ctx.fillStyle = "black";
      ctx.fillText(element.text, element.x + 10, element.y + textHeight);

      ctx.restore();

      drawHandles(ctx, element);
    });
  };

  const drawHandles = (
    ctx: CanvasRenderingContext2D,
    element: {
      x: number;
      y: number;
      width: number;
      height: number;
      rotation: number;
    }
  ) => {
    const handleSize = 10;
    const corners = [
      { x: element.x + 5, y: element.y +5 },
      { x: element.x + -5 + element.width, y: element.y + 5 },
      { x: element.x + 5, y: (element.y + element.height) - 5},
      { x: (element.x + element.width) - 5, y:  (element.y + element.height) -5 },
    ];

    corners.forEach((corner) => {
      ctx.save();
      ctx.translate(
        element.x + element.width / 2,
        element.y + element.height / 2
      );
      ctx.rotate((element.rotation * Math.PI) / 180);
      ctx.translate(
        -element.x - element.width / 2,
        -element.y - element.height / 2
      );

  

      ctx.fillStyle = "orange";
      ctx.fillRect(
        corner.x - handleSize / 2,
        corner.y - handleSize / 2,
        handleSize,
        handleSize
      );

      ctx.restore();

  
    });
  };

  const getMousePos = (evt: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top,
    };
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const mousePos = getMousePos(e);
    const elementIndex = elements.findIndex((element) =>
      isInsideElement(mousePos, element)
    );
    if (elementIndex !== -1) {
      setDraggedElementIndex(elementIndex);
      setIsDragging(true);
      setIsEditingText(false);
    }
    const handleIndex = elements.findIndex((element) =>
      isInsideHandle(mousePos, element)
    );
    if (handleIndex !== -1) {
      setSelectedHandle(handleIndex);
    }
  };

  const isInsideElement = (
    mousePos: { x: number; y: number },
    element: {
      x: number;
      y: number;
      width: number;
      height: number;
      rotation: number;
    }
  ) => {
    const { x, y } = rotatePoint(
      mousePos.x,
      mousePos.y,
      element.x + element.width / 2,
      element.y + element.height / 2,
      -element.rotation
    );
    return (
      x > element.x &&
      x < element.x + element.width &&
      y > element.y &&
      y < element.y + element.height
    );
  };

  const rotatePoint = (
    x: number,
    y: number,
    cx: number,
    cy: number,
    angle: number
  ) => {
    const radians = (Math.PI / 180) * angle,
      cos = Math.cos(radians),
      sin = Math.sin(radians),
      nx = cos * (x - cx) + sin * (y - cy) + cx,
      ny = cos * (y - cy) - sin * (x - cx) + cy;
    return { x: nx, y: ny };
  };

  const isInsideHandle = (
    mousePos: { x: number; y: number },
    element: {
      x: number;
      y: number;
      width: number;
      height: number;
      rotation: number;
    }
  ) => {
    const handleSize = 10;
    const corners = [
      { x: element.x, y: element.y },
      { x: element.x + element.width, y: element.y },
      { x: element.x, y: element.y + element.height },
      { x: element.x + element.width, y: element.y + element.height },
    ];

    // TOMAR EN CUENTA LA ROTACION
    

    return corners.some(
      (corner, index) =>
        mousePos.x >= corner.x - handleSize / 2 &&
        mousePos.x <= corner.x + handleSize / 2 &&
        mousePos.y >= corner.y - handleSize / 2 &&
        mousePos.y <= corner.y + handleSize / 2 &&
        setSelectedHandle(index)
    );
  };

  function handleMouseMove(e: React.MouseEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    const mousePos = getMousePos(e);
    if (selectedHandle !== null && draggedElementIndex !== null) {
      const newElements = [...elements];
      const element = newElements[draggedElementIndex];
      // const handleSize = 10;
      const corner = [
        { x: element.x, y: element.y },
        { x: element.x + element.width, y: element.y },
        { x: element.x, y: element.y + element.height },
        { x: element.x + element.width, y: element.y + element.height },
      ][selectedHandle];
      const dx = mousePos.x - corner.x;
      const dy = mousePos.y - corner.y;

      if (selectedHandle === 0) {
        element.x += dx;
        element.y += dy;
        element.width -= dx;
        element.height -= dy;
      } else if (selectedHandle === 1) {
        element.y += dy;
        element.width += dx;
        element.height -= dy;
      } else if (selectedHandle === 2) {
        element.x += dx;
        element.width -= dx;
        element.height += dy;
      } else if (selectedHandle === 3) {
        element.width += dx;
        element.height += dy;
      }

      setElements(newElements);

      if (ctx) drawElements(ctx);
    } else if (isDragging && draggedElementIndex !== null) {
      const newElements = [...elements];
      newElements[draggedElementIndex] = {
        ...newElements[draggedElementIndex],
        x: mousePos.x - newElements[draggedElementIndex].width / 2,
        y: mousePos.y - newElements[draggedElementIndex].height / 2,
      };
      setElements(newElements);
      if (ctx) drawElements(ctx);
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false);
    setDraggedElementIndex(null);
    setSelectedHandle(null);
  };

  const handleDoubleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const mousePos = getMousePos(e);
    const elementIndex = elements.findIndex((element) =>
      isInsideElement(mousePos, element)
    );
    if (elementIndex !== -1) {
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

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "canvas.png";
    link.click();
  };

  return (
    <>
      <p>Double click on the element to edit the text xd</p>
      {!isEditingText && <button onClick={handleDownload}>Download</button>}

      <canvas
        ref={canvasRef}
        width="800"
        height="600"
        style={{ border: "1px solid black" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onDoubleClick={handleDoubleClick}
      />
      {isEditingText && (
        <div>
          <input
            type="text"
            value={textInput}
            onChange={handleTextChange}
            onBlur={handleTextSubmit}
            autoFocus
          />
        </div>
      )}
    </>
  );
};

export default CanvaView;
