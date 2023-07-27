import React from 'react'
import "./Services.scss"

const Services = () => {
  return (
    <div id="services">
    <div className="container">
        <h1 className="sub-title">My Services</h1>
        <div className="services-list">
            <div>
                <i className="fa-solid fa-crop-simple"></i>
                <h2>Portfolio <br/> Website</h2>
                <p>Are you planning to develop your awesome portfolio website, that is completely responsive and visually appealing ? You are in the right place. I am confident that I can help you achieve your goals.</p>
                <a href="https://viveknepal.com.np">Learn More</a>
            </div>

            <div>
                <i className="fa-solid fa-code"></i>
                <h2>E-Commerce Website</h2>
                <p>I understand that an e-commerce website is not just about selling products, but it's also about building trust and loyalty with your customers. That's why I'll work closely with you to understand your brand values and create a website that reflects your unique personality and style.</p>
                <a href="https://viveknepal.com.np">Learn More</a>
            </div>

            <div>
                <i className="fa-solid fa-laptop-code"></i>
                <h2>Frontend Development</h2>
                <p>I am passionate about user experience and designs. I take a problem-solving approach to front-end development. Feel free to have a glance at my projects below. I'm comitted to delivering high quality end product that meets the client expectations.</p>
                <a href="https://viveknepal.com.np">Learn More</a>
            </div>
        </div>
    </div>
</div>
  )
}

export default Services;