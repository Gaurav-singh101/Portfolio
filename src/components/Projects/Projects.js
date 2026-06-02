import React, { useState, useEffect } from 'react';
import { projectsData, categories } from '../../data/projects';
import './Projects.css';
import './ProjectCard.css';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter(project => project.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  const openProject = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-background">
        <div className="projects-gradient"></div>
      </div>

      <div className="projects-container">
        <div className={`projects-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="projects-title">
            <span className="title-highlight">Projects</span>
          </h2>
          <p className="projects-subtitle">
            Click on any project to explore the full details
          </p>
        </div>

        {/* Category Filters */}
        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Thumbnail Grid */}
        <div className="projects-thumb-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-thumb"
              onClick={() => openProject(project)}
            >
              <div className="thumb-image-wrap">
                <img src={project.image} alt={project.title} className="thumb-image" />
                <div className="thumb-overlay">
                  <span className="thumb-view">View Details</span>
                </div>
              </div>
              <h3 className="thumb-title">{project.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="project-modal-backdrop" onClick={closeProject} data-lenis-prevent>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeProject}>✕</button>

            <div className="modal-image-section">
              <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
            </div>

            <div className="modal-badges">
              <span className={`modal-status ${selectedProject.status.toLowerCase().replace(' ', '-')}`}>
                {selectedProject.status}
              </span>
              {selectedProject.featured && <span className="modal-featured">★ Featured</span>}
            </div>

            <div className="modal-body">
              <h2 className="modal-title">{selectedProject.title}</h2>
              <p className="modal-duration">{selectedProject.duration}</p>
              <p className="modal-description">{selectedProject.description}</p>

              <div className="modal-tech">
                <h4>Technologies</h4>
                <div className="modal-tech-tags">
                  {selectedProject.technologies.map((tech, i) => (
                    <span key={i} className="modal-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="modal-highlights">
                <h4>Key Features</h4>
                <ul>
                  {selectedProject.highlights.map((hl, i) => (
                    <li key={i}>{hl}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-links">
                <a
                  href={selectedProject.githubUrl}
                  className="modal-link github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Code
                </a>
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    className="modal-link live"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;