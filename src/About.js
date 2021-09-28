import React from "react";
import "./About.css";
import DP from "./Untitled.png";
import { BiTask } from "react-icons/bi";

function About() {
  return (
    <div className="about-container">
      <img src={DP} alt="DisplayPicture" className="display-picture" />
      <div className="about-text">
        Hi, I am Chris. I am a self-taught front end web developer.
        <br />I am passionate in exploring and learning new technologies.
        <br />I also enjoy building all sorts of interesting projects!
      </div>
    </div>
  );
}

export default About;
