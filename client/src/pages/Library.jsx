import React from "react";

const Library = () => {
  const ebooks = [
    { id: 1, title: "Physics", author: "Grade 7", imageUrl: "./physics.jpg" },
    { id: 2, title: "Biology", author: "Grade 7", imageUrl: "./biology.jpg" },
    {
      id: 3,
      title: "Chemistry",
      author: "Grade 7",
      imageUrl: "./chemistry.jpg",
    },
  ];

  return (
    <div className="library-container">
      <h1 className="library-title">Library Resources</h1>
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
              <button className="view-button">View</button>
              <button className="download-button">Download</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
