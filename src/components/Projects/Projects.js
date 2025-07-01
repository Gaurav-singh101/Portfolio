import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { projectsData, categories } from '../../data/projects';
import './Projects.css';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [isVisible, setIsVisible] = useState(false);
  const [showFeatured, setShowFeatured] = useState(true);

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

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const toggleFeatured = () => {
    setShowFeatured(!showFeatured);
  };

  const displayProjects = showFeatured 
    ? filteredProjects.filter(project => project.featured)
    : filteredProjects;

  return (
    <section className="projects" id="projects">
      <div className="projects-background">
        <div className="projects-gradient"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
      </div>

      <div className="projects-container">
        <div className={`projects-header ${isVisible ? 'animate-in' : ''}`}>
          
          <h2 className="projects-title">
            My <span className="title-highlight">Creative Work</span>
          </h2>
          
          <p className="projects-subtitle">
            Explore a collection of projects that showcase my passion for creating 
            exceptional digital experiences through innovative design and cutting-edge technology.
          </p>

          <div className="projects-stats">
            <div className="stat-item">
              <span className="stat-number">{projectsData.length}+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{projectsData.filter(p => p.featured).length}</span>
              <span className="stat-label">Featured</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{categories.length - 1}</span>
              <span className="stat-label">Categories</span>
            </div>
          </div>
        </div>

        <div className={`projects-controls ${isVisible ? 'animate-in' : ''}`}>
          <div className="filter-container">
            <h3 className="filter-title">Filter by Category</h3>
            <div className="category-filters">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="filter-text">{category}</span>
                  <span className="filter-count">
                    {category === 'All' 
                      ? projectsData.length 
                      : projectsData.filter(p => p.category === category).length
                    }
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="view-toggles">
            <button
              className={`toggle-btn ${showFeatured ? 'active' : ''}`}
              onClick={toggleFeatured}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              {showFeatured ? 'Show All' : 'Featured Only'}
            </button>
          </div>
        </div>

        <div className={`projects-grid ${isVisible ? 'animate-in' : ''}`}>
          {displayProjects.length > 0 ? (
            displayProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
              />
            ))
          ) : (
            <div className="no-projects">
              <div className="no-projects-icon">🔍</div>
              <h3>No Projects Found</h3>
              <p>Try selecting a different category or view all projects.</p>
            </div>
          )}
        </div>

        {displayProjects.length > 0 && (
          <div className={`projects-footer ${isVisible ? 'animate-in' : ''}`}>
            <div className="projects-cta">
              <h3>Like what you see?</h3>
              <p>Let's collaborate and create something amazing together!</p>
              <button 
                className="cta-btn"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span>Start a Project</span>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;