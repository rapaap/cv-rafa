import React from "react";

function Experiences({ experiences }) {
  const formatDate = (dateString) => {
    if (!dateString) return "Present";
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long" };
    return date.toLocaleDateString("id-ID", options);
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "internship":
        return "#FF5722";
      case "organization":
        return "#9C27B0";
      case "project":
        return "#00BCD4";
      default:
        return "#607D8B";
    }
  };

  const getTypeText = (type) => {
    switch (type) {
      case "internship":
        return "Internship";
      case "organization":
        return "Organization";
      case "project":
        return "Project";
      default:
        return type;
    }
  };

  return (
    <div className="experiences-section">
      <h2>Experiences</h2>
      <div className="experiences-list">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-card">
            <div className="experience-header">
              <img
                src={exp.image_url}
                alt={exp.organization}
                className="experience-image"
              />
              <div className="experience-info">
                <h3>{exp.title}</h3>
                <h4>{exp.organization}</h4>
                <div className="experience-meta">
                  <span
                    className="experience-type"
                    style={{
                      backgroundColor: getTypeColor(exp.experience_type),
                    }}
                  >
                    {getTypeText(exp.experience_type)}
                  </span>
                  <span className="experience-date">
                    {formatDate(exp.start_date)} - {formatDate(exp.end_date)}
                    {exp.is_current && " (Current)"}
                  </span>
                </div>
              </div>
            </div>
            <p className="experience-description">{exp.description}</p>
            {exp.technologies && exp.technologies.length > 0 && (
              <div className="experience-technologies">
                <strong>Technologies:</strong>
                {exp.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiences;
