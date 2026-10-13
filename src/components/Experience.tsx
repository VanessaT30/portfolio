import "../styles/Experience.css";

const Experience = () => {
  return (
    <>
      <div className="mainExperience">
        <div className="title">
          <h1>Experience</h1>
        </div>
        <p>
          My professional journey so far, building and contributing to web
          applications.
        </p>

        <div className="timeline">
          <article className="experience-item">
            <div className="experience-item-header">
              <div className="headers">
                <h2>Junior Software Engineer</h2>
                <h3>Stratum | Dublin, Ireland</h3>
              </div>
              <p>Nov 2025 - Present</p>
            </div>
            <ul>
              <li>
                Implemented multiple REST and SOAP APIs for migrating customers
                to Azure cloud, focusing on improving data flow and system
                design and performance. Used Postman to test APIs and Visual
                Studio to debug and troubleshoot issues in the backend.
              </li>
              <li>
                Worked on a React Native mobile application used within a B2B
                transport management company, connecting it to a C# backend to
                retrieve and display data and creating interactive interfaces
                tailored to the needs of the project.
              </li>
              <li>
                Used Git and GitHub for version control, collaborating daily on
                code changes through pull requests and participating in code
                reviews.
              </li>
            </ul>
          </article>

          <article className="experience-item">
            <div className="experience-item-header">
              <div className="headers">
                <h2>Software Support Specialist</h2>
                <h3>Stratum | Dublin, Ireland</h3>
              </div>
              <p>Nov 2024 - Nov 2025</p>
            </div>
            <ul>
              <li>
                Daily troubleshooting and managing tickets on Jira with frequent
                issues being network connectivity, SMTP and Active directory
                issues
              </li>
              <li>
                Performed in-depth MSSQL database investigations, resolving
                discrepancy issues to improve data integrity.
              </li>
              <li>
                Delivered user training on product functionality by presenting
                live demonstrations and hands-on walkthroughs through Microsoft
                Teams and mobile mirroring tools.
              </li>
            </ul>
          </article>

          <article className="experience-item">
            <div className="experience-item-header">
              <div className="headers">
                <h2>Customer Service Agent</h2>
                <h3>Infosys | Dublin, Ireland</h3>
              </div>
              <p>March 2024 - May 2025</p>
            </div>
            <ul>
              <li>
                Developed and maintained web applications using React and
                Node.js.
              </li>
              <li>
                Collaborated with cross-functional teams to deliver high-quality
                software.
              </li>
              <li>Implemented responsive designs and optimized performance.</li>
            </ul>
          </article>
        </div>
      </div>
    </>
  );
};

export default Experience;
