import React from "react";
import "./about.css";
import CertfWeb from "../../img/certfWeb.png";
import CertfJs from "../../img/certfJs.png";
import CertfReact from "../../img/certfReact.png";
import CertfBf from "../../img/certfBf.jpg";
import AboutImg from "../../img/about1.jpg"

import Download from "../download/Download";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={AboutImg}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Sobre mí</h1>
        <p className="a-sub">
          Soy un Frontend dev en constante crecimiento.
        </p>
        <p className="a-desc">
          Me fascina la tecnología.
          Proactivo, emprendedor y muy comprometido con desafíos constantes.
          Poseo experiencia programando y también sólidos conocimientos en el rubro bancario y comercial.
          <h4 className="a-award-title">Certificaciones</h4>
          <div className="a-award">
            <img src={CertfWeb} alt="" className="a-award-img" />
            <img src={CertfJs} alt="" className="a-award-img" />
            <img src={CertfReact} alt="" className="a-award-img" />
            <img src={CertfBf} alt="" className="a-award-img" />
            <div className="a-award-texts">
              {/* <h4 className="a-award-title">International Desing</h4> */}
              <p className="a-award-desc">
                A continuacion, tenes acceso a mi CV completo.
              </p>
            </div>
          </div>
        </p>
        <Download />
      </div>
    </div>
  );
};

export default About;
