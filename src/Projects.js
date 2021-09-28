import React from "react";
import "./Project.css";
import poe from "./poeVoucher.png";
import petsgram from "./Petsgram.jpg";
import { BiTask } from "react-icons/bi";

function Projects() {
  return (
    <div className="projects-container">
      <div className="page-title">
        <div>
          <BiTask className="page-icons" />
        </div>
        <div className="page-title-name">Projects</div>
      </div>
      <div className="project">
        <img src={poe} className="project-image" />
        <div className="project-details">
          <div className="project-title">poeVoucher</div>
          <div className="project-description">
            A service trading platform for an online ARPG: Path Of Exile
            <br />
            Users can browse available listings, create new listing, and most
            importantly VOUCH other users for successful service provided.
          </div>
          {/* <div className="project-link">https://poevouchers.web.app/</div> */}
          <a
            href="https://poevouchers.web.app"
            target="_blank"
            className="project-link"
          >
            https://poevouchers.web.app
          </a>
          <div className="project-test-account">
            Test Account:
            <br />
            Email: testOne@gmail.com
            <br />
            Password: testone
          </div>
        </div>
      </div>
      <div className="project">
        <img src={petsgram} className="project-image" />
        <div className="project-details">
          <div className="project-title">Petsgram</div>
          <div className="project-description">
            An Instagram clone web app designed for pets.
            <br />
            Its an early practical project without hosting, therefore no
            showcase available.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
