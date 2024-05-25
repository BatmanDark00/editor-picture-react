import React, { useEffect, useCallback, useState } from "react";

import { useDispatch } from "react-redux";

import "@/assets/styles/components/picture/unSplash.scss";

import unplashService from "@/services/unplashService";

import { setUrlImage } from "@/redux/imageCropperSlice";

import useSearch from "@/hooks/useSearch";
import { debounce } from "react-advanced-cropper";

function NoPhotosResults() {
  return (
    <p
      style={{
        width: "100%",
        top: "15rem",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
      }}
    >
      No se encontraron imágenes para esta búsqueda
    </p>
  );
}

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
  const [loading, setLoading] = useState(false);
  const [, setError] = useState(null);
  const { search, updateSearch, error } = useSearch();

  const dispatch = useDispatch();

  //useCallback es igual que useMemo, solo que useCallback es perfecto para controlar funciones, fetching, peteticiones, async await; claro ejemplo el que se representa
  const fetchData = useCallback(async () => {
    try {
      setLoading(true); //loanding lo podemos ocupar cuando carga la llamada
      setError(null);
      const newPhotos = await unplashService.getUnsplashPhotos(`${search}`,page); //se hace la llamada segun la busqueda, 'search' representa query del unplashService, y search es un estado que es actualizado por medio de la evaluación del input
      setPhotos(newPhotos); // Se guarda el nuevo grupo de imagenes o query's 
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);// tanto como el try o el catch simpre se ejecutara el finally y lo que haya en él
    }
  }, [search, page]);

  //Nos servira de caja fuerte o de caché para cuando fetchData sea llamado, que aguarde 0.3s
  const debouncedFetchData = useCallback(
    debounce((search) => {
      console.log("🚀 ~ Unsplash ~ search:", search);
      fetchData();
    }, 300),
    [fetchData]
  );

  //este efecto evitara que se mute el estado y a la vez lo reseteé
  useEffect(() => {
    if (isOpenUnsplash) {
      setPage(1);
    }
  }, [isOpenUnsplash]);


    if (isOpenUnsplash) {

      debouncedFetchData(search);//al abrir la pestaña del unplash, este sera controlado por el debounce para que detenga las llamadas a la api

    }
  }, [isOpenUnsplash, page]);

  const nextPage = () => {
    setPage((prevPage) => {
      return prevPage + 1;
    });
    console.log("🚀 ~ nextPage ~ nextPage:" + "add page", prevPage);
  };

  const prevPage = () => {
    setPage((prevPage) => {
      return prevPage - 1;
    });
  };

  const closeDialog = () => {
    closeUnsplash();
  };

  const sendImageCropper = (url: string) => {
    dispatch(setUrlImage(url));
    closeDialog();
  };

  const hasPhotos = photos?.length > 0;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPhotos(photos);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = e.target.value;
    updateSearch(newSearch);
  };


  return (
    <>
      <div className="header">
        <p className="title">Imagenes </p>
        <form className="form" onSubmit={handleSubmit}>
          <input
            style={{
              border: "1px solid transparent",
              borderBottomColor: error ? "red" : "transparent",
            }}
            type="text"
            onChange={handleChange}
            value={search}
            name="query"
            required
          />

          <label className="label">
            <span className="text-name">Buscar</span>
          </label>
        </form>
        <button className="close" onClick={closeDialog}>
          X
        </button>
      </div>
      {hasPhotos ? (
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
      ) : (
        <NoPhotosResults />
      )}

      <menu style={{ display: hasPhotos ? "flex" : "none" }}>
        <button id="cancel" type="button" onClick={prevPage}>
          Anterior
        </button>
        <button type="button" onClick={nextPage}>
          Siguiente
        </button>
      </menu>
    </>
  );
