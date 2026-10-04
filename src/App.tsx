// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import React from "react";
import Header from "./components/Header.tsx";
import Navbar from "./components/Navbar.tsx";
import AboutMe from "./components/AboutMe.tsx";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Experience from "./components/Experience.tsx";
import Education from "./components/Education.tsx";
import Skills from "./components/Skills.tsx";
import Projects from "./components/Projects.tsx";
import Home from "./components/Home.tsx";

function App() {
  return (
    <>
      <div className="shell">
        <div className="container">
          <Header />
          <Navbar />

          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
              <Route path="/AboutMe" element={<AboutMe />} />
            </Routes>
            <Routes>
              <Route path="/Experience" element={<Experience />} />
            </Routes>
            <Routes>
              <Route path="/Education" element={<Education />} />
            </Routes>
            <Routes>
              <Route path="/Skills" element={<Skills />} />
            </Routes>
            <Routes>
              <Route path="/Projects" element={<Projects />} />
            </Routes>
          </main>
          <footer className="footer">
            ©2026 Vanessa Tolentino. All rights reserved ❤
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
