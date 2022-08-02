import React, { useContext, useRef, useState } from "react";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Adress from "../../img/adress.jpg";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vk6zv3r",
        "template_2qg8kw6",
        formRef.current,
        "lneBjwI7H04j94tIR"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Hablemos de tu proyecto</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" href="https://wa.me/5491157716197" className="c-icon"></img>
              +54 911 57716197
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              agustinmaio93@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Adress} alt="" className="c-icon" />
              Buenos Aires, Argentina
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Contactame! </b> Contame cual es tu historia y escribamosla en código.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
              id=""
              cols="30"
            ></textarea>
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
