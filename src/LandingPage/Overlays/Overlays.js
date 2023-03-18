import { React, useState, useEffect } from "react";
import { gsap } from "gsap";
import "./OverlayStyle.css";

const Overlays = () => {
  useEffect(() => {}, []);

  return (
    <div className="overlays-container">
      <div className="top-overlays-container">
        <div className="top-overlay"> </div>
        <div className="top-overlay"> </div>
        <div className="top-overlay"> </div>
      </div>
    </div>
  );
};

export default Overlays;
