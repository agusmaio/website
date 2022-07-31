import "./intro.css";
import Me from "../../img/me.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My Name is</h2>
          <h2 className="i-name">Agustin Maio</h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item web-developer">Web Developer</div>
              <div className="i-title-item gamer">Gamer</div>
              <div className="i-title-item sportMan">Sportman</div>
              <div className="i-title-item friendly">Pets Friendly</div>
            </div>
          </div>
          <p className="i-desc">
            Technology fascinates me. Proactive, enterprising and very committed
            to constant challenges. I have experience in the programming area,
            as well as solid knowledge in the banking and commercial field.
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
