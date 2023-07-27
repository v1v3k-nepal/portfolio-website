import React from 'react'
import "./About.scss"
import AboutImg from "../../assets/about.png"
import { useState } from 'react'

const About = () => {
    const [activeTab, setActiveTab] = useState("skills");
    const [activeLink, setActiveLink] = useState("skills");

    const openTab =(tabName)=>{
        setActiveLink(tabName);
        setActiveTab(tabName);
    }
  return (
    <div id="about">
    <div className="container">
        <div className="row">
            <div className="about-col-1"><img src={AboutImg} alt="" className="about-img"/></div>
            <div className="about-col-2">
                <h1 className="sub-title">About Me</h1>
                <p>Meet Vivek, a passionate and creative Frontend Developer who believes that coding is not just about writing lines of code, but it's an art that requires creativity, passion, logic and innovation. With a great understanding of HTML, CSS, Javascript, and React JS, Vivek has been creating visually appealing and user-friendly web applications that not only impress but solve real-life problems. His focus on clean code and attention to detail ensures that his projects are of the highest quality. As a coding artist, he takes pride in his work and goes beyond the designs to deliver innovative solutions. His dedication to his craft and love for problem-solving make him a valuable asset to any project.</p>

                <div><img src={AboutImg} alt="" className="mobile-about-img"/></div>
            
                <div className="about-titles">
                    <p className={`about-links ${activeLink==="skills" ? "active-link" : ""}`} onClick={()=> openTab("skills")}>Skills</p>
                    <p className={`about-links ${activeLink==="experience" ? "active-link" : ""}`} onClick={()=> openTab("experience")}>Experience</p>
                    <p className={`about-links ${activeLink==="education" ? "active-link" : ""}`} onClick={()=> openTab("education")}>Education</p>
                </div>

                <div className={`about-tab-contents ${activeTab==="skills" ? "active-tab" : ""}`} id="skills">
                    <ul>
                        <li><span>HTML</span><br/>Knowledge ----------- 80%</li>
                        <li><span>CSS</span><br/>Knowledge ----------- 70%</li>
                        <li><span>JS & React Js</span><br/>Knowledge ----------- 65%</li>
                    </ul>
                </div>

                <div className={`about-tab-contents ${activeTab==="experience" ? "active-tab" : ""}`} id="experience">
                    <ul>
                        <li><span>2023 - Current</span><br/>Assistant QA Engineer (DishHome)</li>
                        <li><span>2022</span><br/>Project on CNC Engraving Machine</li>
                        <li><span>2018</span><br/>Bootcamp Training on Robotics</li>
                    </ul>
                </div>

                <div className={`about-tab-contents ${activeTab==="education" ? "active-tab" : ""}`} id="education">
                    <ul>
                        <li><span>2017 - 2022</span><br/>B.E. Electronics & Communication | Tribhuwan University</li>
                        <li><span>2015 - 2017</span><br/>Intermediate | Morning Glory Higher Secondary School</li>
                        <li><span>2014 - 2015</span><br/>SLC | Morning Glory Higher Secondary School</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default About;