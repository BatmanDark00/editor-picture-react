import { useNavigate } from 'react-router-dom';

import homeViewModule from "@/assets/styles/views/homeView.module.scss";
import landscape from "@/assets/images/home/landscape.svg";
import camera from "@/assets/images/home/camera.svg";

import girlsFlowers from "@/assets/images/home/girls_flowers.png";

import ButtonBase from "@/components/common/ButtonBase";

import Header from "@/components/home/Header.tsx";

function HomeView() {

  const navigate = useNavigate();
  const handleClick = () => navigate('/picshur/editor');

  return (
    <>
      <Header />

      <main className={homeViewModule.main}>
        <section className={homeViewModule.main__home_page_section}>
          <div className={homeViewModule.main__home_page_section__title}>
            <h1>Transforma tus fotos con Picshur</h1>
            <h3>
              De retoques simples a transformaciones creativas,{" "}
              <strong>Picshur</strong> lo tiene todo para editar tus fotos en
              línea.
            </h3>

            <div
              className={
                homeViewModule.main__home_page_section__title__acccess_picture
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

          <div className={homeViewModule.main__home_page_section__image}>
            <img src={landscape} alt="landscape" />
          </div>
        </section>

        <section className={homeViewModule.main__home_page_section_two}>
          <div className={homeViewModule.main__home_page_section_two__image}>
            <img src={girlsFlowers} alt="camera" />
          </div>

          <div className={homeViewModule.main__home_page_section_two__content}>
            <p
              className={
                homeViewModule.main__home_page_section_two__content__title
              }
            >
              Explora Efectos Únicos en Picshur
            </p>
            <p
              className={
                homeViewModule.main__home_page_section_two__content__description
              }
            >
              Descubre una amplia variedad de efectos creativos en Picshur y
              dale vida a tus fotos con un toque de diversión y estilo. Desde
              vintage hasta moderno, encontrarás el efecto perfecto para cada
              ocasión. ¡Diviértete editando y sorprende con tus creaciones!
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomeView;
