import React from 'react';
import './Style/firstpage.css'; // Make sure to include your CSS file
import { useNavigate } from 'react-router-dom';

function FirstPage() {
    const navigate = useNavigate(); // Initialize the navigate hook

    const handleLoginClick = () => {
        navigate('/login');
    };
    const handleNavClick = (path) => {
        navigate(path); // Navigate to the given path
    };
    return (
        <header className="header">
            {/* Navigation Bar */}
            <div className="headerContent">
                <div className="logoColumn">
                    <h1 className="logo">DPT Restaurant</h1>
                </div>
                <nav className="navColumn">
                    <ul className="nav">
                        <li className="navItem">
                            <a href="#home" onClick={() => handleNavClick('/home')}>Home</a>
                        </li>
                        <li className="navItem">
                            <a href="#about" onClick={() => handleNavClick('/home')}>About</a>
                        </li>
                        <li className="navItem">
                            <a href="#menu" onClick={() => handleNavClick('/home')}>Recommended Menu</a>
                        </li>
                        <li className="navItem">
                            <a href="#chef" onClick={() => handleNavClick('/home')}>Chef</a>
                        </li>
                        <li className="navItem">
                            <a href="#booking" onClick={() => handleNavClick('/home')}>Table booking</a>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Hero Section */}
            <section
                className="heroSection"
            >
                <div className="overlay"></div>
                <div className="heroContent">
                    <h2 className="welcomeText">Welcome to</h2>
                    <p className="restaurantName">DPT Restaurant</p>
                    <button className="loginButton" onClick={handleLoginClick}>
                        LOGIN
                        <span className="srOnly">Access your account</span>
                    </button>
                </div>
            </section>
        </header>
    );
}

export default FirstPage;
