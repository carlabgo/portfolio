import "./workcard.css";
import React from 'react'
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
    return (
        <div className="project-card">
        <img src={props.imgsrc} alt="image"></img>
        <h2 className="project-title">{props.title}</h2>
        <div className="project-details">
            <p>{props.text}</p>
            <div className="project-btn">
                <NavLink to={props.view} className="btn">Ver más</NavLink>
                <NavLink to={props.source} className="btn">Código</NavLink>
            </div>
        </div>
    </div>
    )
}

export default WorkCard
