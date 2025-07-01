import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    const handleSectionChange = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSectionChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSectionChange);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    // Special handling for home section
    if (sectionId === 'home') {
      window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
      });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'skills', label: 'Skills', icon: '💡' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        {/* Logo */}
        <div className="header__logo" onClick={() => scrollToSection('home')}>
          <div className="logo__icon">
            <span className="logo__text">G</span>
            <div className="logo__dot"></div>
          </div>
          <span className="logo__name">Gaurav Singh</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="header__nav">
          <ul className="nav__list">
            {navItems.map((item) => (
              <li key={item.id} className="nav__item">
                <button
                  className={`nav__link ${activeSection === item.id ? 'nav__link--active' : ''}`}
                  onClick={() => scrollToSection(item.id)}
                >
                  <span className="nav__icon">{item.icon}</span>
                  <span className="nav__text">{item.label}</span>
                  <div className="nav__indicator"></div>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Theme Toggle */}
        {/* <div className="header__actions">
          <button className="theme-toggle" aria-label="Toggle theme">
            <div className="theme-toggle__icon">
              <span className="sun-icon">☀️</span>
              <span className="moon-icon">🌙</span>
            </div>
          </button>
        </div> */}

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'mobile-menu-btn--open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'mobile-nav--open' : ''}`}>
        <div className="mobile-nav__backdrop" onClick={() => setIsMobileMenuOpen(false)}></div>
        <div className="mobile-nav__content">
          <div className="mobile-nav__header">
            <div className="mobile-nav__logo">
              <div className="logo__icon">
                <span className="logo__text">G</span>
                <div className="logo__dot"></div>
              </div>
              <span className="logo__name">Gaurav Singh</span>
            </div>
            <button 
              className="mobile-nav__close"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ✕
            </button>
          </div>
          <ul className="mobile-nav__list">
            {navItems.map((item, index) => (
              <li key={item.id} className="mobile-nav__item" style={{ '--delay': `${index * 0.1}s` }}>
                <button
                  className={`mobile-nav__link ${activeSection === item.id ? 'mobile-nav__link--active' : ''}`}
                  onClick={() => scrollToSection(item.id)}
                >
                  <span className="mobile-nav__icon">{item.icon}</span>
                  <span className="mobile-nav__text">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;