import { Carousel } from "antd";
import React, { useEffect } from "react";
import "./stylesHome.css";

const Inicio = () => {
  useEffect(() => {
    console.log("Inicio");
  }, []);
  return (
    <div className="bg-slate-800">
      <header className="bg-white ">
        <nav className="flex justify-between items-center mx-3">
          <a href="/">
            <img
              src="https://static.wixstatic.com/media/2aae47_17e01ae6f7c640c484b8d6960b43489c~mv2.png/v1/fill/w_165,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/B%26B_Identificador%20Excepcional_Pantone-02.png"
              alt=""
            />
          </a>

          <a className="btn-ingresar" href="/sign-in">
            <i class="fa-solid fa-right-to-bracket"></i> Ingresar
          </a>
        </nav>
      </header>

      <div class=" h-[500px] bg-[url('https://universidadeuropea.com/resources/media/images/juego-educacion-infantil-1200x630.original.jpg')] bg-cover bg-center flex justify-center items-center"></div>

      <div className="container mx-auto">
        <h1 className="text-6xl text-white font-bold text-center mt-10">
          Fundación Bunge & Born
        </h1>
        <p className="text-white text-center mt-5 text-2xl mx-5">
          Intervención comunitaria interdisciplinaria para el abordaje de las
          consecuencias nutricionales de la pandemia COVID-19 en niños de la
          ciudad de Corrientes.
        </p>

        <p className="text-white text-center mt-10 text-xl mx-5">
          El proyecto de investigación de Intervención comunitaria "Desarrollo
          de una intervención comunitaria interdisciplinaria para el abordaje de
          las consecuencias nutricionales de la pandemia COVID-19 en niños de la
          ciudad de Corrientes" en la facultad de Ingeniería y Tecnología de la
          Universidad de la Cuenca del Plata y con el apoyo de la Fundación
          Bunge y Born. En el proyecto se desarrolló un diagnóstico nutricional
          y la formulación de un producto alimenticio con un valor nutricional
          realizando una prueba de análisis sensorial para evaluar su
          aceptación. Asimismo, se desarrolló un videojuego para la
          implementación de un Programa de Educación Alimentaria Nutricional.
          Esta iniciativa articula las acciones de la Universidad, Empresa y
          Estado en beneficio de la comunidad con aportes concretos de las
          carreras de Ingeniería.{" "}
        </p>

        <div className="flex flex-col md:flex-row justify-between mt-10 font-semibold">
          <div className="flex flex-col items-center mt-5">
            <div class="w-[15rem] h-[15rem] rounded-full bg-[url('https://www.pediatriamildias.com/wp-content/uploads/2021/05/Blog6.jpg')] bg-cover bg-center flex justify-center items-center"></div>
            <p className="text-white mt-5">Objetivo 1:</p>
            <p className="text-white mx-10 text-center mt-3">
              Efectuar un diagnóstico del estado nutricional de niños de la
              ciudad de Corrientes que asisten a comedores.
            </p>
          </div>

          <div className="flex flex-col items-center mt-5">
            <div class="w-[15rem] h-[15rem] rounded-full bg-[url('https://ccfprosario.com.ar/wp-content/uploads/actividades-para-trabajar-la-alimentacion-saludable-en-infantil-1.jpg')] bg-cover bg-center flex justify-center items-center"></div>
            <p className="text-white mt-5">Objetivo 2:</p>
            <p className="text-white mx-10 text-center mt-3">
              Formular una serie de productos alimeticios viable, estable, de
              alto valor nutricional.
            </p>
          </div>

          <div className="flex flex-col items-center mt-5">
            <div class="w-[15rem] h-[15rem] rounded-full bg-[url('https://i.blogs.es/0867bc/educa-borras-touch/450_1000.jpeg')] bg-cover bg-center flex justify-center items-center"></div>

            <p className="text-white mt-5">Objetivo 3:</p>
            <p className="text-white mx-10 text-center mt-3">
              Desarrollar un videojuego con una lógica de juego con la
              metodología de aprendizaje constructiva para el desarrollo de los
              contenidos.
            </p>
          </div>
        </div>
      </div>

      <footer className="bg-white mt-28 py-10">
        <p className="text-center text-xl">
          Todos los derechos reservados 2022 &copy;
        </p>
      </footer>
    </div>
  );
};
export default Inicio;
