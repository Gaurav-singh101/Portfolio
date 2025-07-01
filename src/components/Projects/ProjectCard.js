import React, { useState } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className={`project-card ${project.featured ? 'featured' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div className="card-background">
        <div className="card-gradient"></div>
        <div className="card-glow"></div>
      </div>

      <div className="card-content">
        <div className="card-image-container">
          <img 
            src={project.image} 
            alt={project.title}
            className="card-image"
          />
          <div className="image-overlay">
            <div className="overlay-content">
              <div className="project-links">
                <a 
                  href={project.githubUrl} 
                  className="project-link github"
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>Code</span>
                </a>
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    className="project-link live"
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                    </svg>
                    <span>Live</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="card-body">
          <div className="card-header">
            <div className="project-meta">
              <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                {project.status}
              </span>
              <span className="duration">{project.duration}</span>
            </div>
            {project.featured && (
              <div className="featured-badge">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span>Featured</span>
              </div>
            )}
          </div>

          <h3 className="card-title">{project.title}</h3>
          <p className="card-description">{project.description}</p>

          <div className="tech-stack">
            {project.technologies.map((tech, techIndex) => (
              <span 
                key={techIndex} 
                className="tech-tag"
                style={{ animationDelay: `${(index * 0.1) + (techIndex * 0.05)}s` }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="card-highlights">
            <h4>Key Features:</h4>
            <ul>
              {project.highlights.slice(0, 3).map((highlight, hlIndex) => (
                <li key={hlIndex}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="card-decorations">
        <div className="floating-dot dot-1"></div>
        <div className="floating-dot dot-2"></div>
        <div className="floating-dot dot-3"></div>
      </div>
    </div>
  );
};

export default ProjectCard;