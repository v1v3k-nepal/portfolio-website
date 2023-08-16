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

    const handleCertification = (certName)=>{
        if(certName==="react-basic"){
            window.open("https://www.hackerrank.com/certificates/13bf328bac11", "_blank");
        }

        else if(certName==="js-basic"){
            window.open("https://www.hackerrank.com/certificates/8a2233b7604c", "_blank");
        }

        else if(certName==="css"){
            window.open("https://www.hackerrank.com/certificates/854b8dcdfce2", "_blank");
        }
    }
  return (
    <div id="about">
    <div className="container">
        <div className="row">
            <div className="about-col-1"><img src={AboutImg} alt="" className="about-img"/></div>
            <div className="about-col-2">
                <h1 className="sub-title">About Me</h1>
                <p>Hi, I am a passionate and creative Frontend Developer who believes that coding is not just about writing lines of code, but it's an art that requires creativity, passion, logic, learning mindset and most important, the debugging skills. I have a good knowledge and Hands on Experience of Frontend Development with the following skills. I also possess a Good knowledge of Cybersecurity, secure code practices, standard ESlint guides, and I also have a nice grasp on Computer Networks. Besides, I always focus on clean, optimized, maintainable and well documented code with good aesthetic designs.</p>
                
                <div><img src={AboutImg} alt="" className="mobile-about-img"/></div>
            
                <div className="about-titles">
                    <p className={`about-links ${activeLink==="skills" ? "active-link" : ""}`} onClick={()=> openTab("skills")}>Skills</p>
                    <p className={`about-links ${activeLink==="certification" ? "active-link" : ""}`} onClick={()=> openTab("certification")}>Certification</p>
                    <p className={`about-links ${activeLink==="education" ? "active-link" : ""}`} onClick={()=> openTab("education")}>Education</p>
                </div>

                <div className={`about-tab-contents ${activeTab==="skills" ? "active-tab" : ""}`} id="skills">
                    <ul>
                        <li><span>Languages</span><br/>HTML5, CSS3, JavaScript(ES6), Java(Basic)</li>
                        <li><span>Framework/Library</span><br/>React JS, Next JS, Tailwind CSS</li>
                        <li><span>Essentials</span><br/>Agile Metholodogy, API Testing</li>
                        <li><span>Tools</span><br/>Git, GitHub, PostMan, VS-Code, Android Studio</li>
                    </ul>
                </div>

                <div className={`about-tab-contents ${activeTab==="certification" ? "active-tab" : ""}`} id="certification">
                    <ul className='certification'>
                        <li onClick={()=>handleCertification("react-basic")}><span>2023</span><br/>React Basic (HackerRank)</li>
                        <li onClick={()=>handleCertification("js-basic")}><span>2023</span><br/>JavaScript Basic (HackerRank)</li>
                        <li onClick={()=>handleCertification("css")}><span>2023</span><br/>Cascading Style Sheets: (CSS) (HackerRank)</li>
                        <li onClick={()=>handleCertification("nec")}><span>2022</span><br/>Engineering License for B.E. Electronics (Nepal Engineering Council)</li>
                    </ul>
                </div>

                <div className={`about-tab-contents ${activeTab==="education" ? "active-tab" : ""}`} id="education">
                    <ul>
                        <li><span>2017 - 2022</span><br/>B.E. Electronics & Communication 64.92% | Tribhuwan University</li>
                        <li><span>2015 - 2017</span><br/>Intermediate 72% | Morning Glory Higher Secondary School</li>
                        <li><span>2014 - 2015</span><br/>SLC 78% | Morning Glory Higher Secondary School</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default About;