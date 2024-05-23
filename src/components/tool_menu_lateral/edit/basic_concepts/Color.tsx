import React from "react";
import "@/assets/styles/components/tool_menu_lateral/edit/basic_concepts/color.scss"

export default function Color() {
  return (
    <div className="menu-color">
      <p>Tono</p>
      <input type="range" className="slider1"/>

      <p>Saturacion</p>
      <input type="range" className="slider2"/>
      
      <p>Temperatura</p>
      <input type="range" className="slider3"/>
    </div>
  );
}
