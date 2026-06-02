import React, { useState, useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('story');
  const aboutRef = useRef(null);

  const stats = [
    { number: '8+', label: 'Projects Completed' },
    { number: '2+', label: 'Years Experience' },
    { number: '15+', label: 'Technologies' }
  ];

  const tabs = [
    {
      id: 'story',
      label: 'My Story',
      content: `I'm a passionate full-stack developer with a love for creating digital experiences that make a difference. My journey began with curiosity about how websites work, and it has evolved into a deep passion for building scalable, user-friendly applications.
      I believe that great software is not just about clean code, but about understanding users' needs and creating solutions that truly matter. Every project is an opportunity to learn something new and push the boundaries of what's possible.`
    },
    {
      id: 'passion',
      label: 'What Drives Me',
      content: `I'm driven by the endless possibilities that technology offers. Whether it's building a responsive web application, optimizing performance, or creating intuitive user interfaces, I find joy in every aspect of development.
      My passion extends beyond just writing code - I love mentoring other developers, contributing to open-source projects, and staying up-to-date with the latest industry trends and best practices.`
    },
    {
      id: 'approach',
      label: 'My Approach',
      content: `I believe in writing clean, maintainable code that stands the test of time. My development process focuses on understanding requirements deeply, planning thoroughly, and executing with precision.
      I follow agile methodologies, embrace test-driven development, and always prioritize user experience. Collaboration and continuous learning are at the core of my professional philosophy.`
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section className="about" id="about" ref={aboutRef}>
      <div className="about-background">
        <div className="about-gradient"></div>
        <div className="floating-particles">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}></div>
          ))}
        </div>
      </div>

      <div className="about-container">
        <div className={`about-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="about-title">
            <span className="title-accent">About</span> Me
          </h2>
          <p className="about-subtitle">
            Crafting digital experiences with passion and precision
          </p>
        </div>

        <div className="about-content">
          <div className={`about-visual ${isVisible ? 'animate-in' : ''}`}>
            <div className="about-image-container">
              <div className="about-image-bg"></div>
              <div className="about-image">
                <img
                  src="/images/profile.jpg"
                  alt="Gaurav Singh"
                  className="profile-image"
                />
              </div>
              <div className="floating-badges">
                <div className="badge badge-1">Node.js</div>
                <div className="badge badge-2">React</div>
                <div className="badge badge-3">MongoDB</div>
                <div className="badge badge-4">Express.js</div>
              </div>
            </div>

            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`stat-card ${isVisible ? 'animate-in' : ''}`}
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`about-text ${isVisible ? 'animate-in' : ''}`}>
            <div className="tab-navigation">
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

            <div className="tab-content">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`tab-panel ${activeTab === tab.id ? 'active' : ''}`}
                >
                  <p className="tab-text">{tab.content}</p>
                </div>
              ))}
            </div>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon"></div>
                <div className="highlight-text">
                  <h4>Problem Solver</h4>
                  <p>I love tackling complex challenges and finding elegant solutions</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon"></div>
                <div className="highlight-text">
                  <h4>Team Player</h4>
                  <p>Collaboration and communication are key to successful projects</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon"></div>
                <div className="highlight-text">
                  <h4>Continuous Learner</h4>
                  <p>Technology evolves fast, and I'm always learning something new</p>
                </div>
              </div>
            </div>

            <div className="about-cta">
              <button className="cta-button" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Let's Work Together
                <span className="cta-arrow">→</span>
              </button>
              <a href="https://drive.google.com/file/d/1jELJme-d-lrLIWxleYWLeFEoEl7P0PSS/view?usp=sharing" className="resume-link" target="_blank" rel="noopener noreferrer">
                Resume
                <span className="download-icon"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;