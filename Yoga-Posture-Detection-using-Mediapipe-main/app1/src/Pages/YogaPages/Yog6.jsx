import React, { useState } from "react";
import "./Yog1.css";
import yoga9 from "../../assets/yoga9.jpg";
import Disclaimer from "../../Components/Disclaimer/Disclaimer";

const Yog6 = () => {
  const [isStartPose, setIsStartPose] = useState(false);
  const [status, setStatus] = useState("");

  function startYoga() {
    setIsStartPose(true);
    setStatus("Connecting to camera...");
    fetch("http://localhost:8080/api/mediapipe/yog6", {
      method: "POST",
    }).then((response) => {
      if (response.ok) {
        setStatus("Session completed successfully.");
      } else {
        setStatus("Error: Camera access blocked or server failed.");
      }
    }).catch(() => {
      setStatus("Error: Cannot connect to server.");
    });
  }

  return (
    <div className="pose-page-container container">
      <h1 className="pose-title">Downward Dog <span className="text-gradient">Pose</span></h1>
      
      <div className="pose-content-wrapper">
        <div className="glass-panel pose-info-panel">
          <ul className="pose-info-list">
            <li>Tones the core and strengthens the bones</li>
            <li>Works the back of the legs and stretches the hamstrings</li>
            <li>Improves blood flow to the brain and deeply stretches the back</li>
            <li>Strengthens the arms and improves posture</li>
          </ul>
          
          <div className="pose-controls">
            <button 
              onClick={startYoga} 
              className="btn btn-premium btn-lg w-100"
              disabled={isStartPose && status === "Connecting to camera..."}
            >
              {status === "Connecting to camera..." ? "Starting..." : "Start Pose"}
            </button>
            {status && <div className="status-message">{status}</div>}
            <Disclaimer />
          </div>
        </div>

        <div className="pose-image-panel">
          <div className="pose-image-wrapper">
            <img src={yoga9} alt="Downward Dog Pose" className="pose-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yog6;
