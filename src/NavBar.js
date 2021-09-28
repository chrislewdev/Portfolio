import React from "react";
import "./NavBar.css";
import LOGO from "./C.jpg";

function NavBar({ handleClick }) {
  return (
    <div className="navbar-container">
      <img src={LOGO} className="logo" onClick={() => handleClick("home")} />
      <div className="buttons-container">
        <div className="navbar-buttons" onClick={() => handleClick("about")}>
          About
        </div>
        <div className="navbar-buttons" onClick={() => handleClick("skills")}>
          Skills
        </div>
        <div className="navbar-buttons" onClick={() => handleClick("projects")}>
          Projects
        </div>
      </div>
    </div>
  );
}

export default NavBar;
