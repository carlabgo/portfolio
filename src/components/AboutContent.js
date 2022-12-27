import "./aboutcontent.css";

import React from 'react';
import { Link } from "react-router-dom";
import { FaCcStripe, FaCss3, FaDatabase, FaGit, FaHtml5, FaJava, FaJs, FaReact, FaSquareFull } from "react-icons/fa";

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>¿Quién soy?</h1>
                <p>Soy una desarrolladora full stack con ganas de crecer
                    en el mundo de la programación.
                </p>
                <Link to="/contact">
                    <button className="btn">Contactame</button>
                </Link>
            </div>
            <div className="right">
                <div className="icons-container">
                    <FaJs size={40} style={{ color: "white", marginRight: "1.5rem" }} />
                    <FaCss3 size={40} style={{ color: "white", marginRight: "1.5rem" }} />
                    <FaHtml5 size={40} style={{ color: "white", marginRight: "1.5rem" }} />
                    <FaGit size={40} style={{ color: "white", marginRight: "1.5rem" }} />
                    <FaReact size={40} style={{ color: "white", marginRight: "1.5rem" }} />
                    <FaDatabase size={40} style={{ color: "white", marginRight: "1.5rem" }} />
                    <FaJava size={40} style={{ color: "white", marginRight: "1.5rem" }} />
                </div>
            </div>
        </div>
    )
}

export default AboutContent
