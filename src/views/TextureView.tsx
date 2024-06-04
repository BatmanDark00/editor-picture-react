import React from "react";
import "@/assets/styles/views/texturesView.scss";

export default function TextureView() {
  return (
    <div className="textures-view">
      <h1> Texturas imagen </h1>
      <section>
        <figure className="image-color-blend">
          <img
            src="https://images.unsplash.com/photo-1717144618589-720502c350f9?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="imagen"
          />

          <figcaption>Imagen 1: Color blend</figcaption>
        </figure>

        <figure className="image-play-hue">
          <img
            src="https://images.unsplash.com/photo-1717496376319-ee3d354ac2d8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="imagen"
          />
          <figcaption>Imagen 2: Jugar con el tono</figcaption>
        </figure>

        <figure className="image-texture">
          <img
            src="https://images.unsplash.com/photo-1714116166319-faf1713557ab?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="imagen"
          />
          <figcaption>Imagen 3: Texture</figcaption>
        </figure>

        <div className="bokehs">
            dss

        </div>


      </section>
    </div>
  );
}
