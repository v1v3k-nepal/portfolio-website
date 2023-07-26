import React from 'react'
import Header from './Header/Header';
import About from "./About/About";
import Services from "./Services/Services"
import Projects from "./Projects/Projects"
import Contact from "./Contact/Contact"
import "./Home.scss"

const Home = () => {
  return (
    <div>
        <Header/>
        <About/>
        <Services/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default Home;