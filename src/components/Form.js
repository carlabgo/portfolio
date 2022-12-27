import "./form.css"
import React from 'react'

const Form = () => {
    return (
        <div className="form">
            <form>
                <label>Nombre</label>
                <input type="text"></input>
                <label>Email</label>
                <input type="email"></input>
                <label>Asunto</label>
                <input type="text"></input>
                <label>Mensaje</label>
                <textarea rows="6" placeholder="Escribe tu mensaje aqui"/>
                <button className="btn">Enviar</button>
            </form>
        </div>
    )
}

export default Form
