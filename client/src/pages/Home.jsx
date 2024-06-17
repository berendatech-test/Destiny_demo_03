import CountUp from "react-countup";
import Section from "../components/section";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <>
      <div className="home ">
        <div
          className="home-container animation"
          data-aos="zoom-in"
          style={{ zIndex: "0" }}
        >
          <h1 className="title">Welcome to Destiny Future Academy</h1>
          <h1 className="title">Education Opens up the Mind</h1>
          <p>
            Develop a passion for learning. If you do, you will never cease to
            grow
          </p>

          <a href="#value">
            <button className="home-btn">EXPLORE</button>
          </a>

          <div className="awards-container">
            <div>
              <h2>
                <CountUp start={0} end={600} duration={8} />{" "}
                <span className="awards-span">+</span>
              </h2>
              <p>Students Served</p>
            </div>

            <div>
              <h2>
                <CountUp start={0} end={1200} duration={8} />{" "}
                <span className="awards-span">+</span>
              </h2>
              <p>Happy Parents</p>
            </div>
          </div>
        </div>
      </div>
      <Section />
    </>
  );
};

export default Home;
