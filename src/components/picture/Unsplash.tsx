import React, { useState, useEffect, useCallback } from "react";

import { useDispatch } from "react-redux";

import "@/assets/scss/components/picture/unSplash.scss";

import unplashService from "@/services/unplashService";

import { setUrlImage } from "@/redux/imageCropperSlice";

import useSearch from "@/hooks/useSearch";
import { debounce } from "react-advanced-cropper";

function NoPhotosResults () {
  return (
    <p style={{
      width: '100%',
      top: '15rem',
      justifyContent:'center',
      textAlign: 'center',
      position: 'relative'
     }}>
      No se encontraron imágenes para esta búsqueda
    </p>
  )
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
  const previusSearch = React.useRef('')
  const {search, updateSearch, error} = useSearch();

  const dispatch = useDispatch();

  const fetchData = useCallback(async (searchTerm: string, pageNumber: number) => {
    if(searchTerm === previusSearch.current) return
    try {
      setLoading(true);
      setError(null);
      previusSearch.current = searchTerm
      const newPhotos = await unplashService.getUnsplashPhotos(searchTerm, pageNumber);
      setPhotos(newPhotos);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const debouncedFetchData = useCallback(
    debounce((searchTerm: string, pageNumber: number) => {
      fetchData(searchTerm, pageNumber);
    }, 300),
    [fetchData]
  );

  useEffect(() => {
    if (isOpenUnsplash) {
      setPage(1); // Reset page when opening Unsplash
    }
  }, [isOpenUnsplash]);

  useEffect(() => {
    if (isOpenUnsplash) {
      debouncedFetchData(search, page);
    }
  }, [isOpenUnsplash, page, search, debouncedFetchData]);

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

  const hasPhotos = photos?.length > 0;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setPhotos(photos)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = e.target.value
    updateSearch(newSearch)
  }

  return (
    <>
      <div className="header">
        <p className="title">Imagenes </p>
        <form className="form" onSubmit={handleSubmit} >
          <input
           style={{
            border: '1px solid transparent',
            borderBottomColor: error ? 'red' : 'transparent'
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

      {hasPhotos 
       ? <div className="grid">
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
      : <NoPhotosResults />
      }

        <menu style={{display: hasPhotos ? 'flex' : 'none'}}>
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
