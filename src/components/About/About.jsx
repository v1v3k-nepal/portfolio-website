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
                <p>Hi, I am a passionate and creative Frontend Developer who believes that coding is not just about writing lines of code, but it's an art that requires creativity, passion, logic, learning mindset and most important, the debugging skills. I have a good knowledge and Hands on Experience of Html, CSS, SCSS, JavaScript (ES6), React JS, Git, GitHub, and Linux. I also possess a Good knowledge of Cybersecurity, secure code practices, standard ESlint guides, and I also have a nice grasp on Computer Networks. Besides, I always focus on clean, optimized, maintainable and well documented code with good aesthetic designs.</p>
                
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