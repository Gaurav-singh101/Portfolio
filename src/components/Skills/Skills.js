import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';

const skillsData = {
  frontend: [
    {
      name: 'React',
      level: 70,
      color: '#61DAFB'
    },
    {
      name: 'JavaScript',
      level: 80,
      color: '#F7DF1E'
    },
    {
      name: 'HTML',
      level: 90,
      color: '#E34F26'
    },
    {
      name: 'CSS',
      level: 85,
      color: '#1572B6'
    },
    {
      name: 'Tailwind CSS',
      level: 75,
      color: '#06B6D4'
    },
    {
      name: 'Next.js',
      level: 70,
      color: '#000000'
    },

  ],
  backend: [
    {
      name: 'Node.js',
      level: 85,
      color: '#339933'
    },
    {
      name: 'Express.js',
      level: 75,
      color: '#000000'
    },
    {
      name: 'Python',
      level: 70,
      color: '#3776AB'
    },
    {
      name: 'MongoDB',
      level: 80,
      color: '#47A248'
    },
    {
      name: 'SQL',
      level: 75,
      color: '#4479A1'
    },
    {
      name: 'REST APIs',
      level: 80,
      color: '#FF6B6B'
    }
  ],
  tools: [
    {
      name: 'Git',
      level: 80,
      color: '#F05032'
    },
    {
      name: 'GitHub',
      level: 90,
      color: '#181717'
    },
    {
      name: 'VS Code',
      level: 95,
      color: '#007ACC'
    },
    {
      name: 'Postman',
      level: 75,
      color: '#FF6C37'
    }
  ],
  soft: [
    {
      name: 'Problem Solving',
      level: 95,
      color: '#4ECDC4'
    },
    {
      name: 'Team Work',
      level: 90,
      color: '#45B7D1'
    },
    {
      name: 'Communication',
      level: 85,
      color: '#96CEB4'
    },
    {
      name: 'Leadership',
      level: 85,
      color: '#FFEAA7'
    },
    {
      name: 'Time Management',
      level: 90,
      color: '#DDA0DD'
    },
    {
      name: 'Creativity',
      level: 80,
      color: '#FFB6C1'
    }
  ]
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [animatedSkills, setAnimatedSkills] = useState(new Set());
  const skillsRef = useRef(null);

  const categories = [
    { id: 'frontend', label: 'Frontend', description: 'User Interface & Experience' },
    { id: 'backend', label: 'Backend', description: 'Server & Database' },
    { id: 'tools', label: 'Tools', description: 'Development Tools' },
    { id: 'soft', label: 'Soft Skills', description: 'Personal & Professional' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills after component becomes visible
          setTimeout(() => {
            skillsData[activeCategory].forEach((_, index) => {
              setTimeout(() => {
                setAnimatedSkills(prev => new Set([...prev, `${activeCategory}-${index}`]));
              }, index * 100);
            });
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, [activeCategory]);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setAnimatedSkills(new Set());
    
    // Animate new skills
    setTimeout(() => {
      skillsData[categoryId].forEach((_, index) => {
        setTimeout(() => {
          setAnimatedSkills(prev => new Set([...prev, `${categoryId}-${index}`]));
        }, index * 100);
      });
    }, 200);
  };




  return (
    <section className="skills" id="skills" ref={skillsRef}>
      <div className="skills-background">
        <div className="skills-gradient"></div>
        <div className="floating-shapes">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`shape shape-${i + 1}`}></div>
          ))}
        </div>
      </div>

      <div className="skills-container">
        <div className={`skills-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="skills-title">
            <span className="title-accent">My</span> Skills
          </h2>
          <p className="skills-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="skills-content">
          {/* Category Navigation */}
          <div className={`category-navigation ${isVisible ? 'animate-in' : ''}`}>
            {categories.map((category, index) => (
              <button
                key={category.id}
                className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category.id)}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <span className="category-icon">{category.icon}</span>
                <div className="category-info">
                  <span className="category-label">{category.label}</span>
                  <span className="category-description">{category.description}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className={`skills-grid ${isVisible ? 'animate-in' : ''}`}>
            {skillsData[activeCategory].map((skill, index) => (
              <div
                key={`${activeCategory}-${skill.name}`}
                className={`skill-card ${animatedSkills.has(`${activeCategory}-${index}`) ? 'animate-in' : ''}`}
                style={{ 
                  animationDelay: `${0.3 + index * 0.05}s`,
                  '--skill-color': skill.color
                }}
              >
                <div className="skill-header">
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <h3 className="skill-name">{skill.name}</h3>
                  <div className="skill-percentage">{skill.level}%</div>
                </div>
                <div className="skill-progress-bg">
                  <div 
                    className="skill-progress-fill"
                    style={{ 
                      width: animatedSkills.has(`${activeCategory}-${index}`) ? `${skill.level}%` : '0%',
                      backgroundColor: skill.color,
                      boxShadow: `0 0 10px ${skill.color}40`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div className={`skills-summary ${isVisible ? 'animate-in' : ''}`}>
            <div className="summary-card">
              <div className="summary-icon"></div>
              <div className="summary-content">
                <h3>Continuous Learning</h3>
                <p>Always exploring new technologies and improving existing skills</p>
              </div>
            </div>
            <div className="summary-card">
              <div className="summary-icon"></div>
              <div className="summary-content">
                <h3>Goal Oriented</h3>
                <p>Focused on delivering high-quality solutions that meet objectives</p>
              </div>
            </div>
            <div className="summary-card">
              <div className="summary-icon"></div>
              <div className="summary-content">
                <h3>Innovation Driven</h3>
                <p>Passionate about using cutting-edge technologies effectively</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;