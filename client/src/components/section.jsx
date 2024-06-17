import IMG2 from "/image1.png";
import { IoMdHappy } from "react-icons/io";
import { IoMdArrowDropdown, IoMdSchool } from "react-icons/io";
import { MdHealthAndSafety } from "react-icons/md";
import { useEffect, useState } from "react";
import Events from "./Events";
import AOS from "aos";
import "aos/dist/aos.css";

const Section = () => {
  const [accordionOne, setAccordionOne] = useState(false);
  const [accordionTwo, setAccordionTwo] = useState(false);
  const [accordionThree, setAccordionThree] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <>
      <div className="value" id="value">
        <div className="value-img">
          <img src={IMG2} alt="value" />
        </div>
        <div className="value-right animation" data-aos="fade-left">
          <div className="accordion-title">
            <h2 style={{ color: "#FFA500" }}>Our Value</h2>
            <h1 style={{ color: "#1F3E72" }}>Value We Give to You</h1>
            <p style={{ fontSize: "0.9rem", color: "#888", fontWeight: "100" }}>
              We always ready to help by providing the best services <br /> for
              you.We believe a good place to learn can make life better
            </p>
          </div>

          <div className="sub-accordion-container">
            <div className="accordion-header">
              <IoMdHappy className="value-icon" />
              <h3>Fun Learning Environment</h3>
              <button
                onClick={() => {
                  setAccordionOne(!accordionOne);
                }}
              >
                <IoMdArrowDropdown className="value-icon" />{" "}
              </button>
            </div>
            <div>
              {accordionOne ? (
                <p>
                  Our school provides a fun and engaging learning environment
                  where students are excited to come to class every day. We
                  believe that learning should be enjoyable and interactive,
                  fostering a love for education from an early age.
                </p>
              ) : null}
            </div>
          </div>

          <div className="sub-accordion-container">
            <div className="accordion-header">
              <MdHealthAndSafety className="value-icon" />
              <h3>Safe and Supportive Atmosphere</h3>
              <button
                onClick={() => {
                  setAccordionTwo(!accordionTwo);
                }}
              >
                <IoMdArrowDropdown className="value-icon" />{" "}
              </button>
            </div>
            <div>
              {accordionTwo ? (
                <p>
                  We prioritize creating a safe and supportive atmosphere for
                  all our students. Our staff is dedicated to ensuring that
                  every child feels secure and valued, promoting both emotional
                  and academic growth.
                </p>
              ) : null}
            </div>
          </div>

          <div className="sub-accordion-container">
            <div className="accordion-header">
              <IoMdSchool className="value-icon" />
              <h3>Experienced and Caring Teachers</h3>
              <button
                onClick={() => {
                  setAccordionThree(!accordionThree);
                }}
              >
                <IoMdArrowDropdown className="value-icon" />{" "}
              </button>
            </div>
            <div>
              {accordionThree ? (
                <p>
                  Our experienced and caring teachers are committed to nurturing
                  each student potential. With personalized attention and a
                  passion for teaching, they guide students on their journey to
                  success and lifelong learning.
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Events />
      </div>
      <div className="subscribe">
        <div className="subscribe-container">
          <div style={{ marginTop: "60px" }}>
            <h1 className="popularh2">
              Get started with Destiny Future Academy
            </h1>
            <p>Subscribe and find super efficient way of learning</p>
            <a href="mailto:bereketteshome685@gmail.com">
              <button>Get Started</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
