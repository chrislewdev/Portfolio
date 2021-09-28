import React from "react";
import "./Skills.css";
import HTML from "./HTML.png";
import CSS from "./CSS.png";
import JS from "./JS.png";
import REACT from "./REACT.png";
import FIREBASE from "./FIREBASE.png";
import GITHUB from "./GITHUB.png";
import NPM from "./NPM.png";
import { BiAtom } from "react-icons/bi";

function Skills() {
  return (
    <div className="skills-container">
      <div className="page-title">
        <div>
          <BiAtom className="page-icons" />
        </div>
        <div className="page-title-name">Skills</div>
      </div>
      <div className="skill-container">
        <div className="skill">
          <img src={HTML} className="skill-icon" />
        </div>
        <div className="skill">
          <img src={CSS} className="skill-icon" />
        </div>
        <div className="skill">
          <img src={JS} className="skill-icon" />
        </div>
        <div className="skill">
          <img src={REACT} className="skill-icon" />
        </div>
        <div className="skill">
          <img src={FIREBASE} className="skill-icon" />
        </div>
        <div className="skill">
          <img src={GITHUB} className="skill-icon" />
        </div>
        <div className="skill">
          <img src={NPM} className="skill-icon" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
