import "./navbar.css"

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars} from "react-icons/fa";
import {FaTimes} from "react-icons/fa";

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >=100){
            setColor(true);
        } else {
            setColor(false);
        }
    };
    window.addEventListener("scroll", changeColor);

    return (
        <div class={color ? "nav nav-bg" : "nav"}>
            <Link to="/">
                <h1>Portfolio.</h1>
            </Link>
            <ul class={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/projects">Proyectos</Link>
                </li>
                <li>
                    <Link to="/about">Sobre mi</Link>
                </li>
                <li>
                    <Link to="/contact">Contacto</Link>
                </li>
            </ul>
            <div class="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: "white" }} />) 
                : 
                (<FaBars size={20} style={{ color: "white" }} />) }
                
                
            </div>
        </div>
    )
}

export default Navbar
