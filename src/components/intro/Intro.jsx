import "./intro.css";
import Me from "../../img/me.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hola! Me llamo</h2>
          <h2 className="i-name">Agus Maio</h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item web-developer">Desarrollador Web</div>
              <div className="i-title-item gamer">Gamer</div>
              <div className="i-title-item sportMan">Deportista</div>
              <div className="i-title-item friendly">Amante de las mascotas</div>
              <div className="i-title-item friendly">Argentino</div>
            </div>
          </div>
          <p className="i-desc">
            Gracias por visitar mi Web. Por favor, desliza para conocer más
            sobre mí!
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
