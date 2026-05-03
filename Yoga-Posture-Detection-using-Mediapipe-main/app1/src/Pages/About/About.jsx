import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container container">
      <div className="about-header">
        <h1 className="about-title">About <span className="text-gradient">Us</span></h1>
        <p className="about-subtitle">
          PosePerfect is an AI-based fitness platform that helps users perform yoga poses correctly using real-time posture detection technology.
        </p>
      </div>

      <div className="glass-panel about-mission mb-5" style={{ marginTop: "0" }}>
        <h2 className="mission-title">Our Purpose</h2>
        <p className="mission-text">
          Our goal is to make yoga learning easier, safer, and accessible for everyone from home. By leveraging modern AI, we act as your personal virtual instructor, ensuring your form is perfect no matter where you practice.
        </p>
      </div>

      <h2 className="text-center text-white mb-4 fw-bold">Key <span className="text-gradient">Features</span></h2>
      <div className="row g-4 justify-content-center">
        
        <div className="col-md-4">
          <div className="glass-panel tech-card text-center align-items-center">
            <div className="tech-icon mx-auto">
              <span>🎯</span>
            </div>
            <h3 className="tech-title text-center w-100">Real-time Detection</h3>
            <p className="tech-desc text-center">
              Instantly tracks your body's movements and landmarks via your webcam with zero lag.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="glass-panel tech-card text-center align-items-center">
            <div className="tech-icon mx-auto">
              <span>⚖️</span>
            </div>
            <h3 className="tech-title text-center w-100">Correction Feedback</h3>
            <p className="tech-desc text-center">
              Evaluates your joint angles to ensure your form is safe and accurate.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="glass-panel tech-card text-center align-items-center">
            <div className="tech-icon mx-auto">
              <span>🏠</span>
            </div>
            <h3 className="tech-title text-center w-100">Home Guidance</h3>
            <p className="tech-desc text-center">
              Practice in the comfort of your own living room with an easy-to-use, accessible interface.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
