import { RootState } from "@/states";
import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";

const CanvaView = () => {
  const imageCropper = useSelector((state: RootState) => state.imageCropper);
  const canvasRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [draggedElementIndex, setDraggedElementIndex] = useState(null);
  const [isEditingText, setIsEditingText] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [elements, setElements] = useState([
    { x: 50, y: 50, width: 0, height: 0, color: "blue", text: "A" },
    { x: 150, y: 50, width: 0, height: 0, color: "red", text: "B" },
    { x: 250, y: 50, width: 0, height: 0, color: "green", text: "C" },
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      return;
    }

    //dibuar imagen 
    drawElements(ctx);

    function drawElements(ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
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
    }

    function getMousePos(canvas, evt) {
      const rect = canvas.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top,
      };
    }

    function isInsideElement(mousePos, element) {
      return (
        mousePos.x > element.x &&
        mousePos.x < element.x + element.width &&
        mousePos.y > element.y &&
        mousePos.y < element.y + element.height
      );
    }

    const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
      const mousePos = getMousePos(canvas, e);
      const elementIndex = elements.findIndex((element) =>
        isInsideElement(mousePos, element)
      );
      if (elementIndex !== -1) {
        setDraggedElementIndex(elementIndex);
        setIsDragging(true);
        setIsEditingText(false);
      }
    };

    const handleMouseMove = (e) => {
      if (isDragging && draggedElementIndex !== null) {
        const mousePos = getMousePos(canvas, e);
        const newElements = [...elements];
        newElements[draggedElementIndex] = {
          ...newElements[draggedElementIndex],
          x: mousePos.x - newElements[draggedElementIndex].width / 2,
          y: mousePos.y - newElements[draggedElementIndex].height / 2,
        };
        setElements(newElements);
        drawElements(ctx);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setDraggedElementIndex(null);
    };

    const handleDoubleClick = (e) => {
      const mousePos = getMousePos(canvas, e);
      const elementIndex = elements.findIndex((element) =>
        isInsideElement(mousePos, element)
      );
      if (elementIndex !== -1) {
        setDraggedElementIndex(elementIndex);
        setTextInput(elements[elementIndex].text);
        setIsEditingText(true);
      }
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("dblclick", handleDoubleClick);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("dblclick", handleDoubleClick);
    };
  }, [isDragging, draggedElementIndex, elements]);

  const handleTextChange = (e) => {
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
      <p>Double click on the element to edit the text</p>
      {!isEditingText && <button onClick={handleDownload}>Download</button>}

      <canvas
        ref={canvasRef}
        width="500"
        height="400"
        style={{ border: "1px solid black" }}
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
