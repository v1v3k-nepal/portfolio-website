import React from 'react'
import "./Header.scss"

const Header = () => {
    const openMenu = ()=>{
        const sideMenu = document.getElementById("sidemenu");
        sideMenu.style.right="0";
    }

    const closeMenu = ()=> {
        const sideMenu = document.getElementById("sidemenu");
        sideMenu.style.right="-250px";
    }
  return (
    <div id="header">
    <div className="container overlay">
        <nav className='nav'>
            <h1 className="nav_logo"><span>V</span>ivek.</h1>

            <ul id="sidemenu">
                <li><a href="#header" onClick={()=> closeMenu()}>Home</a></li>
                <li><a href="#about" onClick={()=> closeMenu()}>About</a></li>
                <li><a href="#services" onClick={()=> closeMenu()}>Services</a></li>
                <li><a href="#portfolio" onClick={()=> closeMenu()}>Portfolio</a></li>
                <li><a href="#contact" onClick={()=> closeMenu()}>Contact</a></li>
                <i className="fa-sharp fa-solid fa-circle-xmark close-icon" onClick={()=> closeMenu()}></i>
            </ul>
            <i className="fa-solid fa-bars menu-icon" onClick={()=>openMenu()}></i>
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