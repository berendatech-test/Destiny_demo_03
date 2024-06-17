import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Events = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="section-container animation" data-aos="zoom-in">
      <div className="section latest-news">
        <img
          src="/school_news.jpg"
          alt="Latest News Image"
          className="section-image"
        />
        <h2>Latest News</h2>
        <p>
          Stay updated with the latest news and events happening in our school
          community. From exciting activities to important announcements, you
          will find it all here.
        </p>
        <a href="/blog">
          <button className="learn-more">Learn More</button>
        </a>
      </div>
      <div className="section upcoming-events">
        <img
          src="/events.jpg"
          alt="Upcoming Events Image"
          className="section-image"
        />
        <h2>Upcoming Events</h2>
        <p>
          Do not miss out on our upcoming events! Join us for fun and
          educational activities that bring our school community together. Check
          out what is coming up next.
        </p>
        <a href="/gallery">
          <button className="learn-more">Learn More</button>
        </a>
      </div>
    </div>
  );
};

export default Events;
