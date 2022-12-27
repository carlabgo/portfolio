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
                <a href={props.view} className="btn">Ver más</a>
                <a href={props.source} className="btn">Código</a>
            </div>
        </div>
    </div>
    )
}

export default WorkCard
