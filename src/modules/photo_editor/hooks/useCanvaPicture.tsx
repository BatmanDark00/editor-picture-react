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
    {
      x: 50,
      y: 50,
      width: 100,
      height: 50,
      color: "blue",
      text: "Test 1",
      rotation: 0,
      colorText: "black",
    },
    {
      x: 150,
      y: 50,
      width: 120,
      height: 60,
      color: "red",
      text: "Test 2",
      rotation: 0,
      colorText: "white",
    },
    {
      x: 250,
      y: 50,
      width: 90,
      height: 45,
      color: "green",
      text: "Test 3",
      rotation: 0,
      colorText: "orange",
    },
  ]);

  const [draggerCornerElement, setDraggerCornerElement] = useState<
    null | number
  >(null);

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
    elements.forEach((element, index) => {
      ctx.font = "20px Arial";
      const textWidth = ctx.measureText(element.text).width;
      const textHeight = 20;

      element.width = Math.max(textWidth + 20, element.width);
      element.height = textHeight + 10;

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

      ctx.fillStyle = element.colorText;
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
    const handleSize = 7;

    // Coordenadas de las esquinas sin rotación
    const corners = [
      { x: element.x, y: element.y }, // superior izquierda
      { x: element.x + element.width, y: element.y }, // superior derecha
      { x: element.x, y: element.y + element.height }, // inferior izquierda
      { x: element.x + element.width, y: element.y + element.height }, // inferior derecha
    ];

    // Aplicar rotación a las esquinas
    const rotatedCorners = corners.map((corner) => {
      // Calcular posición relativa al centro del elemento
      const offsetX = corner.x - (element.x + element.width / 2);
      const offsetY = corner.y - (element.y + element.height / 2);

      // Aplicar rotación al desplazamiento
      const rotatedX =
        offsetX * Math.cos((element.rotation * Math.PI) / 180) -
        offsetY * Math.sin((element.rotation * Math.PI) / 180);
      const rotatedY =
        offsetX * Math.sin((element.rotation * Math.PI) / 180) +
        offsetY * Math.cos((element.rotation * Math.PI) / 180);

      // Ajustar posición global
      return {
        x: element.x + element.width / 2 + rotatedX,
        y: element.y + element.height / 2 + rotatedY,
      };
    });

    // Dibujar las esquinas
    rotatedCorners.forEach((corner, index) => {
      ctx.save();
      ctx.translate(corner.x, corner.y);
      ctx.rotate((element.rotation * Math.PI) / 180);
      ctx.translate(-corner.x, -corner.y);

      ctx.fillStyle = "black";
      ctx.fillRect(
        corner.x - handleSize / 2,
        corner.y - handleSize / 2,
        handleSize,
        handleSize
      );

      ctx.restore();
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

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const mousePos = getMousePosition(e);
    const elementIndex = elements.findIndex((element) =>
      isInsideElement(mousePos, element)
    );
    if (elementIndex !== -1) {
      setIsDragging(true);
      setDraggedElementIndex(elementIndex);

      // Comprobar si se ha hecho clic en una esquina o en el lado izquierdo/derecho
      const element = elements[elementIndex];
      const corners = getCorners(element);

      for (let i = 0; i < corners.length; i++) {
        const corner = corners[i];
        const cornerRotated = rotatePoint(
          corner.x,
          corner.y,
          element.x + element.width / 2,
          element.y + element.height / 2,
          element.rotation
        );

        if (
          mousePos.x > cornerRotated.x - 5 &&
          mousePos.x < cornerRotated.x + 5 &&
          mousePos.y > cornerRotated.y - 5 &&
          mousePos.y < cornerRotated.y + 5
        ) {
          console.log("Clic en la esquina", i);
          setDraggerCornerElement(i);
          return; // Salir para evitar el manejo incorrecto de eventos
        }
      }

      // Si no es una esquina, comprobar si se hizo clic en el lado izquierdo o derecho
      if (
        mousePos.x > element.x &&
        mousePos.x < element.x + element.width &&
        (mousePos.y > element.y && mousePos.y < element.y + element.height)
      ) {
        if (mousePos.x < element.x + 10) {
          // Clic en el lado izquierdo
          console.log("Clic en el lado izquierdo");
          setDraggerCornerElement(0); // Utiliza el índice de la esquina superior izquierda para redimensionar desde el lado izquierdo
        } else if (mousePos.x > element.x + element.width - 10) {
          // Clic en el lado derecho
          console.log("Clic en el lado derecho");
          setDraggerCornerElement(1); // Utiliza el índice de la esquina superior derecha para redimensionar desde el lado derecho
        }
      }
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDragging && draggedElementIndex !== null) {
      const mousePos = getMousePosition(e);
      const newElements = [...elements];
      const element = newElements[draggedElementIndex];

      if (draggerCornerElement !== null) {
        // Redimensionar el elemento basado en la esquina arrastrada o el lado izquierdo/derecho
        const corner = getCorners(element)[draggerCornerElement];
        const cornerRotated = rotatePoint(
          corner.x,
          corner.y,
          element.x + element.width / 2,
          element.y + element.height / 2,
          element.rotation
        );

        if (draggerCornerElement === 0) {
          // Redimensionamiento desde el lado izquierdo
          element.width = Math.abs(
            (element.x + element.width) - mousePos.x
          );
          element.x = mousePos.x;
        } else if (draggerCornerElement === 1) {
          // Redimensionamiento desde el lado derecho
          element.width = Math.abs(mousePos.x - element.x);
        }

        console.log("Redimensionando", element.width);
      } else {
        // Mover el elemento completo si no se está redimensionando
        element.x = mousePos.x - element.width / 2;
        element.y = mousePos.y - element.height / 2;
      }

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
    setDraggerCornerElement(null);
  };

  const handleTextDoubleClick = (
    e: React.MouseEvent<HTMLCanvasElement>
  ) => {
    const mousePos = getMousePosition(e);
    const elementIndex = elements.findIndex((element) =>
      isInsideElement(mousePos, element)
    );
    if (elementIndex !== -1) {
      setIsEditingText(true);
      setTextInput(elements[elementIndex].text);
    }
  };

  const handleTextInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTextInput(e.target.value);
  };

  const handleTextInputBlur = () => {
    const updatedElements = [...elements];
    updatedElements[draggedElementIndex].text = textInput;
    setElements(updatedElements);
    setIsEditingText(false);
  };

  const getCorners = (
    element: { x: number; y: number; width: number; height: number; rotation: number },
  ) => {
    const corners = [
      { x: element.x, y: element.y }, // superior izquierda
      { x: element.x + element.width, y: element.y }, // superior derecha
      { x: element.x, y: element.y + element.height }, // inferior izquierda
      { x: element.x + element.width, y: element.y + element.height }, // inferior derecha
    ];
    return corners;
  };

  return {
    canvasRef,
    canvasRefImage,
    elements,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleTextDoubleClick,
    handleTextInputChange,
    handleTextInputBlur,
    isEditingText,
    textInput,
  };
};

export default useCanvaPicture;

