import React, { useState } from "react";
import './Style/registerpage.css';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [confirmPhoneNumber, setConfirmPhoneNumber] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (phoneNumber === confirmPhoneNumber) {
            alert(`Welcome, ${name}!`);
            navigate('/home');
        } else {
            alert("Phone numbers do not match.");
        }
    };
    const handleNavClick = (path) => {
        navigate(path); // Navigate to the given path
    };

    return (
        <header className="regi-header">
            {/* Navigation Bar */}
            {/* <div className="headerContent">
                <div className="logoColumn">
                    <h1 className="logo">DPT Restaurant</h1>
                </div> */}
                <nav className="navbar-regi">
                    <div className="logo-regi">DPT Restaurant</div>
                    <ul className="navlink-regi">
                        <li className="navItem"><a href="#firstpage" className='active' onClick={() => handleNavClick('/firstpage')}>Home</a></li>
                        <li className="navItem"><a href="#about" onClick={() => handleNavClick('/about')}>About</a></li>
                        <li className="navItem"><a href="#menu" onClick={() => handleNavClick('/menupage')}>Recommended Menu</a></li>
                        <li className="navItem"><a href="#chef" onClick={() => handleNavClick('/chefpage')}>Chef</a></li>
                        <li className="navItem"><a href="#booking" onClick={() => handleNavClick('/tablepage')}>Table Booking</a></li>
                    </ul>
                </nav>
            {/* </div> */}
            <div className="register-container">
                <form className="register-form" onSubmit={handleSubmit}>
                    <h2>Register</h2>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Enter phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Confirm Phone number"
                        value={confirmPhoneNumber}
                        onChange={(e) => setConfirmPhoneNumber(e.target.value)}
                        required
                    />
                    <button type="submit">Register</button>
                </form>
            </div>
        </header>

    );
};

export default Register;
