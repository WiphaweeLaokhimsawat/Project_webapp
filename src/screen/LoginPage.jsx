import React, { useState } from 'react';
import './Style/loginpage.css'; // Ensure this file exists
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        console.log('Logging in with', name, password);
    };

    const handleRegister = () => {
        console.log('Registering', name, password);
        navigate('/register');
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

            {/* Login Section */}
            <section
                className="loginSection">
                <div className="loginBox">
                    <h2 className="loginTitle">LOGIN-PAGE</h2>
                    <input
                        type="text"
                        className="inputField"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="password"
                        className="inputField"
                        placeholder="Enter Pass"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="buttonContainer">
                        <button className="loginButton" onClick={handleLogin}>
                            Login
                        </button>
                        <button className="registerButton" onClick={handleRegister}>
                            Register
                        </button>
                    </div>
                </div>
            </section>
        </header>
    );
}

export default LoginPage;
