import React from "react";
import "./about.css";
import Garantia from "../../img/garantia.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://i.pinimg.com/originals/65/df/1a/65df1a2ba15c47dde55509f30e2f4abc.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit labore,
          deleniti nostrum.
        </p>
        <p className="a-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
          ducimus pariatur dolore exercitationem deserunt. Doloribus sequi, nemo
          voluptatem, officia ipsam cupiditate cumque, facilis eum incidunt
          delectus ut. Vero, facilis facere?
          <div className="a-award">
            <img src={Garantia} alt="" className="a-award-img" />
            <div className="a-award-texts">
              <h4 className="a-award-title">International Desing</h4>
              <p className="a-award-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                vitae.
              </p>
            </div>
          </div>
        </p>
      </div>
    </div>
  );
};

export default About;
