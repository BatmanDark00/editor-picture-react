import { useNavigate } from "react-router-dom";

import homeViewModule from "@/assets/styles/views/homeView.module.scss";
import girlsFlowers from "@/assets/images/home/girls_flowers.png";
import grid_girls from "@/assets/images/home/grid_girls.png";
import flower from "@/assets/images/home/_flower.png";
import girlWithFlower from "@/assets/images/home/girl_with_flower.png";
import crop from "@/assets/images/home/_crop.png";
import unplash from "@/assets/images/home/unplash.png";
import funny from "@/assets/images/home/divertido.png";

import ButtonBase from "@/components/common/ButtonBase";

import Header from "@/modules/common/components/home/header/Header";
import Footer from "@/modules/common/components/home/footer/Footer";

const collectionImages = [
  {
    id: 0,
    img: grid_girls,
    description: "example image",
  },
  {
    id: 1,
    img: flower,
    description: "example image",
  },
  {
    id: 2,
    img: funny,
    description: "example image",
  },
  {
    id: 3,
    img: crop,
    description: "example image",
  },
  {
    id: 4,
    img: girlWithFlower,
    description: "example image",
  },
  {
    id: 5,
    img: unplash,
    description: "example image",
  },
];

function HomeView() {
  const navigate = useNavigate();
  const handleClick = () => navigate("/picshur/editor");

  return (
    <>
      <Header />

      <main className={homeViewModule.main}>
        <section className={homeViewModule.main__section_one}>
          <div className={homeViewModule.main__section_one__content}>
            <h1>Transforma tus fotos con <strong>PicShur</strong></h1>
            <h3>
              De retoques simples a transformaciones creativas,{" "}
              <strong>PicShur</strong> lo tiene todo para editar tus fotos en
              línea.
            </h3>

            <div
              className={
                homeViewModule.main__section_one__content__acccess_picture
              }
            >
              <ButtonBase
                className="btn_primary"
                size="medium"
                textAlign="center"
                onClick={handleClick}
              >
                Comenzar
              </ButtonBase>
            </div>
          </div>

          <div className={homeViewModule.main__section_one__image}>
            {collectionImages?.map(item => (
              <img key={item.id} src={item.img} alt={item.description} />
            ))}
            
          </div>
        </section>

        <section className={homeViewModule.main__section_two}>
          <div className={homeViewModule.main__section_two__image}>
            <img src={girlsFlowers} alt="camera" />
          </div>

          <div className={homeViewModule.main__section_two__content}>
            <p className={homeViewModule.main__section_two__content__title}>
              Explora efectos únicos en <strong>PicShur</strong>
            </p>
            <p
              className={homeViewModule.main__section_two__content__description}
            >
              Descubre una amplia variedad de efectos creativos en <strong>PicShur</strong> y
              dale vida a tus fotos con un toque de diversión y estilo. Desde
              vintage hasta moderno, encontrarás el efecto perfecto para cada
              ocasión. ¡Diviértete editando y sorprende con tus creaciones!
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default HomeView;
