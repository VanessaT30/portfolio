import { RiCodeSSlashFill } from "react-icons/ri";

export default function ListOfSkills() {
  return (
    <>
      <div className="AboutMeList">
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
            <p>years of experience in software development</p>
          </div>
        </div>
      </div>
    </>
  );
}
