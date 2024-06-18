import React from "react";

const Library = () => {
  // Dummy data for ebooks (replace with actual data)
  const ebooks = [
    { id: 1, title: "Physics", author: "Grade 7" },
    { id: 2, title: "Biology", author: "Grade 7" },
    { id: 3, title: "Maths", author: "Grade 8" },
  ];

  return (
    <div className="library-container">
      <h1 className="library-title">Library Resources</h1>
      <div className="ebook-grid">
        {ebooks.map((ebook) => (
          <div className="ebook-item" key={ebook.id}>
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
