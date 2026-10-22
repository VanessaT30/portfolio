import "../App.css";
import "../styles/AboutMe.css";
import { RiCodeSSlashFill } from "react-icons/ri";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { VscCoffee } from "react-icons/vsc";
import ProjectCard from "./ProjectCard";
// import HeaderImage from "../../public/HeaderImage2.png";
import "../styles/Home.css";
import projects from "./data/projects.json";

const Home = () => {
  // const [projects, setProjects] = useState([]);
  // useEffect(() => {
  //   try {
  //     fetch("./data/projects.json")
  //       .then((res) => res.json())
  //       .then((proj) => setProjects(proj));
  //   } catch (error) {
  //     console.log("There was an error getting json data");
  //   }
  // }, []);

  return (
    <>
      <div>
        <div className="title">
          <h1>Home</h1>
        </div>

        <div className="AboutMe">
          <div className="skill-points">
            <div>Hello, I'm Vanessa, Welcome to my website!</div>
            <div>
              I am a software developer with a passion for creating beautiful
              and functional applications. I have experience in front-end and
              back-end development, and I am always looking to learn new
              technologies and improve my skills.
            </div>
            <div>Hang around or check out some of my projects!</div>
            <button>
              <a href={`${import.meta.env.BASE_URL}CV.VanessaT.pdf`} download>
                Download CV
              </a>
            </button>
          </div>

          <div className="SkillList">
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
                <h2>1.5</h2>
                <p>years of experience</p>
              </div>
            </div>

            <hr />

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

            <hr />

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
          </div>
        </div>

        <div className="title">
          <h1>Featured Projects</h1>
        </div>
        <div className="projects">
          {projects?.slice(0, 3).map((project, i) => (
            <ProjectCard
              key={project.title || i}
              src={`${import.meta.env.BASE_URL}${project.src?.replace(/^\/+/, "")}`}
              alt={project.alt || "Project image"}
              title={project.title}
              description={project.description}
              projectTags={project["project-tags"] || []}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

//           <div className="SkillList">
//     <div className="icon-position">
//       <div className="icon">
//         <RiCodeSSlashFill
//           style={{
//             color: "var(--header-accent)",
//             fontSize: "2rem",
//           }}
//         />
//       </div>
//       <div>
//         <h2>1+</h2>
//         <p>years of experience in software development</p>
//       </div>
//     </div>

//     <div className="icon-position">
//       <div className="icon">
//         <AiOutlineFundProjectionScreen
//           style={{
//             color: "var(--header-accent)",
//             fontSize: "2rem",
//           }}
//         />
//       </div>
//       <div>
//         <h2>1+</h2>
//         <p>years of experience in software development</p>
//       </div>
//     </div>
//     <div className="icon-position">
//       <div className="icon">
//         <VscCoffee
//           style={{
//             color: "var(--header-accent)",
//             fontSize: "2rem",
//           }}
//         />
//       </div>
//       <div>
//         <h2>1+</h2>
//         <p>years of experience in software development</p>
//       </div>
//     </div>
//   </div>
// </div>
