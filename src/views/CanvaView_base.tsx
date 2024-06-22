import React, { useRef, useState,  MouseEvent } from "react";
import ButtonBase from "@/components/common/ButtonBase";
import "@/assets/styles/views/canvaView.scss";

const CanvaView: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [drawing, setDrawing] = useState(false);
  const [color, setColor] = useState("black");
  const [lineWidth, setLineWidth] = useState(5);
  const [activeTab, setActiveTab] = useState("file");

  const startDrawing = (e: MouseEvent<HTMLCanvasElement>) => {
    setDrawing(true);
    draw(e);
  };

  const endDrawing = () => {
    setDrawing(false);
    const context = getContext();
    if (context) context.beginPath();
  };

  const draw = (e: MouseEvent<HTMLCanvasElement>) => {
    if (!drawing) return;
    const context = getContext();
    if (!context) return;

    context.lineWidth = lineWidth;
    context.lineCap = "round";
    context.strokeStyle = color;

    // agregar fuente
    context.font = "30px Arial";
    context.fillStyle = color;
    context.fillText("Hola", 10, 50);
    



    context.lineTo(
      e.clientX - canvasRef.current!.offsetLeft,
      e.clientY - canvasRef.current!.offsetTop
    );


    context.stroke();
    context.beginPath();
    context.moveTo(
      e.clientX - canvasRef.current!.offsetLeft,
      e.clientY - canvasRef.current!.offsetTop
    );
  };

  const getContext = () => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    return canvas.getContext("2d");
  };

  
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
    const context = getContext();
    if (context)
      context.clearRect(
        0,
        0,
        canvasRef.current!.width,
        canvasRef.current!.height
      );
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
          {["file", "edit", "show", "insert", "format"].map((tab) => (
            <li key={tab}>
              <a
                href="#"
                onClick={() => handleTabClick(tab)}
                className={activeTab === tab ? "active" : ""}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="tools-menu">
        <label>
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

      <main>
        <canvas
          id="myCanvas"
          ref={canvasRef}
          width="1000"
          height="600"
          onMouseDown={startDrawing}
          onMouseUp={endDrawing}
          onMouseMove={draw}
        >
          Tu navegador no soporta el elemento canvas.
        </canvas>
      </main>
    </div>
  );
};

export default CanvaView;
