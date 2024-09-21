import React from 'react';
import './Style/homepage.css';
import { useNavigate } from 'react-router-dom';

function  HomePage () {
    const username = "Rujikorn Limtrakul"; // Example username
    const navigate = useNavigate(); 

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
                    {/* <div className="nav-logo">DPT Restaurant</div> */}
                    <ul className="nav">
                        <li className="navItem">
                            <a href="#home" className="active" onClick={() => handleNavClick('/home')}>Home</a>
                        </li>
                        <li className="navItem">
                            <a href="#about" onClick={() => handleNavClick('/about')} >About</a>
                        </li>
                        <li className="navItem">
                            <a href="#menu">Recommended Menu</a>
                        </li>
                        <li className="navItem">
                            <a href="#chef">Chef</a>
                        </li>
                        <li className="navItem">
                            <a href="#booking">Table booking</a>
                        </li>
                    </ul>
                </nav>
                {/* <div className="userColumn">
                    <span className="username">{username}</span>
                </div> */}

            </div>
            <section
                className="heroSection"
            >
                <div className="overlay"></div>
                <div className="heroContent">
                    <h2 className="welcomeText">Welcome to</h2>
                    <p className="restaurantName">DPT Restaurant</p>
                    <button className="booking-button" >
                        Booking
                        <span className="srOnly">Access your account</span>
                    </button>
                </div>
            </section>
        </header>
    );
};

export default HomePage;
