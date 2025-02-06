import React from "react";

const HowTo = ({ technologies }) => {
  return (
    <div className="howto-container">
      <h2 className="howto-title">Technologies utilisées</h2>
      <div className="howto-cards">
        {technologies.map((tech, index) => (
          <div key={index} className="howto-card">
            <h3 className="howto-card-title">{tech.name}</h3>
            <p className="howto-card-text">{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowTo;
