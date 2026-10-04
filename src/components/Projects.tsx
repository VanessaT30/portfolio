import "../App.css";
import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";
import HeaderImage from "../assets/HeaderImage2.png";

export default function Projects() {
  return (
    <>
      <div className="title">
        <h1>Projects</h1>
      </div>

      <h3>
        A section of projects I've worked on, each one helped me grow my skills
        and explore tools and techniques I am interested in
      </h3>

      <article className="Projects-container">
        <ProjectCard src={HeaderImage} alt="Project 1" />
        <ProjectCard src={HeaderImage} alt="Project 2" />
        <ProjectCard src={HeaderImage} alt="Project 3" />
        <ProjectCard src={HeaderImage} alt="Project 4" />
        <ProjectCard src={HeaderImage} alt="Project 5" />
        <ProjectCard src={HeaderImage} alt="Project 6" />
      </article>
    </>
  );
}
