// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="header"> CV Portfolio</div>

        <nav className="nav">
          <ul>
            <li>
              <a href="#work-experience">Experience</a>
            </li>
            <li>
              <a href="#work-experience">skills</a>
            </li>
            <li>
              <a href="#work-experience">projects</a>
            </li>
            <li>
              <a href="#work-experience">Work Experience</a>
            </li>
          </ul>
        </nav>

        <div className="main">
          <div className="experience">
            <h1>Experience</h1>
          </div>
          <div className="skills">
            <h1>Skills</h1>
          </div>
          <div className="projects">
            <h1>Projects</h1>
          </div>
          <div className="">
            <h1></h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
