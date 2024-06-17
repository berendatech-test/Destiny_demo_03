import Schedule from "../components/Schedule";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Academics = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="academics">
      <h1 className="title">Academics</h1>
      <div className="sub-academics">
        <div className="academics-header-right">
          <img src="/curriculum.png" alt="curriculum image" />
        </div>
        <div className="academics-header-left animation" data-aos="fade-right">
          <h2>School Curriculum</h2>{" "}
          <p>
            The new curriculum has been implemented from 1st to 8th grade in our
            academy since the start of the new academic year 2015 EC.
          </p>
        </div>
      </div>
      <h1 className="title">Bell Schedule</h1>
      <Schedule />
      <div className="programs-container animation" data-aos="zoom-in">
        <div className="programs library-resources">
          <div className="content-wrapper">
            <img
              src="books.jpg"
              alt="Library Resources Image"
              className="programs-image"
            />
            <div className="text-content">
              <h2>Library Resources</h2>
              <p>
                Explore a vast collection of books, digital resources, and
                interactive learning tools in our school library. Our resources
                are designed to foster a love for reading and support student
                learning across all subjects.
              </p>
            </div>
          </div>
        </div>
        <div className="programs special-programs">
          <div className="content-wrapper">
            <img
              src="programs.jpg"
              alt="Special Academic Programs Image"
              className="programs-image"
            />
            <div className="text-content">
              <h2>Special Academic Programs</h2>
              <p>
                Our special academic programs provide enriched learning
                opportunities for students. From gifted and talented programs to
                STEM initiatives, we offer a range of programs to inspire and
                challenge our students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
