import React, { useEffect } from "react";

import "@/assets/scss/components/picture/unSplash.scss";

import unplashService from "@/services/unplashService";


interface Props {
  isOpenUnsplash: boolean;
  closeUnsplash: () => void;
  getUnsplashImage: (url: string) => void;
}
interface Photo {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    full: string;
  };
}

export default function Unsplash({ isOpenUnsplash, closeUnsplash, getUnsplashImage }: Props) {
  const [photos, setPhotos] = React.useState<Photo[]>([]);
  const [page, setPage] = React.useState<number>(1);
  
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        await unplashService.search
          .getPhotos({ query: "wallpapers", page: page, perPage: 9 })
          .then((result) => {
            console.log(result.response?.results);
            const photos =
              result.response?.results.map((photo) => ({
                id: photo.id,
                alt_description: photo.alt_description || "",
                urls: {
                  small: photo.urls.small,
                  full: photo.urls.full,
                },
              })) ?? [];

            setPhotos(photos);
          });
      } catch (error) {
        console.log("Error al obtener las imagenes", error);
      }
    };

    if (isOpenUnsplash) {
      fetchPhotos();
    }

    
  }, [isOpenUnsplash, page]);

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const closeDialog = () => {
    closeUnsplash();
  };

  const sendImageCropper = (url: string) => {
    console.log("hola que hago aqui, xd", url);
   
    getUnsplashImage(url);
    closeDialog();
};

  return (
    <>
      <div className="header">
        <p className="title">Imagenes </p>
        <form>
          <input placeholder="Buscar" />
        </form>
        <p className="close" onClick={closeDialog}>
          X
        </p>
      </div>

      <div className="grid">
        {photos.map((photo) => (
          <div key={photo.id} className="content-image">
            <img
              src={photo.urls.small}
              alt={photo.alt_description}
              onClick={() => sendImageCropper(photo.urls.full)}
            />
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
