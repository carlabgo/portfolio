import React from 'react'

import Navbar from "../components/Navbar.js";
import Footer from '../components/Footer.js';
import Hero2 from '../components/Hero2.js';
import AboutContent from '../components/AboutContent.js';

const about = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="SOBRE MI." text="Desarrolladora de software."/>
      <AboutContent/>
      <Footer />
    </div>
  )
}

export default about
