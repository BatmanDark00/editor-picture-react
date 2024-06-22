import React, { useEffect } from "react";
import "@/assets/styles/views/canvaView.scss";

export default function CanvaView() {
  useEffect(() => {
    console.log("CanvaView");

    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const content = canvas.getContext("2d");

    if (content) {
      content.fillStyle = "red";
      content.fillRect(20, 20, 300, 100); 

      content.strokeStyle =  "rgba(255, 165, 0, 1)";
      content.strokeRect(340, 20, 300, 100);      
      content.clearRect(30, 30, 280, 80);
      

      // create a linear gradient
      const gradient = content.createLinearGradient(0, 0, 300, 30);
      gradient.addColorStop(0.5, "#00AAFF");
      gradient.addColorStop(1, "#000000");
      content.fillStyle = gradient;

      content.fillRect(20, 150, 300, 100);

      // create a radial gradient
      const radialGradient = content.createRadialGradient(500, 200, 10, 500, 200, 100);
      radialGradient.addColorStop(0, "#00AAFF");
      radialGradient.addColorStop(1, "#000000");
      radialGradient.addColorStop(0.5, "#FF0000");
      content.fillStyle = radialGradient;
      content.fillRect(400, 150, 200, 100);
 
      // draw a line
    /*   content.beginPath();
      content.moveTo(700, 20);
      content.lineTo(700, 120);
      content.lineTo(800, 120);
      
    
      content.lineWidth = 5;
      content.strokeStyle = "green";
      content.clip();

      content.beginPath();
      for (let i = 0; i < 10; i++) {
        content.moveTo(700, 20);
        content.lineTo(700 + i * 10, 120);
      }
      content.closePath();
      content.stroke(); */
      

      //content.stroke();

      // draw a circle
   /*    content.beginPath();
      const radians = Math.PI / 180 * 45;
      content.arc(20, 300, 50, 0, radians);
      content.closePath();
      content.stroke(); */

      // draw text
      content.font = "30px Arial";
      content.fillStyle = "red";
     // content.textAlign = "center";
      content.fillText("Hello World", 100, 300);
      content.strokeText("Hello World", 100, 350);

      const size = content.measureText("Hello World");
      content.strokeRect(100,280, size.width, 30);

      content.shadowColor = "indigo";
      content.shadowOffsetX = 4;
      content.shadowOffsetY = 4;
      content.shadowBlur = 4;

      content.font = "bold 50px verdana, sans-serif";
      content.fillText("Hello World", 100, 400);

      //content.translate(100, 400);
      content.rotate(45 * Math.PI / 180);
      content.translate(0,100);



      
    }


  }, []);

  return (
    <div>
      <h1>Canvas</h1>
      <section id="boxCanvas">
        <canvas id="canvas" width="900" height="600"></canvas>
      </section>
    </div>
  );
}
