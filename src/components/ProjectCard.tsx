import { FaArrowRightLong } from "react-icons/fa6";
import "../styles/ProjectCard.css";

type ProjectCardProps = {
  src?: string;
  alt?: string;
  title?: string;
  description?: string;
  projectTags?: string[];
  link?: string;
};

export default function ProjectCard({
  src,
  alt,
  title,
  description,
  projectTags,
  link,
}: ProjectCardProps) {
  return (
    <>
      <div className="project-card">
        <img src={src} alt={alt} />
        <h1>{title}</h1>
        <p className="project-description">{description}.</p>

        <div className="project-tags">
          {projectTags?.map((p, index) => (
            <p key={index}>{p}</p>
          ))}
        </div>

        <div className="project-card-links">
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Project <FaArrowRightLong />
          </a>
        </div>
      </div>
    </>
  );
}
