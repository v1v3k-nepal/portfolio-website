import React from 'react'
import "./Header.scss"

const Header = () => {
  return (
    <div id="header">
    <div className="container overlay">
        <nav className='nav'>
            <h1 className="nav_logo"><span>V</span>ivek.</h1>

            <ul id="sidemenu">
                <li><a href="#header" onclick="closemenu()">Home</a></li>
                <li><a href="#about" onclick="closemenu()">About</a></li>
                <li><a href="#services" onclick="closemenu()">Services</a></li>
                <li><a href="#portfolio" onclick="closemenu()">Portfolio</a></li>
                <li><a href="#contact" onclick="closemenu()">Contact</a></li>
                <i className="fa-sharp fa-solid fa-circle-xmark close-icon" onclick="closemenu()"></i>
            </ul>
            {/* <i className="fa-solid fa-bars menu-icon" onclick="openmenu()"></i> */}
        </nav>

        <div className="header_text">
            <p>Frontend Developer</p>
            <h1>Hi, I'm <span>Vivek</span><br/>Nepal, Coding Artist</h1>
        </div>

    </div>
</div>
  )
}

export default Header;