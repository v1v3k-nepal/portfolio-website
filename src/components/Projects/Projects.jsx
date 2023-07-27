import React from 'react'
import "./Projects.scss"
import work1 from "../../assets/work-1.png"
import work2 from "../../assets/work-2.png"
import work3 from "../../assets/work-3.png"

const Projects = () => {


  return (
    <div id="portfolio">
    <div className="container">
        <h1 className="sub-title">My Projects</h1>
        <div className="work-list">

            <div className="work">
                <img src={work1} alt=""/>
                <div className="layer bg6">
                    <h2>E-Commerce App</h2>
                    <p>Fully Functional React E-commerce web App that uses API from Strapi Headless CMS, to fetch product data from the backend.</p>
                    <a href="https://v1v3k-nepal.github.io/hellostore-frontend/"><i className="fa-solid fa-up-right-from-square"></i></a>
                </div>
            </div>

            <div className="work">
                <img src={work2} alt=""/>
                <div className="layer bg2">
                    <h2>Contact App</h2>
                    <p>This is Completely Responsive React App which lets you to Add, Update, Delete, Search & Favourite your Contacts.</p>
                    <a href="https://v1v3k-nepal.github.io/contact-app"><i className="fa-solid fa-up-right-from-square"></i></a>
                </div>
            </div>

            <div className="work">
                <img src={work3} alt=""/>
                <div className="layer">
                    <h2>Weather App</h2>
                    <p>This Web App helps you to get the weather details such as temperature, humidity, sunrise, sunset, wind speed, visibility etc. </p>
                    <a href="https://v1v3k-nepal.github.io/weather-app"><i className="fa-solid fa-up-right-from-square"></i></a>
                </div>
            </div>

            <div className="work">
                <img src={work1} alt=""/>
                <div className="layer bg1">
                    <h2>Todos List</h2>
                    <p>This React App lets you to add, update and delete your todos along with a feature to mark as completed</p>
                    <a href="https://v1v3k-nepal.github.io/todos-list/"><i className="fa-solid fa-up-right-from-square"></i></a>
                </div>
            </div>

            <div className="work">
                <img src={work1} alt=""/>
                <div className="layer bg3">
                    <h2>DishHome IPTV Remote <br/> Android App</h2>
                    <p>It's an Android IR Remote App for DishHome IPTV. I have coded it's UI entirely in HTML, CSS & JS, & used Java for the Backend.</p>
                    <a href="#header"><i className="fa-solid fa-up-right-from-square"></i></a>
                </div>
            </div>

            <div className="work">
                <img src={work1} alt=""/>
                <div className="layer bg5">
                    <h2>DishHome DTH Remote <br/> Android App</h2>
                    <p>It's an Android IR Remote App for DishHome DTH. I have coded it's UI entirely in HTML, CSS & JS, & used Java for the Backend</p>
                    <a href="#header"><i className="fa-solid fa-up-right-from-square"></i></a>
                </div>
            </div>

            {/* <div className='btn-container'>
                <button className="slider-btn">Hello</button>
                <button className="slider-btn"></button>
                <button className="slider-btn"></button>
                <button className="slider-btn"></button>
            </div> */}
        </div>

        {/* <a href="https:viveknepal.com.np" className="btn">See More</a> */}
    </div>
    </div>
  )
}

export default Projects;