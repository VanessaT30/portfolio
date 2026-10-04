import react from "react";
import "../App.css";
import headerImage from "../assets/HeaderImage2.png";
import { FaRegEnvelope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import "../styles/Header.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header-text">
          <h2>HELLO I'M</h2>
          <h1>Vanessa Tolentino</h1>
          <h2> Software Developer · Frontend Developer</h2>
        </div>

        <div className="header-content">
          <div>
            <p>I build things for the web.</p>
          </div>
          <div className="header-social">
            <div className="social-links">
              <div className="social-link">
                <FaRegEnvelope
                  style={{
                    color: "var(--header-accent)",
                    fontSize: "1.25rem",
                  }}
                />
                <a href="mailto:vtolentino3011@proton.me">Email</a>
              </div>{" "}
              <div className="social-link">
                <FaGithub
                  // className="social-link"
                  style={{
                    color: "var(--header-accent)",
                    fontSize: "1.25rem",
                  }}
                />
                <a
                  href="https://github.com/vanessatolentino"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>{" "}
              <div className="social-link">
                <FaLinkedinIn
                  style={{
                    color: "var(--header-accent)",
                    fontSize: "1.25rem",
                  }}
                />
                <a
                  href="https://www.linkedin.com/in/vanessa--tolentino/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <img
            src={headerImage}
            alt="Header Image"
            style={{ maxWidth: "100%", height: "15rem" }}
            className="header-img"
          />
        </div>
      </div>
      <hr />
    </>
  );
}
