import { Carousel } from "antd";
import React from "react";
import "./stylesHome.css";
const contentStyle = {
  height: "100%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Inicio = () => {
  return (
    <>
      <header>
        <nav className="navegacion">
          <a href="/">
            <img
              src="https://static.wixstatic.com/media/2aae47_17e01ae6f7c640c484b8d6960b43489c~mv2.png/v1/fill/w_165,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/B%26B_Identificador%20Excepcional_Pantone-02.png"
              alt=""
            />
          </a>

          <a className="btn-ingresar" href="/home">
            <i class="fa-solid fa-right-to-bracket"></i>
            {" "} Ingresar 
          </a>
        </nav>
      </header>

      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>
            <img
              src="https://cdn.pixabay.com/photo/2017/10/13/12/29/hands-2847508_960_720.jpg"
              alt="1"
              border="0"
              className="img-cover"
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
              src="https://cdn.pixabay.com/photo/2014/09/20/13/56/sheep-453812_960_720.jpg"
              alt="2"
              border="0"
              className="img-cover"
            />
          </h3>
        </div>
      </Carousel>

      <h1 className="titulo">Fundación Bunge & Born</h1>

      <p className="parrafo">_________</p>

      <div className="container">
        <p className="parrafo">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
          fermentum est. Sed viverra nec orci et lobortis. Ut sed tellus at eros
          congue elementum. Donec laoreet nisi tortor, quis finibus felis
          egestas at. In aliquam pellentesque velit vitae tempor. Vivamus et
          libero dolor. Praesent at fringilla turpis. Aenean ac erat non nisl
          mollis vestibulum at at felis. Etiam eu ligula et nulla ornare
          eleifend eget a est. Etiam eleifend nisi a laoreet tincidunt. Etiam
          nec molestie risus. Aliquam efficitur ultricies nisi sed placerat.{" "}
        </p>

        

        <div className="actividades">
          <div className="actividad">
            <img
              className="iconos"
              src="https://cdn.pixabay.com/photo/2017/09/20/20/52/child-2769913_960_720.jpg"
            />

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
              fermentum est. 
            </p>
          </div>

          <div className="actividad">
            <img
              className="iconos"
              src="https://cdn.pixabay.com/photo/2016/04/11/03/00/run-1321278_960_720.jpg"
            />

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
              fermentum est.
            </p>
          </div>

          <div className="actividad">
            <img
              className="iconos"
              src="https://cdn.pixabay.com/photo/2015/01/18/13/31/children-602967_960_720.jpg"
            />

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
              fermentum est.
            </p>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="redes">
          <a href="#">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-twitter"></i>
          </a>
        </div>

        <p>todos los derechos reservados 2022 &copy;</p>
      </footer>
    </>
  );
};
export default Inicio;
