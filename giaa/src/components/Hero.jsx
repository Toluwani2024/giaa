import React from 'react';
import logo from '../assets/logo.png'

const Hero = () => {
  return (
    <section className="hero">
       <img src={logo} alt="Business Logo" className="logo" />
      <h1> <strong>God is an Artist</strong> </h1>
      <p>"Make it Make Sense"</p>
      <a href="https://wa.me/23482191795" target="_blank" rel="noopener noreferrer">
        <button>Chat on WhatsApp</button>
      </a>
    </section>
  );
};

export default Hero;
