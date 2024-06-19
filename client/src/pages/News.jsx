import axios from "axios";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../components/Loader";

const Blog = () => {
  const [news, setNews] = useState([]);
  const [readMore, setReadMore] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/blogs`);
        console.log("API Response:", res.data); // Log the API response

        if (Array.isArray(res.data) && res.data.length > 0) {
          setNews(res.data);
          const initialReadMoreState = {};
          res.data.forEach((item) => {
            initialReadMoreState[item.id] = false;
          });
          setReadMore(initialReadMoreState);
          setLoading(false);
        } else {
          console.warn("No news data available or invalid response format");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching news data:", error);
        setLoading(false);
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

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="news">
      <header>
        <h2 data-aos="fade-right" className="animation">
          Recent Post<span className="underline"></span>
        </h2>
      </header>

      <div className="sub-container">
        {news.length > 0 ? (
          news.map((item) => (
            <div
              className="sub-news animation"
              key={item.id}
              data-aos="fade-right"
            >
              <a href={item.image} target="_blank" rel="noopener noreferrer">
                <img src={item.image} alt={item.title} />
              </a>

              <div>
                <h2>{item.title}</h2>
                <p>
                  {readMore[item.id] || item.desc.length < 90
                    ? item.desc
                    : `${item.desc.substring(0, 90)}...`}
                  {item.desc.length > 90 && (
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
          ))
        ) : (
          <p>No news available</p>
        )}
      </div>
    </div>
  );
};

export default Blog;
