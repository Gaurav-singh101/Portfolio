import React, { useState, useEffect } from 'react';
import './Experience.css';
import { experienceData, educationData, certificationsData } from '../../data/experience';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [isVisible, setIsVisible] = useState(false);
  const [activeExperience, setActiveExperience] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tabs = [
    { id: 'experience', label: 'Work Experience' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications & Achievement' }
  ];

  const renderExperience = () => (
    <div className="experience-content">
      <div className="experience-timeline">
        {experienceData.map((exp, index) => (
          <div
            key={exp.id}
            className={`timeline-item ${activeExperience === index ? 'active' : ''} ${isVisible ? 'animate-in' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setActiveExperience(index)}
          >
            <div className="timeline-marker">
              <div className="timeline-dot"></div>
              <div className="timeline-line"></div>
            </div>
            <div className="timeline-content">
              <div className="experience-header">
                <div className="experience-title-section">
                  <h3 className="experience-title">{exp.title}</h3>
                  <div className="experience-company">
                    <span className="company-name">{exp.company}</span>
                    <span className="company-location">{exp.location}</span>
                  </div>
                  <div className="experience-meta">
                    <span className="experience-duration">{exp.duration}</span>
                    <span className="experience-type">{exp.type}</span>
                  </div>
                </div>
              </div>

              <p className="experience-description">{exp.description}</p>

              <div className="experience-details">
                <div className="responsibilities-section">
                  <h4>Key Responsibilities</h4>
                  <ul className="responsibilities-list">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="responsibility-item">{resp}</li>
                    ))}
                  </ul>
                </div>


                <div className="achievements-section">
                  <h4>Key Achievements</h4>
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="achievement-item">
                        <span className="achievement-icon"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderEducation = () => (
    <div className="education-content">
      <div className="education-stack">
        {educationData.map((edu, index) => (
          <div
            key={edu.id}
            className={`edu-row ${isVisible ? 'animate-in' : ''}`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="edu-left">
              <h3 className="edu-degree">{edu.degree}</h3>
              <span className="edu-institution">{edu.institution}</span>
            </div>
            <div className="edu-right">
              <span className="edu-location">{edu.location}</span>
              <span className="edu-duration">{edu.duration}</span>
              {edu.gpa && <span className="edu-gpa">{edu.gpa}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCertifications = () => (
    <div className="certifications-content">
      <div className="certifications-grid">
        {certificationsData.map((cert, index) => (
          <div
            key={cert.id}
            className={`certification-card ${isVisible ? 'animate-in' : ''}`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="certification-header">
              <div className="certification-icon"></div>
              <div className="certification-title-section">
                <h3 className="certification-name">{cert.name}</h3>
                <div className="certification-issuer">{cert.issuer}</div>
                <div className="certification-meta">
                  <span className="certification-date">{cert.date}</span>
                </div>
              </div>
            </div>

            {cert.description && <p className="certification-description">{cert.description}</p>}

            <div className="certification-badge">
              <span className="badge-text">Verified</span>
              <span className="badge-icon">✓</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'experience':
        return renderExperience();
      case 'education':
        return renderEducation();
      case 'certifications':
        return renderCertifications();
      default:
        return renderExperience();
    }
  };

  return (
    <section className="experience" id="experience">
      <div className="experience-background">
        <div className="experience-gradient"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="experience-container">
        <div className={`experience-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="section-title">
            My <span className="title-highlight">Journey</span>
          </h2>
          <p className="section-description">
            Explore my professional experience, educational background, and certifications
            that have shaped my expertise in full-stack development.
          </p>
        </div>

        <div className={`experience-tabs ${isVisible ? 'animate-in' : ''}`}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="experience-main">
          {renderContent()}
        </div>

        <div className={`experience-stats ${isVisible ? 'animate-in' : ''}`}>
          <div className="stat-item">
            <div className="stat-number">2+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">3</div>
            <div className="stat-label">Certifications</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Technologies</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;