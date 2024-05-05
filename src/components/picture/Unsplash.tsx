import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import "@/assets/scss/components/picture/unSplash.scss";

import unplashService from "@/services/unplashService";

import { setUrlImage } from "@/redux/imageCropperSlice";

interface Props {
  isOpenUnsplash: boolean;
  closeUnsplash: () => void;
}
interface Photo {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    full: string;
  };
}

export default function Unsplash({ isOpenUnsplash, closeUnsplash }: Props) {
  const [photos, setPhotos] = React.useState<Photo[]>([]);
  const [page, setPage] = React.useState<number>(1);

  const dispatch = useDispatch();

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
    dispatch(setUrlImage(url));
    closeDialog();  
  };

  return (
    <>
      <div className="header">
        <p className="title">Imagenes </p>
        <form className="form">
          <input type="text" required />
          <label className="label">
            <span className="text-name">Buscar</span>
          </label>
        </form>
        <button className="close" onClick={closeDialog}>
          X
        </button>
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
