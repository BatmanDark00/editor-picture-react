import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import "@/assets/styles/components/picture/unSplash.scss";

import ButtonBase from "@/components/common/ButtonBase";
import InputBase from "@/components/common/InputBase";

import unplashService from "@/services/unplashService";

import { setImageCropper } from "@/redux/imageCropperSlice";

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
  const [search, setSearch] = React.useState<string>("");
  const [enter, setEnter] = React.useState<boolean>(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        await unplashService.search
          .getPhotos({
            query: search !== "" ? search : "nature",
            page: page,
            perPage: 9,
          })
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

    if (enter) {
      fetchPhotos();
      setEnter(false);
    }
  }, [isOpenUnsplash, page, enter]);

  const nextPage = () => {
    setPage((prevPage) => {
      return prevPage + 1;
    });
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
    dispatch(setImageCropper(url));
    closeDialog();
  };

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleOnkeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (search.length > 0) {
        setEnter(true);
        setPage(1);
      }
    }
  };

  return (
    <>
      <div className="search">
        <InputBase
          value={search}
          onChange={handleChangeSearch}
          onKeyDown={handleOnkeyDown}
          children="Buscar imágenes"
        />
      </div>

      <div className="grid">
        {photos.map((photo) => (
          <div key={photo.id} className="content-image">
            {}
            <img
              src={photo.urls.small}
              alt={photo.alt_description}
              onClick={() => sendImageCropper(photo.urls.full)}
            />
          </div>
        ))}
      </div>

      <menu>
        <ButtonBase
          className="btn_elevated"
          textAlign="center"
          onClick={prevPage}
        >
          {" "}
          Anterior
        </ButtonBase>
        <ButtonBase
          className="btn_elevated"
          textAlign="center"
          onClick={nextPage}
        >
          {" "}
          Siguiente
        </ButtonBase>
      </menu>
    </>
  );
}
