import React from 'react';
import Navbar from "../components/Navbar.js";
import Hero from "../components/Hero.js";
import Footer from '../components/Footer.js';

const home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Footer/>
        </div>
    )
}

export default home
