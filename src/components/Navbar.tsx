import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import { IoPersonOutline, IoBriefcaseOutline } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa6";
import { GoProjectRoadmap } from "react-icons/go";
import { IoIosStarOutline } from "react-icons/io";
import { PiHouseLine } from "react-icons/pi";

export default function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`.trim()
            }
          >
            <PiHouseLine /> Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/AboutMe"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`.trim()
            }
          >
            <IoPersonOutline /> About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Experience"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`.trim()
            }
          >
            <IoBriefcaseOutline /> Experience
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Education"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`.trim()
            }
          >
            {" "}
            <FaGraduationCap /> Education
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Projects"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`.trim()
            }
          >
            <GoProjectRoadmap /> Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Skills"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`.trim()
            }
          >
            {" "}
            <IoIosStarOutline /> Skills
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
