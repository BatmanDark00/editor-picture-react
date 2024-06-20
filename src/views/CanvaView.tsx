import React, { useRef, useState, useEffect, MouseEvent } from "react";
import ButtonBase from "@/components/common/ButtonBase";
import "@/assets/styles/views/canvaView.scss";

const CanvaView: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [drawing, setDrawing] = useState(false);
  const [color, setColor] = useState("black");
  const [lineWidth, setLineWidth] = useState(5);
  const [activeTab, setActiveTab] = useState("file");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const startDrawing = (e: MouseEvent<HTMLCanvasElement>) => {
      setDrawing(true);
      draw(e);
    };

    const endDrawing = () => {
      setDrawing(false);
      context.beginPath();
    };

    const draw = (e: MouseEvent<HTMLCanvasElement>) => {
      if (!drawing) return;

      context.lineWidth = lineWidth;
      context.lineCap = "round";
      context.strokeStyle = color;

      context.lineTo(
        e.clientX - canvas.offsetLeft,
        e.clientY - canvas.offsetTop
      );
      context.stroke();
      context.beginPath();
      context.moveTo(
        e.clientX - canvas.offsetLeft,
        e.clientY - canvas.offsetTop
      );
    };

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mouseup", endDrawing);
    canvas.addEventListener("mousemove", draw);

    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mouseup", endDrawing);
      canvas.removeEventListener("mousemove", draw);
    };
  }, [drawing, color, lineWidth]);

  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "canvas-drawing.png";
    link.click();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const handleChangeLineWidth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLineWidth(Number(e.target.value));
  };

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="canva">
      <nav className="menu">
        <ul>
          <li>
            <a
              href=""
              onClick={() => handleTabClick("file")}
              className={activeTab === "file" ? "active" : ""}
            >
              Archivo
            </a>
          </li>
          <li>
            <a
              href=""
              onClick={() => handleTabClick("edit")}
              className={activeTab === "edit" ? "active" : ""}
            >
              Editar
            </a>
          </li>
          <li>
            <a
              href=""
              onClick={() => handleTabClick("show")}
              className={activeTab === "show" ? "active" : ""}
            >
              Ver
            </a>
          </li>
          <li>
            <a
              href=""
              onClick={() => handleTabClick("insert")}
              className={activeTab === "insert" ? "active" : ""}
            >
              Insertar
            </a>
          </li>
          <li>
            <a
              href=""
              onClick={() => handleTabClick("format")}
              className={activeTab === "format" ? "active" : ""}
            >
              Formatear
            </a>
          </li>
        </ul>
      </nav>

      <div className="tools-menu">
        <label>
          Color:
          <input type="color" value={color} onChange={handleChangeColor} />
        </label>
        <label>
          Grosor:
          <input
            type="range"
            min="1"
            max="50"
            value={lineWidth}
            onChange={handleChangeLineWidth}
          />
        </label>
        <ButtonBase
          size="small"
          className="btn_primary"
          textAlign="center"
          onClick={downloadImage}
        >
          Descargar resultado
        </ButtonBase>
        <ButtonBase
          size="small"
          className="btn_primary"
          textAlign="center"
          onClick={clearCanvas}
        >
          Borrar todo
        </ButtonBase>
      </div>

      <h1>Prueba para dibujar</h1>
      <main>
        <canvas id="myCanvas" ref={canvasRef} width="800" height="600">
          Tu navegador no soporta el elemento canvas.
        </canvas>
      </main>
    </div>
  );
};

export default CanvaView;
