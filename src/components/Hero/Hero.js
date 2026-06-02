import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const roles = [
    "Full Stack Developer",
    "Backend  Developer",
    "Problem Solver",
    "Code Enthusiast"
  ];

  useEffect(() => {
    setIsVisible(true);

    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(roleInterval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'animate-in' : ''}`}>
            <h1 className="hero-greeting">
              Hello, I'm
            </h1>
            <h2 className="hero-name">
              <span className="name-highlight">Gaurav Singh</span>
            </h2>
            <div className="hero-role-container">
              <span className="hero-role-prefix">I'm a </span>
              <span className="hero-role">
                {roles[currentRole]}
              </span>
            </div>
            <p className="hero-description">
              Computer Science undergraduate passionate about Software Engineering, Artificial Intelligence,
              and Full-Stack Development. Skilled in C++ , JavaScript, React, Node.js, MySQL, MongoDB,
              and modern developer tools including Firebase, Clerk, Git, GitHub, Postman, Render, Vercel,
              and Netlify. Strong foundation in DSA, OOP, DBMS, OS , CN, and NLP, with a focus on building
              scalable, data-driven, and user-centric solutions.
            </p>

            <div className="hero-buttons">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
                <span className="btn-arrow">→</span>
              </button>
              <a
                href="https://drive.google.com/file/d/1jELJme-d-lrLIWxleYWLeFEoEl7P0PSS/view?usp=sharing"
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>

            <div className="hero-social">
              <a href="mailto:[EMAIL_ADDRESS]" className="social-link" aria-label="Mail" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21,7.38246601 L21,5 L3,5 L3,7.38199365 L12.0000224,11.8824548 L21,7.38246601 Z M21,9.61853399 L11.9999776,14.1185452 L3,9.61810635 L3,19 L21,19 L21,9.61853399 Z M3,3 L21,3 C22.1045695,3 23,3.8954305 23,5 L23,19 C23,20.1045695 22.1045695,21 21,21 L3,21 C1.8954305,21 1,20.1045695 1,19 L1,5 C1,3.8954305 1.8954305,3 3,3 Z" />
                </svg>
              </a>
              <a href="https://github.com/Gaurav-singh101" className="social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/gaurav-singh-0191a028a/" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://leetcode.com/u/gauravsingh74580/" className="social-link" aria-label="Leetcode" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                </svg>
              </a>
              <a href="https://x.com/Gauravs27356652" className="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>

          <div className={`hero-visual ${isVisible ? 'animate-in' : ''}`}>
            <div className="hero-image-container">
              <div className="hero-image-bg"></div>
              <div className="hero-image">
                <img
                  src="/images/profile.jpg"
                  alt="Gaurav Singh"
                  className="profile-image"
                />
              </div>
              <div className="floating-elements">
                <div className="floating-element code">{'</>'}</div>
                <div className="floating-element design"></div>
                <div className="floating-element rocket"></div>
              </div>
            </div>
          </div>
        </div>


        {/* <div className="hero-scroll-indicator">
          <div className="scroll-arrow" onClick={() => scrollToSection('about')}>
            <span>Scroll Down</span>
            <div className="arrow-down"></div>
          </div>
        </div> */}


      </div>
    </section>
  );
};

export default Hero;