import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import img25 from "../../assets/yoga25.jpg"; // Using an existing elegant image

const Home = () => {
  return (
    <div className="home-hero">
      <div className="container">
        <div className="row align-items-center min-vh-75">
          <div className="col-lg-6 hero-content py-5">
            
            <h1 className="hero-title">
              Perfect Your Form With <span className="text-gradient">PosePerfect</span>
            </h1>
            <p className="hero-subtitle">
              Elevate your yoga practice using real-time computer vision. Get instant, precise feedback on your alignment to prevent injuries and master complex poses from the comfort of your home.
            </p>
            <div className="hero-buttons">
              <Link to="/learn" className="btn btn-premium btn-lg">
                Start Practicing
              </Link>
              <Link to="/about" className="btn btn-outline-premium btn-lg">
                How It Works
              </Link>
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-flex justify-content-center">
            <div className="hero-image-wrapper">
              <img 
                src={img25} 
                alt="Yoga Pose Demonstration" 
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
