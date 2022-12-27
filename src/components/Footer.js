import "./footer.css"
import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
                        <div>
                            <p>Luján de Cuyo, Mendoza</p>
                            <p>Argentina.</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} />
                            +54 9 261 6241515
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />
                            carlabgo95@gmail.com
                        </h4>
                    </div>

                </div>
                <div className="right">
                    <h4>
                        Sobre mi
                    </h4>
                    <p>
                        Soy Carla Gil, desarrolladora de software full stack.
                        Me gusta el aprendizaje constante y desafiarme a mi misma.
                    </p>
                    <div className="social">
                    <FaLinkedin size={30} style={{ color: "white", marginRight: "1rem" }} />
                    <FaGithub size={30} style={{ color: "white", marginRight: "1rem" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
