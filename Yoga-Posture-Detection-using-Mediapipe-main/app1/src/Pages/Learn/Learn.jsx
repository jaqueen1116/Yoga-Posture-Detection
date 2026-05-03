import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/yoga12.jpg";
import img2 from "../../assets/yoga15.jpg";
import img3 from "../../assets/yoga19.jpg";
import img4 from "../../assets/yoga20.jpg";
import img5 from "../../assets/yoga25.jpg";
import img6 from "../../assets/yoga232.png"; // Reverted to available image
import img7 from "../../assets/yoga9.jpg";
import "./Learn.css";

const poses = [
  { id: "yog1", title: "Warrior Pose", img: img1 },
  { id: "yog2", title: "T Pose", img: img5 },
  { id: "yog3", title: "Tree Pose", img: img4 },
  { id: "yog4", title: "Side Plank", img: img2 },
  { id: "yog5", title: "Dolphin Pose", img: img6 },
  { id: "yog6", title: "Downward Dog Pose", img: img7 },
];

const Learn = () => {
  return (
    <div className="learn-container container">
      <div className="learn-header">
        <h1 className="learn-title">Master Your <span className="text-gradient">Poses</span></h1>
        <p className="learn-subtitle">
          Select a pose to begin your AI-guided session. Ensure your camera is enabled and your full body is visible in the frame.
        </p>
      </div>

      <div className="row g-4">
        {poses.map((pose, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={index}>
            <div className="glass-panel pose-card">
              <div className="pose-card-img-wrapper">
                <img src={pose.img} alt={pose.title} className="pose-card-img" />
              </div>
              <div className="pose-card-body">
                <h3 className="pose-card-title">{pose.title}</h3>
                <Link to={`/learn/${pose.id}`} className="pose-card-btn text-decoration-none">
                  <div className="btn btn-premium w-100">
                    Practice Pose
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learn;
