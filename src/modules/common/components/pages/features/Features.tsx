import featuresStyles from "@/modules/common/components/pages/features/features.module.scss";

import Header from "../../home/header/Header";
import Footer from "../../home/footer/Footer";
import Typography from "@/modules/common/components/typography/Typography";
import PictureBox from "@/components/common/PictureBox";

import cut from "@/assets/images/pages/features/Cut_Image.png";
import color from "@/assets/images/pages/features/Color_Image.png";
import rotate from "@/assets/images/pages/features/Rotate_Image.png";
import filters from "@/assets/images/pages/features/filters_image.png";
import unplash from "@/assets/images/pages/features/biblioteca_unplash.png"

const FEATURESPICSHURDATA = [
  {
    id: "0",
    title: "Recortar Imagenes",
    description:
      "La herramienta Cortar tiene todo lo que necesitas para recortar tus fotos según tus necesidades. Úselo en modo de forma libre o elija entre una variedad de plantillas con el tamaño perfecto para redes sociales y más.",
    img: cut,
  },
  {
    id: "1",
    title: "Tonalidades",
    description:
      "Fusiona colores y patrones entre el fondo y el primer plano para crear efectos sorprendentes con los modos de fusión.",
    img: color,
  },
  {
    id: "2",
    title: "Rotar Imagenes",
    description:
      "Utilice la función para rotar y voltear la imagen sin limites y según el ángulo deseado.",
    img: rotate,
  },
  {
    id: "3",
    title: "Filtros",
    description:
      "¡Convierte en un artista! Aplica diferentes filtros a tus fotos como Black & White, Vintage, Blur y entre otros. ",
    img: filters,
  },
  {
    id: "4",
    title: "Biblioteca Unplash",
    description:
      "Diviertete con una amplia colección de imágenes de alta calidad, cuidadosamente seleccionadas para satisfacer todas tus necesidades creativas y profesionales.",
    img: unplash,
  }
];

function Features() {
  return (
    <>
      <Header />

      <section className={featuresStyles.featuresContainer}>
        <div className={featuresStyles.featuresTitle}>
          <span>
            <Typography variant="h1" weight="bold" color="var(--secondary-800)">
              Descubre las funciones de <strong>PicShur</strong>
            </Typography>
          </span>
          <p className={featuresStyles.subtitle}>
            Explora todas las herramientas que puedes utilizar para crear
            hermosas fotografías e ilustraciones increíbles como un
            profesional.
          </p>
        </div>

        <section className={featuresStyles.featuresSection}>
          {FEATURESPICSHURDATA?.map((item) => (
            <div key={item.id} className={featuresStyles.divFeatures}>
              <PictureBox src={item.img} alt={item.description} title={item.title} description={item.description} />
            </div>
          ))}
        </section>
      </section>

      <Footer />
    </>
  );
}

export default Features;
