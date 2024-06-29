import React from "react";

import aboutModule from "@/modules/common/components/pages/about/about.module.scss";

import Header from "../../home/header/Header";
import Footer from "../../home/footer/Footer";
import Typography from "../../typography/Typography";
import team from "@/assets/images/pages/about/team_developer.jpeg";
import photos from "@/assets/images/pages/about/photos.jpeg";
import commmitment from "@/assets/images/pages/about/_commitment.png"

const valuesData = [
  {
    id: 0,
    title: "Interfaz Amigable",
    descripcion:
      "Nuestro editor está diseñado con la simplicidad en mente, permitiéndote editar tus fotos de manera rápida y sencilla.",
  },
  {
    id: 1,
    title: "Funciones Avanzadas",
    descripcion:
      "Accede a una amplia gama de herramientas de edición, incluyendo recorte, filtros, ajustes y más, todas diseñadas para ayudarte a lograr el look perfecto.",
  },
  {
    id: 2,
    title: "Efectos Creativos",
    descripcion:
      "Desata tu creatividad con nuestros efectos únicos, diseñados para realzar tus fotos y hacerlas destacar.",
  },
  {
    id: 3,
    title: "Colaboración en Tiempo Real",
    descripcion:
      "Comparte tus proyectos con amigos, familiares o colegas y colabora en tiempo real para crear las mejores imágenes posibles.",
  },
];

function About() {
  return (
    <>
      <Header />

      <section className={aboutModule.sectionFather}>
        <div className={aboutModule.divHeader}>
          <span>
            <Typography variant="h1" weight="bold">
              Acerca de Nosotros
            </Typography>
          </span>
          <p>
            Conozca más sobre <strong>PicShur</strong>
          </p>
        </div>

        <section className={aboutModule.sectionOne}>
          <div className={aboutModule.divImg}>
            <img src={team} alt="team_developer" />
          </div>

          <div className={aboutModule.aboutUs}>
            <h2>Quiénes Somos</h2>
            <p>
              En <strong>PicShur</strong>, somos un equipo dedicado de
              diseñadores y desarrolladores que entendemos el poder de la
              narración visual. Nuestra misión es proporcionarte herramientas
              intuitivas y poderosas que hacen que la edición de fotos sea
              accesible para todos, desde usuarios casuales hasta profesionales
              experimentados.
            </p>
          </div>
        </section>

        <section className={aboutModule.sectionTwo}>
          <div className={aboutModule.divVision}>
            <h2>Visión</h2>
            <p>
              Creemos que cada foto cuenta una historia y que todos deberían
              tener las herramientas para contar su historia de manera hermosa.
              Nuestra visión es convertirnos en la plataforma de edición de
              fotos preferida por personas de todo el mundo, fomentando la
              creatividad y ayudando a los usuarios a preservar sus recuerdos
              más preciados de la mejor manera posible.
            </p>
          </div>

          <div className={aboutModule.divImgTwo}>
            <img src={photos} alt="collection of photos" />
          </div>
        </section>

        <section className={aboutModule.sectionTwoPlus}>
         <div className={aboutModule.divImgTwoPlus}>
            <img src={commmitment} alt="statistical equipment" />
          </div>

          <div className={aboutModule.divCommitment}>
            <h2>Compromiso</h2>
            <p>
              Estamos comprometidos con la mejora continua y la innovación.
              Escuchamos a nuestros usuarios y actualizamos regularmente
              nuestras funciones basándonos en sus comentarios. Tu satisfacción
              es nuestra máxima prioridad, y nos esforzamos por ofrecer el mejor
              soporte al cliente y experiencia de usuario.
            </p>
          </div>
        </section>

        <section className={aboutModule.sectionThree}>
          <h2>Qué ofrecemos</h2>
          <section className={aboutModule.sectionValues}>
            {valuesData?.map((item) => (
              <div key={item.id} className={aboutModule.values}>
                <h4>{item.title}</h4>
                <p>{item.descripcion}</p>
              </div>
            ))}
          </section>
        </section>
      </section>

      <Footer />
    </>
  );
}

export default About;
