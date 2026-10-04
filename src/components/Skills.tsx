import {
  FaCode,
  FaDesktop,
  FaServer,
  FaCloud,
  FaGear,
  FaUsers,
} from "react-icons/fa6";
import "../styles/Skills.css";

type SkillCategory = {
  title: string;
  icon: React.ReactNode;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: <FaCode />,
    skills: ["Java", "JavaScript", "TypeScript", "SQL", "C#"],
  },
  {
    title: "Frontend",
    icon: <FaDesktop />,
    skills: [
      "React",
      "React Native",
      "HTML",
      "CSS",
      "Bootstrap",
      "Expo",
      "Angular",
      "Iconic",
    ],
  },
  {
    title: "Backend & Databases",
    icon: <FaServer />,
    skills: ["NodeJS", "Express.js", "MySQL", "APIs", "REST", "MSSQL", "SOAP"],
  },
  {
    title: "Tools & Platforms",
    icon: <FaCloud />,
    skills: ["Git", "GitHub", "Linux", "Azure", "AWS", "WordPress", "JUnit"],
  },
  {
    title: "Development Practices",
    icon: <FaGear />,
    skills: [
      "Agile",
      "Testing",
      "Debugging",
      "Problem Solving",
      "Version Control",
    ],
  },
  {
    title: "Soft Skills",
    icon: <FaUsers />,
    skills: ["Communication", "Teamwork", "Adaptability", "Time Management"],
  },
];

export default function Skills() {
  return (
    <section className="skills" aria-labelledby="skills-title">
      <div className="title">
        <h1>Experience</h1>
      </div>
      <p>
        A mix of technical skills and soft skills that help me build reliable,
        user-focused applications and collaborate effectively in team
        environments.
      </p>

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <article className="skill-card" key={category.title}>
            <div className="skill-icon" aria-hidden="true">
              {category.icon}
            </div>

            <h2>{category.title}</h2>

            <ul className="skill-list">
              {category.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
