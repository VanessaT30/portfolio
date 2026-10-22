import "../App.css";
import { Link } from "react-router-dom";
import { IoPersonOutline, IoBriefcaseOutline } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa6";
import { GoProjectRoadmap } from "react-icons/go";
import { IoIosStarOutline } from "react-icons/io";
import { PiHouseLine } from "react-icons/pi";

type NavbarProps = {
  activeSection: string;
};

export default function Navbar({ activeSection }: NavbarProps) {
  const links = [
    { id: "home", path: "/", label: "Home", icon: <PiHouseLine /> },
    {
      id: "about-me",
      path: "/AboutMe",
      label: "About Me",
      icon: <IoPersonOutline />,
    },
    {
      id: "experience",
      path: "/Experience",
      label: "Experience",
      icon: <IoBriefcaseOutline />,
    },
    {
      id: "education",
      path: "/Education",
      label: "Education",
      icon: <FaGraduationCap />,
    },
    // {
    //   id: "projects",
    //   path: "/Projects",
    //   label: "Projects",
    //   icon: <GoProjectRoadmap />,
    // },
    {
      id: "skills",
      path: "/Skills",
      label: "Skills",
      icon: <IoIosStarOutline />,
    },
  ];

  return (
    <nav className="nav">
      <ul className="nav-list">
        {links.map(({ id, path, label, icon }) => (
          <li key={id}>
            <Link
              to={path}
              className={`nav-link ${activeSection === id ? "active" : ""}`}
              aria-current={activeSection === id ? "page" : undefined}
            >
              {icon}
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
