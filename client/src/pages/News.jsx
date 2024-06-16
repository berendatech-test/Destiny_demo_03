import axios from "axios";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Blog = () => {
  const [news, setNews] = useState([]);

  // Initialize readMore state as an object with default false values for each news item
  const [readMore, setReadMore] = useState({});

  // Sample data to use if the API call fails or returns empty
  const sampleNews = [
    {
      id: 1,
      newsImage: "/news1.png",
      newsTitle: "Parents in Education",
      newsBody:
        "Research shows that when parents DREAM BIG for their child, they will strive to meet these aspirations. When school communities DREAM BIG for all students they become positive environments where all students are supported to achieve their potential and their dreams! Parents Engaged in Education have completed our first multi-year plan to encourage every student, parent, teacher and administrator in the province of Ontario to DREAM BIG! We are currently planning our next multi-year plan and will share those details when they are ready.",
    },
    {
      id: 2,
      newsImage: "/news2.png",
      newsTitle: "Source and aim of true education",
      newsBody:
        "OUR ideas of education take too narrow and too low a range. There is need of a broader scope and a higher aim. True education means more than the pursual of a certain course of study. It means more than a preparation for the life that now is. It has to do with the whole being, and with the whole period of existence possible to man. It is the harmonious development of the physical, the mental, and the spiritual powers. It prepares the student for the joy of service in this world, and for the higher joy of wider service in the world to come. . . .",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("back end is on development", {
          withCredentials: true,
        });
        console.log(res.data.news);
        setNews(res.data.news.length > 0 ? res.data.news : sampleNews);
        const initialReadMoreState = {};
        res.data.news.forEach((item) => {
          initialReadMoreState[item.id] = false;
        });
        setReadMore(initialReadMoreState);
      } catch (error) {
        console.error(error);
        setNews(sampleNews);
        const initialReadMoreState = {};
        sampleNews.forEach((item) => {
          initialReadMoreState[item.id] = false;
        });
        setReadMore(initialReadMoreState);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const handleRead = (id) => {
    setReadMore((prevReadMore) => ({
      ...prevReadMore,
      [id]: !prevReadMore[id],
    }));
  };

  return (
    <div className="news">
      <header>
        <h2 data-aos="fade-right" className="animation">
          Recent Post<span className="underline"></span>
        </h2>
      </header>

      <div className="sub-container">
        {news?.map((item) => (
          <div
            className="sub-news animation"
            key={item.id}
            data-aos="fade-right"
          >
            <img src={item.newsImage} alt={item.newsTitle} />

            <div>
              <h2>{item.newsTitle}</h2>
              <p>
                {readMore[item.id] || item.newsBody.length < 90
                  ? item.newsBody
                  : `${item.newsBody.substring(0, 90)}...`}
                {item.newsBody.length > 90 && (
                  <button
                    className="readMore-btn"
                    onClick={() => handleRead(item.id)}
                  >
                    {readMore[item.id] ? " _Show Less" : " _Show More"}
                  </button>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
