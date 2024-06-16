const Activities = () => {
  return (
    <div className="activities">
      <h1 className="header1">Gallery</h1>
      <p className="sub-header">
        Extra activities are also important for overall developments of
        students…
      </p>
      <div className="sub-activities">
        <div>
          <h2>Culture Day</h2>{" "}
          <p>
            A most entertaining way for students to discover about the diverse
            cultures of their country.{" "}
          </p>{" "}
          <span>Date: Dec 6th, 2022</span>
        </div>
        <div>
          <img src="/culture.jpg" alt="culture img" />
        </div>
      </div>

      <div className="sub-activities">
        <div>
          <img src="/leaders.jpg" alt="leaders img" />
        </div>
        <div>
          <h2>Future Leaders</h2>{" "}
          <p>
            We will explore several professions and discover our interests in
            life .{" "}
          </p>{" "}
          <span>Date: Feb 12th, 2023</span>
        </div>
      </div>

      <div className="sub-activities">
        <div>
          <h2>Community Service</h2>{" "}
          <p>
            Students can sign up to rake lawns and bag the leaves. Students at
            Destiny Future Academy found that doing common yard work is a fun
            way to get everyone out of the house, spend time together, and help
            out your community.{" "}
          </p>{" "}
          <span>Date: March 21st, 2023</span>
        </div>
        <div>
          <img src="/service.jpg" alt="service img" />
        </div>
      </div>

      <div className="sub-activities">
        <div>
          <img src="/color.jpg" alt="color img" />
        </div>
        <div>
          <h2>Color day</h2>{" "}
          <p>A healthy and fun way to show your school spirit . </p>{" "}
          <span>Date: May 10th, 2023</span>
        </div>
      </div>
    </div>
  );
};

export default Activities;
