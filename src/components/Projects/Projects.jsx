import React from 'react'
import "./Projects.scss"
import work1 from "../../assets/work-1.png"
import work2 from "../../assets/work-2.png"
import work3 from "../../assets/work-3.png"

const Projects = () => {
  return (
    <div id="portfolio">
    <div class="container">
        <h1 class="sub-title">My Projects</h1>
        <div class="work-list">
            <div class="work">
                <img src={work1} alt=""/>
                <div class="layer">
                    <h2>Todos List</h2>
                    <p>This React App lets you to add, update and delete your todos along with a feature to mark as completed</p>
                    <a href="https://v1v3k-nepal.github.io/todos-list/"><i class="fa-solid fa-up-right-from-square"></i></a>
                </div>
            </div>

            <div class="work">
                <img src={work2} alt=""/>
                <div class="layer">
                    <h2>Contact App</h2>
                    <p>This is Completely Responsive React App which lets you to Add, Update, Delete and Search Contacts</p>
                    <a href="https://v1v3k-nepal.github.io/contact-app"><i class="fa-solid fa-up-right-from-square"></i></a>
                </div>
            </div>

            <div class="work">
                <img src={work3} alt=""/>
                <div class="layer">
                    <h2>Weather App</h2>
                    <p>This Web App helps you to get the weather details such as temperature, humidity, rain probability etc. </p>
                    <a href="https:viveknepal.com.np/weather.html"><i class="fa-solid fa-up-right-from-square"></i></a>
                </div>
            </div>
        </div>

        <a href="https:viveknepal.com.np" class="btn">See More</a>
    </div>
    </div>
  )
}

export default Projects;