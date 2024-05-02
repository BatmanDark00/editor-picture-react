import React, { useState, useEffect } from "react";
import unplashService from "@/services/unplashService";

interface Props {
  isOpenUnsplash: boolean;
  closeUnsplash: () => void;
}

const Unsplash: React.FC<Props> = ({ isOpenUnsplash, closeUnsplash }) => {
  const [photos, setPhotos] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const fetchPhotos = async () => {
      if (isOpenUnsplash) {
        try {
          const result = await unplashService.search.getPhotos({
            query: "films",
            page,
            perPage: 12
          });
          setPhotos(result.response?.results ?? []);
        } catch (error) {
          console.error("Error fetching photos:", error);
        }
      }
    };
    fetchPhotos();
  }, [isOpenUnsplash, page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(Math.max(page - 1, 1));
  };

  const handleClose = () => {
    closeUnsplash();
  };

  return (
    <>
      <div className="header">
        <p className="title">Imágenes</p>
        <p className="close" onClick={handleClose}>
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
};

export default Unsplash;
