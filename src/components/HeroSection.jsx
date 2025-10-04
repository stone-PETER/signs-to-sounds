import React from "react";
import "../App.css";
import "./HeroSection.css";

const HeroSection = () => (
  <section className="hero">
    <div className="hero-content section-inner">
      <h1>Signs to Sounds Productathon</h1>
      <p className="tagline">When Hands Speak, Tech Listens</p>
      <p className="intro">
        An international competition inspiring innovation in assistive
        technology for real-time sign language to speech conversion.
      </p>
      <div className="hero-actions">
        <button className="primary cta">Register</button>
        <button className="secondary alt">Learn More</button>
      </div>
    </div>
  </section>
);

export default HeroSection;
