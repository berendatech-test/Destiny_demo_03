import React from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation

const SpecialPrograms = () => {
  return (
    <div className="special-programs-page">
      <div className="library-header">
        <h1 className="title" style={{ textAlign: "center", flex: "1" }}>
          Special Programs
        </h1>
        <Link to="/library">
          <i>Library</i>
        </Link>
      </div>
      <div className="content-wrapper">
        <img
          src="programs.jpg"
          alt="Special Academic Programs Image"
          className="programs-image"
        />
        <div className="text-content">
          <p>
            At our school, we are committed to providing specialized classes and
            support for students with special needs. These programs are designed
            to cater to their unique learning requirements and help them thrive
            academically and socially.
          </p>
          <div className="programs-list">
            <div className="program-item">
              <h3>Gifted and Talented Programs</h3>
              <p>
                Tailored curriculum and activities to challenge and engage
                intellectually advanced students.
              </p>
            </div>
            <div className="program-item">
              <h3>STEM Initiatives</h3>
              <p>
                Science, Technology, Engineering, and Mathematics programs to
                foster innovation and problem-solving skills.
              </p>
            </div>
            <div className="program-item">
              <h3>Life Skills Training</h3>
              <p>
                Practical education in daily living skills to promote
                independence and self-reliance.
              </p>
            </div>
            <div className="program-item">
              <h3>Social and Emotional Learning</h3>
              <p>
                Programs to develop social skills, emotional regulation, and
                interpersonal relationships.
              </p>
            </div>
          </div>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <button
              className="learn-more-button"
              style={{
                backgroundColor: "#FFA500",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "20px",
              }}
            >
              Contact Us for More Information
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpecialPrograms;
