import React from 'react'
import "./Contact.scss"

const Contact = () => {
  return (
    <div id="contact">
    <div class="container">
        <div class="row">
            <div class="contact-left">
                <h1 class="sub-title">Contact Me</h1>
                <p><i class="fa-solid fa-paper-plane"></i>vivek074bex@ioepc.edu.np</p>
                <p><i class="fa-brands fa-whatsapp"></i>98xxxxxxxx</p>
                <div class="social-icons">
                    <a href="https://www.linkedin.com/in/vivek-nepal/"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/v1v3k-nepal"><i class="fa-brands fa-github"></i></a>
                    <a href="https://www.facebook.com/AjeebAatma/"><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://www.instagram.com/vivek_nepal/"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.youtube.com/@ILoveElectronics3000/"><i class="fa-brands fa-youtube"></i></a>
                </div>

                <a href="https://viveknepal.com.np" class="btn btn2">Download CV</a>
            </div>
            <div class="contact-right">
                <form name="submit-to-google-sheet">
                    <input type="text" name="Name" placeholder="Your Name" required/>
                    <input type="email" name="Email" placeholder="Your Email" required/>
                    <textarea name="Message" rows="10" placeholder="Your Message" required></textarea>
                    <button type="submit" class="btn btn2">Submit</button>
                </form>

                <span id="msg"></span>
            </div>
        </div>
    </div>
</div>
  )
}

export default Contact;