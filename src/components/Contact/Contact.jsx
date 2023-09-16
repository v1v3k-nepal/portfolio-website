import React, { useState } from "react";
import "./Contact.scss";
import Resume from "../../assets/Resume-Vivek-Nepal-Sept13-1201.pdf";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const onChange = (value) => {
    // console.log("Captcha value:", value);
    if(value) setCaptchaVerified(true)
  };
  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p>
              <i className="fa-solid fa-paper-plane"></i>contact@viveknepal.com.np
            </p>
            <p>
              <i className="fa-brands fa-whatsapp"></i>98xxxxxxxx
            </p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/vivek-nepal/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/v1v3k-nepal">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.facebook.com/AjeebAatma/">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/vivek_nepal/">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/@ILoveElectronics3000/">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>

            <a href={Resume} className="btn btn2">
              Download CV
            </a>
          </div>
          <div className="contact-right">
            <form action="https://formspree.io/f/xnqkpbjn" name="contact-inputs" method="POST">
              <input type="text" name="Name" placeholder="Your Name" required />
              <input type="email" name="Email" placeholder="Your Email" required />
              <textarea name="Message" rows="10" placeholder="Your Message" required></textarea>
              {!captchaVerified && <ReCAPTCHA sitekey="6LdroOMnAAAAAEmBCRI95eRc7wadCoJlgbRaIYlz" onChange={onChange} />}
              <button type="submit" className={`btn btn2 ${captchaVerified? "enable-btn": "disable-btn"}`} disabled={!captchaVerified}>Submit</button>
            </form>

            <span id="msg"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
