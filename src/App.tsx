import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/Header.tsx";
import Navbar from "./components/Navbar.tsx";
import AboutMe from "./components/AboutMe.tsx";
import "./App.css";
import Experience from "./components/Experience.tsx";
import Education from "./components/Education.tsx";
import Skills from "./components/Skills.tsx";
// import Projects from "./components/Projects.tsx";
import Home from "./components/Home.tsx";

const sections = [
  { id: "home", path: "/", component: Home },
  { id: "about-me", path: "/AboutMe", component: AboutMe },
  { id: "experience", path: "/Experience", component: Experience },
  { id: "education", path: "/Education", component: Education },
  // { id: "projects", path: "/Projects", component: Projects },
  { id: "skills", path: "/Skills", component: Skills },
];

function App() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionId =
      sections.find((section) => section.path === location.pathname)?.id ??
      "home";

    document.getElementById(sectionId)?.scrollIntoView({ block: "start" });
  }, [location.pathname]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        const visibleSection = visibleSections[0];
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );

    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="shell">
        <div className="container">
          <Header />
          <Navbar activeSection={activeSection} />

          <main className="main">
            {sections.map(({ id, component: Section }) => (
              <section className="page-section" id={id} key={id}>
                <Section />
              </section>
            ))}
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
