import React from 'react';
import './Style/Firstpage.css'; // Import the CSS file

function Firstpage() {
  const navItems = [
    { text: 'Home', link: '#' },
    { text: 'About', link: '#' },
    { text: 'Recommended Menu', link: '#' },
    { text: 'Chef', link: '#' },
    { text: 'Table booking', link: '#' },
  ];

  return (
    <main className="page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-content">
          <div className="logo-column">
            <h1 className="logo">DPT Restaurant</h1>
          </div>
          <ul className="nav-links">
            {navItems.map((item, index) => (
              <li key={index} className="nav-link">
                <a href={item.link}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Welcome Section */}
      <section className="welcome-section">
        <h1 className="welcome-text">Welcome to</h1>
        <h3 className="restaurant-name">DPT Restaurant</h3>
        <button className="login-button">
          LOGIN
          <span className="visually-hidden">Click to log in</span>
        </button>
      </section>
    </main>
  );
}

export default Firstpage;
