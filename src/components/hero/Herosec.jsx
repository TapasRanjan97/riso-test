import React from "react";
import "./Herosec.css";
import Navbar from "../navbar/Navbar";
import hero from "../../assets/images/heroimg.png";
import navdot from "../../assets/images/hero-nav.svg";

function Herosec() {
  return (
    <div className="hero-container">
      <header className="head-sec">
        <Navbar />
        <div className="hero-sec-content">
          <div className="hero-img">
            <img src={hero} alt="riso app img" />
          </div>
          <div className="hero-nav-dots">
            <img src={navdot} alt="navigatiot dots" />
          </div>
          <div className="hero-text-container">
            <div className="hero-text">
              Discover your perfect career path with our expert counsellors and
              AI
            </div>
            <button className="talk-expert-btn">Talk to Experts</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Herosec;
