import React from 'react'
import "./Projects.scss"
import work1 from "../../assets/work-1.png"
import work2 from "../../assets/work-2.png"
import work3 from "../../assets/work-3.png"
// import IPTV from "../../assets/DishHome-IPTV-Remote.apk"
// import DTH from "../../assets/DishHome-DTH-Remote.apk"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Projects = () => {
    const IPTV = "https://play.google.com/store/apps/details?id=com.vivek.dhitvremote";
    const DTH = "https://play.google.com/store/apps/details?id=com.vivek.dishhomedthremote";

    const notify = ()=>{
        toast.info("Sorry, this Repo is currently private");
    }

    // const IptvGithub = "https://github.com/v1v3k-nepal/DishHome-IPTV-Remote";
    // const dthGithub = "https://github.com/v1v3k-nepal/DishHome-DTH-Remote";


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
                    <div className='btn-container'>
                        <a href="https://v1v3k-nepal.github.io/hellostore/" className="live">Live</a>
                        <a href='https://github.com/v1v3k-nepal/hellostore' className="github">GitHub</a>
                    </div>
                </div>
            </div>

            <div className="work">
                <img src={work2} alt=""/>
                <div className="layer bg3">
                    <h2>Agency WebApp</h2>
                    <p>Next Js Project based on Tailwind CSS, MongoDB for the Agency Portfolio with Features: Authentication, Blogs, CRUD Operations</p>
                    <div className='btn-container'>
                        <a href="https://agency-webapp.vercel.app/" className="live">Live</a>
                        <a href="https://github.com/v1v3k-nepal/agency-webapp" className="github">GitHub</a>
                    </div>
                </div>
            </div>

            <div className="work">
                <img src={work2} alt=""/>
                <div className="layer bg2">
                    <h2>Contact App</h2>
                    <p>This is Completely Responsive React App which lets you to Add, Update, Delete, & Toggle your Favourite Contacts along with live search</p>
                    <div className='btn-container'>
                        <a href="https://v1v3k-nepal.github.io/contact-app" className="live">Live</a>
                        <a href='https://github.com/v1v3k-nepal/contact-app' className="github">GitHub</a>
                    </div>
                </div>
            </div>

            <div className="work">
                <img src={work3} alt=""/>
                <div className="layer">
                    <h2>Weather App</h2>
                    <p>This Web App helps you to get the weather details such as temperature, humidity, sunrise, sunset, wind speed, visibility etc. </p>
                    <div className='btn-container'>
                        <a href='https://v1v3k-nepal.github.io/weather-app' className="live">Live</a>
                        <a href='https://github.com/v1v3k-nepal/weather-app' className="github">GitHub</a>
                    </div>
                </div>
            </div>

            <div className="work">
                <img src={work3} alt=""/>
                <div className="layer bg1">
                    <h2>Todos List</h2>
                    <p>This React App lets you to add, update and delete your todos along with a feature to mark as completed</p>
                    <div className='btn-container'>
                        <a href='https://v1v3k-nepal.github.io/todos-list/' className="live">Live</a>
                        <a href='https://github.com/v1v3k-nepal/todos-list' className="github">GitHub</a>
                    </div>
                </div>
            </div>

            <div className="work">
                <img src={work2} alt=""/>
                <div className="layer bg3">
                    <h2>DishHome IPTV Remote <br/> Android App</h2>
                    <p>It's an Android IR Remote App for DishHome IPTV. I have coded it's UI entirely in HTML, CSS & JS, & used Java for the Backend.</p>
                    <div className='btn-container'>
                        <a href={IPTV} className="live">Live</a>
                        <a href="#portfolio" onClick={()=> notify()} className="github">GitHub</a>
                    </div>
                </div>
            </div>

            <div className="work">
                <img src={work1} alt=""/>
                <div className="layer bg5">
                    <h2>DishHome DTH Remote <br/> Android App</h2>
                    <p>It's an Android IR Remote App for DishHome DTH. I have coded it's UI entirely in HTML, CSS & JS, & used Java for the Backend</p>
                    <div className='btn-container'>
                        <a href={DTH} onClick={()=> notify()} className="live">Live</a>
                        <a href="#portfolio" onClick={()=> notify()} className="github">GitHub</a>
                    </div>
                    {/* <a href="#header"><i className="fa-solid fa-up-right-from-square"></i></a> */}
                </div>
            </div>
            <ToastContainer/>
        </div>
    </div>
    </div>
  )
}

export default Projects;