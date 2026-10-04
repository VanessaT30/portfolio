import react from "react";
// import "../App.css";
import "../styles/AboutMe.css";
import { RiCodeSSlashFill } from "react-icons/ri";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { VscCoffee } from "react-icons/vsc";
import { VscLightbulbSparkle } from "react-icons/vsc";
import { PiBookOpenText } from "react-icons/pi";

const AboutMe = () => {
  return (
    <>
      <div className="title">
        <h1>About Me</h1>
      </div>

      <div>
        <div className="paragraphs">
          <p>
            I'm a Full-Stack Developer specialising in React and C#, based in
            Dublin, Ireland, and open to relocating. I've been working in tech
            for the past two years and genuinely enjoy building clean and
            structured applications, whether I'm working on the front end or the
            back end.
          </p>
          <p>
            My journey into tech wasn't a traditional one. I made a career
            change from psychology into software development, after putting
            together my first pc and I've never looked back. I enjoy the
            combination of creativity, technology, problem-solving, and
            structured logic that comes with development. I'm naturally curious
            and love understanding how things work, learning new technologies,
            and finding better ways to solve problems.
          </p>

          <p>
            For me, becoming a developer isn't just about learning how to write
            code. It's about constantly learning, improving, and challenging
            myself to understand something a little better than I did yesterday.
          </p>
          <p className="quote">
            “Wisdom is not a product of schooling but of the lifelong attempt to
            acquire it.” — Albert Einstein
          </p>
        </div>

        <div className="skillList">
          <div className="icon-position">
            <div className="icon">
              <RiCodeSSlashFill
                style={{
                  color: "var(--header-accent)",
                  fontSize: "2rem",
                }}
              />
            </div>
            <div>
              <h2>1+</h2>
              <p>year of experience in software development</p>
            </div>
          </div>

          <div className="icon-position">
            <div className="icon">
              <AiOutlineFundProjectionScreen
                style={{
                  color: "var(--header-accent)",
                  fontSize: "2rem",
                }}
              />
            </div>
            <div>
              <h2>10+</h2>
              <p>projects completed</p>
            </div>
          </div>

          <div className="icon-position">
            <div className="icon">
              <VscCoffee
                style={{
                  color: "var(--header-accent)",
                  fontSize: "2rem",
                }}
              />
            </div>
            <div>
              <h2>100%</h2>
              <p>Passion for coding</p>
            </div>
          </div>
          <div className="icon-position">
            <div className="icon">
              <VscLightbulbSparkle
                style={{
                  color: "var(--header-accent)",
                  fontSize: "2rem",
                }}
              />
            </div>
            <div>
              <h2>Problem Solver</h2>
              <p> I enjoy tackling complex challenges.</p>
            </div>
          </div>
          <div className="icon-position">
            <div className="icon">
              <PiBookOpenText
                style={{
                  color: "var(--header-accent)",
                  fontSize: "2rem",
                }}
              />
            </div>
            <div>
              <h2>Continuous Learner</h2>
              <p>Always exploring new technologies.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
