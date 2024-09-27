import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import './style.css';


function App() {
  const [pageTitle, setPageTitle] = useState("Home - Navigation");

  const updateTitle = (title) => {
    document.title = `${title} - Navigation`;
    setPageTitle(`${title} - Navigation`);
  };

  return (
    <Router>
      <div>
        <Navbar updateTitle={updateTitle} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

const Navbar = ({ updateTitle }) => {
  return (
    <nav className="navbar">
      <div className="logo"><Link to="/" onClick={() => updateTitle("Home")} style={{ color: 'white', textDecoration: 'none' }}>-=KENJI=-</Link></div>
      <ul className="nav-links">
        <li><Link to="/" onClick={() => updateTitle("Home")}>Home</Link></li>
        <li><Link to="/services" onClick={() => updateTitle("Services")}>Services</Link></li>
        <li><Link to="/about" onClick={() => updateTitle("About")}>About</Link></li>
        <li><Link to="/contact" onClick={() => updateTitle("Contact")}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default App;
