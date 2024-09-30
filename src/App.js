import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faInfoCircle,
  faCode,
  faLightbulb,
  faCheckCircle,
  faLaptopCode,
  faArrowDown,
  faGlobe,
  faUsers,
  faUniversalAccess,
  faChartLine,
  faCog,
} from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
    }
  };

  return (
    <div className="app-container"> {/* Removed theme logic */}
      <header className="site-header">
        <div className="main-nav">
          <div className="logo">
            <FontAwesomeIcon icon={faCog} className="logo-icon" />
            <span className="logo-text">KENJI</span> {/* Added KENJI text */}
          </div>
          <ul className="nav-list">
            <li>
              <a
                href="#home"
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => handleScroll('home')}
              >
                <FontAwesomeIcon icon={faHome} />
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => handleScroll('about')}
              >
                <FontAwesomeIcon icon={faInfoCircle} />
              </a>
            </li>
            <li>
              <a
                href="#what-is-web-dev"
                className={`nav-link ${activeSection === 'what-is-web-dev' ? 'active' : ''}`}
                onClick={() => handleScroll('what-is-web-dev')}
              >
                <FontAwesomeIcon icon={faCode} />
              </a>
            </li>
            <li>
              <a
                href="#why-is-web-dev-important"
                className={`nav-link ${activeSection === 'why-is-web-dev-important' ? 'active' : ''}`}
                onClick={() => handleScroll('why-is-web-dev-important')}
              >
                <FontAwesomeIcon icon={faLightbulb} />
              </a>
            </li>
            <li>
              <a
                href="#benefits-of-web-dev"
                className={`nav-link ${activeSection === 'benefits-of-web-dev' ? 'active' : ''}`}
                onClick={() => handleScroll('benefits-of-web-dev')}
              >
                <FontAwesomeIcon icon={faCheckCircle} />
              </a>
            </li>
          </ul>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1><FontAwesomeIcon icon={faLaptopCode} /> Welcome to Web Development</h1>
          <p>Discover the importance and benefits of web development for your business and personal growth.</p>
          <a href="#about" className="btn"><FontAwesomeIcon icon={faArrowDown} /> Learn More</a>
        </div>
      </section>

      <section id="about" className="about">
        <div className="about-content">
          <h2><FontAwesomeIcon icon={faInfoCircle} /> About Us</h2>
          <p>We are dedicated to providing insights and resources to help you understand the world of web development. From the basics to advanced topics, we cover everything you need to build a successful online presence.</p>
        </div>
      </section>

      <main>
        <section id="what-is-web-dev" className="content-section">
          <div className="content-wrapper">
            <h2><FontAwesomeIcon icon={faCode} /> What is Web Development?</h2>
            <p>Web development is the process of building and maintaining websites and web applications. It involves a range of tasks, including designing, coding, testing, and deploying websites and web applications.</p>
          </div>
        </section>
        
        <section id="why-is-web-dev-important" className="content-section">
          <div className="content-wrapper">
            <h2><FontAwesomeIcon icon={faLightbulb} /> Why is Web Development Important?</h2>
            <p>Web development is important because it allows businesses and organizations to establish an online presence, reach a wider audience, and provide customers with a convenient way to access their products and services.</p>
          </div>
        </section>
        
        <section id="benefits-of-web-dev" className="content-section">
          <div className="content-wrapper">
            <h2><FontAwesomeIcon icon={faCheckCircle} /> Benefits of Web Development</h2>
            <ul>
              <li><FontAwesomeIcon icon={faGlobe} /> Increased online visibility and credibility</li>
              <li><FontAwesomeIcon icon={faUsers} /> Improved customer engagement and conversion rates</li>
              <li><FontAwesomeIcon icon={faUniversalAccess} /> Enhanced user experience and accessibility</li>
              <li><FontAwesomeIcon icon={faChartLine} /> Competitive advantage in the market</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <ul className="footer-nav">
          <li className="footer-nav-item"><a href="#home" className="footer-nav-link">Home</a></li>
          <li className="footer-nav-item"><a href="#about" className="footer-nav-link">About</a></li>
        </ul>
      </footer>

      {/* Removed the theme toggle button */}
    </div>
  );
};

export default App;
