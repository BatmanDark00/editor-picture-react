import React, { useEffect } from "react";

import "@/assets/scss/components/picture/unSplash.scss";

import unplashService from "@/services/unplashService";

interface Props {
  isOpenUnsplash: boolean;
  closeUnsplash: () => void;
}

export default function Unsplash({ isOpenUnsplash, closeUnsplash }: Props) {
  const [photos, setPhotos] = React.useState<any[]>([]);
  const [page, setPage] = React.useState<number>(1);

  useEffect(() => {
    if (isOpenUnsplash) {
      imagesUnplash();
    }
  }, [isOpenUnsplash]);

  const imagesUnplash = async () => {
    await unplashService.search
      .getPhotos({ query: "films", page: page, perPage: 9 })
      .then((result) => {
        setPhotos(result.response?.results ?? []);
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
      });
  };

  const nextPage = () => {
    setPage(page + 1);
    imagesUnplash();
  };

  const prevPage = () => {
    setPage(page - 1);
    imagesUnplash();
  };

  const closeDialog = () => {
    closeUnsplash();
  };

  return (
    <>
      <div className="header">
        <p className="title">Imagenes</p>
        <p className="close" onClick={closeDialog}>
          X
        </p>
      </div>

      <div className="grid">
        {photos.map((photo) => (
          <div key={photo.id} className="content-image">
            <img src={photo.urls.small} alt={photo.alt_description} />
          </div>
        ))}
      </div>

      <menu>
        <button id="cancel" type="button" onClick={prevPage}>
          Anterior
        </button>
        <button type="button" onClick={nextPage}>
          Siguiente
        </button>
      </menu>
    </>
  );
}