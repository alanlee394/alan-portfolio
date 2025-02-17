// ExperienceTimeline.jsx
import React from 'react';
import { experienceData } from './experienceData.tsx'; // adjust path as needed


const ExperienceTimeline = () => {
  return (
    <div className="timeline-container">
      {experienceData.map((exp, index) => (
        <div className="timeline-item" key={index}>
          {/* Dot on the timeline */}
          <div className="timeline-dot" />

          {/* Content/Card for each experience */}
          <div className="timeline-content">
            <h3>
            
            {exp.image && (
                <img 
                  src={exp.image} 
                  alt={`${exp.company} logo`} 
                  style={{ 
                    width: '100px', 
                    marginRight: '8px', 
                    verticalAlign: 'middle' 
                  }} 
                />)}
            {exp.position} @ {exp.company}
              
            </h3>
            <span className="timeline-duration">{exp.duration}</span>
            <p className="timeline-description">{exp.description}</p>
            {exp.technologies && (
              <ul className="timeline-tech-list">
                {exp.technologies.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
