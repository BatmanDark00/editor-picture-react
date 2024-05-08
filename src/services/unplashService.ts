import { createApi } from 'unsplash-js';
interface Photo {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    full: string;
  };
}

const accessKey ="rhU-MQW7-BUMW1Mfp-whWdXjkGmuisyD9IQwS8IUSjo";

interface UnplashService {
  // se crea una funcion para tener nuestro objeto con nuestras propias opciones
  search: {
    getPhotos: (options: { query: string; page: number; perPage: number }) => Promise<any>;
  };
  // Agregar el nuevo método getUnsplashPhotos
  getUnsplashPhotos: (search: string, page: number) => Promise<Photo[]>;
}

// Crea el objeto unplashService y agrega el método getUnsplashPhotos
const unplashService: UnplashService = {
  search: createApi({ accessKey: accessKey }).search,
  getUnsplashPhotos: async (search: string, page: number) => {
    if(search === '') return null;

    try {
      const result = await unplashService.search.getPhotos({ query: search, page: page, perPage: 9 });
      const photos = result.response?.results.map((photo: any) => ({
        id: photo.id,
        alt_description: photo.alt_description || "",
        urls: {
          small: photo.urls.small,
          full: photo.urls.full,
        },
      })) ?? [];

      return photos;
    } catch (e) {
      throw new Error("Error al obtener las imágenes de Unsplash");
    }
  }
};

export default unplashService;