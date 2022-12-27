import React from 'react';
import Navbar from "../components/Navbar.js";
import Footer from '../components/Footer.js';
import Hero2 from '../components/Hero2.js';
import Work from '../components/Work.js';

const projects = () => {
  return (
    <div>
      <Navbar/>
      <Hero2 heading="PROYECTOS." text="Algunos de mis trabajos."/>
      <Work/>
      <Footer/>
      
    </div>
  )
}
export default projects
