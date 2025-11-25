import React from "react";

function Skills({ skills }) {
  const getLevelColor = (level) => {
    switch (level) {
      case "advanced":
        return "#4CAF50";
      case "intermediate":
        return "#2196F3";
      case "beginner":
        return "#FFC107";
      default:
        return "#9E9E9E";
    }
  };

  const getLevelText = (level) => {
    switch (level) {
      case "advanced":
        return "Advanced";
      case "intermediate":
        return "Intermediate";
      case "beginner":
        return "Beginner";
      default:
        return level;
    }
  };

  return (
    <div className="skills-section">
      <h2>Skills & Technologies</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-card">
            <img src={skill.icon_url} alt={skill.name} className="skill-icon" />
            <h3>{skill.name}</h3>
            <span
              className="skill-level"
              style={{ backgroundColor: getLevelColor(skill.level) }}
            >
              {getLevelText(skill.level)}
            </span>
            <p className="skill-experience">
              {skill.years_of_experience}{" "}
              {skill.years_of_experience > 1 ? "years" : "year"} experience
            </p>
            {skill.is_main && (
              <span className="main-skill-badge">⭐ Main Skill</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
