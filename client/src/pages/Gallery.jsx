import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="gallery">
      <h1 className="title">Gallery</h1>
      <div className="sub-gallery animation" data-aos="zoom-in">
        <div className="image">
          <a href="/culture.jpg" target="_blank">
            <a href="/culture.jpg" target="_blank">
              <img src="/culture.jpg" alt="culture image" />
            </a>
            <div className="image_overlay">
              <div className="image_title">Cultures Day</div>
              <p>Celebrating Diversity and Heritage</p>
            </div>
          </a>
        </div>
        <div className="image">
          <a href="/volunteer.jpg" target="_blank">
            <img src="/volunteer.jpg" alt="volunteer image" />
            <div className="image_overlay">
              <div className="image_title">Community Service</div>
              <p>Building Stronger Communities Together</p>
            </div>
          </a>
        </div>
        <div className="image">
          <a href="/leaders.jpg" target="_blank">
            <img src="/leaders.jpg" alt="leaders image" />
            <div className="image_overlay">
              <div className="image_title">Future Leaders</div>
              <p>Inspiring Tomorrows Innovators</p>
            </div>
          </a>
        </div>
        <div className="image">
          <a href="/clean.jpg" target="_blank">
            <img src="/clean.jpg" alt="leaders image" />
            <div className="image_overlay">
              <div className="image_title">Keep It Clean</div>
              <p>Promoting a Safer School Environment</p>
            </div>
          </a>
        </div>
        <div className="image">
          <a href="/color.jpg" target="_blank">
            <img src="/color.jpg" alt="color day image" />
            <div className="image_overlay">
              <div className="image_title">Color Day </div>
              <p>Embracing Vibrant Creativity</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
