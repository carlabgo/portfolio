import React from 'react'
import Navbar from "../components/Navbar.js";
import Footer from '../components/Footer.js';
import Hero2 from '../components/Hero2.js';
import Form from '../components/Form.js';
const contact = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="CONTACTO." text="Charlemos un rato."/>
      <Form/>
      <Footer />
    </div>
  )
}

export default contact
