import "../styles/Education.css";
import { LuGraduationCap } from "react-icons/lu";

export default function Education() {
  return (
    <>
      <div className="MainEducation">
        <div className="title">
          <h1>Education</h1>
        </div>

        <p>
          My education journey has been a transformative experience, shaping my
          knowledge and skills in the field of software development. I have
          pursued a comprehensive curriculum that encompasses both theoretical
          foundations and practical applications, allowing me to develop a
          strong understanding of programming languages, algorithms, and
          software engineering principles. Through hands-on projects and
          collaborative learning, I have honed my problem-solving abilities and
          gained valuable experience in building real-world applications. My
          education has not only equipped me with technical expertise but also
          fostered critical thinking, adaptability, and a passion for continuous
          learning in the ever-evolving tech industry.
        </p>

        {/* <div className="timeline"> */}
        <article className="experience-article">
          <div className="experience-item-header">
            <div className="headers">
              <div className="cap">
                {" "}
                <LuGraduationCap size={30} />
                <h2>Software Development</h2>
              </div>
              <h3>Atlantic Technological University | Higher Diploma | 1.1</h3>
            </div>
            <p>Jan 2023 - Jan 2025</p>
          </div>
          <ul>
            <li className="points">
              I developed many projects that can be seen featured on this site.
              Namely the skincare website and my Java Programme that could
              encrypt/decrypt an inputted text file from the user.
            </li>
            <li className="points">
              Some subjects I included:
              <li className="subjects">
                Object Oriented Software Development (Grade: 1.1)
              </li>
              <li className="subjects">
                Computer Architecture Technology Convergence (Grade: 1.1)
              </li>
              <li className="subjects">
                Computational Thinking with Algorithms (Grade: 1.1)
              </li>
            </li>
          </ul>
        </article>

        <article className="experience-article">
          <div className="experience-item-header">
            <div className="headers">
              <div className="cap">
                {" "}
                <LuGraduationCap size={30} />
                <h2>Psychology and Wellbeing</h2>
              </div>
              <h3>Dublin City University | M.Sc. | 2.1</h3>
            </div>
            <p>Aug 2019 - Oct 2020</p>
          </div>
          <ul>
            <li className="points">
              I completed my thesis on the impact of personality factors on
              anxiety and depression symptoms. Whether or not I continued with
              this career, it has definitely given me more understanding and
              patience when it comes to dealing with difficult situations.
            </li>
            <li className="points">
              Some subjects I included:
              <li className="subjects">
                Object Oriented Software Development (Grade: 1.1)
              </li>
              <li className="subjects">
                Computer Architecture Technology Convergence (Grade: 1.1)
              </li>
              <li className="subjects">
                Computational Thinking with Algorithms (Grade: 1.1)
              </li>
            </li>
          </ul>
        </article>

        <article className="experience-article">
          <div className="experience-item-header">
            <div className="headers">
              <div className="cap">
                {" "}
                <LuGraduationCap size={30} />
                <h2>Software Engineer</h2>
              </div>
              <h3>Dublin Business School | BA Hons | 1.1 </h3>
            </div>
            <p>Jan 2016 - 2019</p>
          </div>
          <ul>
            <li className="points">
              My thesis was on whether personality aleviates aggression after
              playing violent video games. I enjoyed the crossover beteween
              technology and research and it was around this time I had started
              to explore the idea of a career in technology.
            </li>
            <li className="points">
              Some subjects I included:
              <li className="subjects">Neuropsychopharmacology (Grade: 1.1)</li>
              <li className="subjects">
                Organisational Psychology (Grade: 1.1)
              </li>
              <li className="subjects">Behaviour Science (Grade: 1.1)</li>
            </li>
            <li>Implemented responsive designs and optimized performance.</li>
          </ul>
        </article>
      </div>
      {/* </div> */}
    </>
  );
}

// I learned about the impact of early life development on people and
// completed my thesis on the impact of personality factors on
// anxiety and depression symptoms. Whether or not this is used in my
// day to day life, it has definitely given me more understanding and
// patience when it comes to dealing with difficult situations.
