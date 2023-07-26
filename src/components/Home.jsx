import React from 'react'
import Header from './Header/Header';
import About from "./About/About";
import Services from "./Services/Services"
import "./Home.scss"

const Home = () => {
  return (
    <div>
        <Header/>
        <About/>
        <Services/>
    </div>
  )
}

export default Home;