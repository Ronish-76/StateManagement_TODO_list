import React from "react";

function InfoCard({ title, description, duration }) {
  return (
    <div className="info-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="course-info">
        <h3>Course Information</h3>
        <ul>
          <li>Duration: {duration}</li>
        </ul>
      </div>
    </div>
  );
}

export default InfoCard;
