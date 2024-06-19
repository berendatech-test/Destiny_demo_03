import React from "react";
import { Link } from "react-router-dom";

const Library = () => {
  const ebooks = [
    {
      id: 1,
      title: "Chemistry",
      author: "Grade 7",
      imageUrl: "./physics.jpg",
      downloadLink:
        "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiZpPPV8ueGAxXNSfEDHYVuAY8QFnoECBAQAQ&url=https%3A%2F%2Fchilot.wordpress.com%2Fwp-content%2Fuploads%2F2023%2F02%2F83fa6-grade-7-physics-textbook.pdf&usg=AOvVaw0RGAsYTzk15lgede8DMxgM&opi=89978449",
    },
    {
      id: 2,
      title: "Chemistry",
      author: "Grade 8",
      imageUrl: "./chemistry.png",
      downloadLink:
        "https://chilot.wordpress.com/wp-content/uploads/2023/02/85b2f-grade-8-chemistry-textbook.pdf",
    },
    {
      id: 3,
      title: "Biology",
      author: "Grade 7",
      imageUrl: "./biology.jpg",
      downloadLink:
        "https://chilot.wordpress.com/wp-content/uploads/2023/02/2bbfb-grade-7-biologytextbook.pdf",
    },
  ];

  return (
    <div className="library-container">
      <div className="library-header">
        <h1 className="title" style={{ textAlign: "center", flex: "1" }}>
          Library
        </h1>
        <Link to="/programs">
          <i>Special Programs</i>
        </Link>
      </div>
      <div className="ebook-grid">
        {ebooks.map((ebook) => (
          <div className="ebook-item" key={ebook.id}>
            <img
              className="ebook-cover"
              src={ebook.imageUrl}
              alt={ebook.title}
            />
            <h2 className="ebook-title">{ebook.title}</h2>
            <p className="ebook-author">{ebook.author}</p>
            <div className="ebook-actions">
              <a href={ebook.downloadLink}>
                <button className="view-button">Download</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
