import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="overview">
      <header>
        <h2 className="animation" data-aos="fade-right">
          Our Vision<span className="underline"></span>
        </h2>
      </header>
      <h1>WHO WE ARE</h1> <br /> <br />
      <i>
        “Learning is not attained by chance; it must be sought for with ardor
        and attended to with diligence.”
      </i>
      <br />
      <br />
      <p className="overview_p animation" data-aos="fade-left">
        <b className="first-letter">D</b>estiny Academy strives to have a
        positive impact on society through values-based education. Teachers are
        committed to educating the whole child–mentally, physically,
        emotionally–and place a special emphasis on the virtues of respect,
        diligence, love, honesty, and peace. Destiny Academy has always been a
        school with a big vision driven by a passion for the poor. It is located
        in the Gofa community which is home to tens of thousands of
        impoverished, uneducated children. Their families cannot afford to send
        them to public schools due to the high cost of tuition, uniforms, and
        school supplies. Destiny Academy provides Gofa’s children a chance to go
        to school regardless of their ability to pay.
        <br />
      </p>
      <div className="principal-msg">
        <img src="/principal.png" alt="principal image" />
        <div className="animation" data-aos="fade-left">
          <h1>Principal&#39;s Message</h1>
          <p>
            <i>
              {" "}
              &ldquo; <b className="first-letter">W</b>elcome to Destiny Future
              Academy, a Distinguished School in Addis Ababa, Ethiopia! We
              proudly serve approximately 600 students in transitional
              kindergarten through Eighth grade. Situated on midway from Gofa to
              German Square, Addis Ababa. Destiny Future Academy is a tight-knit
              school community that offers engaging, relevant, and rigorous core
              activities with supplemental programming and experiences
              consistent with our school’s vision: academic excellence through
              technology and the arts. Our highly trained and dedicated staff
              work collaboratively with our parent community and our school
              foundation to challenge students to set high expectations for
              achievement and provide opportunities for them to grow and learn
              in a safe environment. &rdquo;
            </i>
          </p>
          <br />
          <br />
          <h2>
            Hareg Geressu <br />
            Founder & Managing Director
          </h2>
        </div>
      </div>
    </div>
  );
}
