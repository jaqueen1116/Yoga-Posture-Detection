import React from "react";
import "./Disclaimer.css";

const Disclaimer = () => {
  return (
    <div className="disclaimer-card">
      <div className="disclaimer-section">
        <span className="disclaimer-icon">🔒</span>
        <p className="disclaimer-text">
          <strong>Privacy:</strong> Your webcam video is processed entirely locally on your device. We do not record, upload, or save your camera feed to any database.
        </p>
      </div>
      
    </div>
  );
};

export default Disclaimer;
