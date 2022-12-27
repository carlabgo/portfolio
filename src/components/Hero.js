import './hero.css';
import React from 'react'
import Background from "../assets/hero.jpg"
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div class="hero">
            <div class="hero-mask">
                <img class="hero-img" src={Background} alt="intro-background"></img>
            </div>
            <div className='hero-content'>
                <p>Hola, soy Carla.</p>
                <h1>Software Developer.</h1>\
                <div>
                    <Link to="/projects" className='btn'>Proyectos</Link>
                    <Link to="/contact" className=' btn btn-light'>Contacto</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
