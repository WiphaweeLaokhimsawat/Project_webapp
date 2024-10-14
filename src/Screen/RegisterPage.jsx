import React, { useState } from "react";
import './Style/registerpage.css';
import { useNavigate } from 'react-router-dom';
import { addUser } from './Database/usersData'; 
const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // useEffect(() => {
    //     console.log(addUser);
    //     // if (location.state) {
    //     //     console.log('Received data from Register:', location.state);
    //     // }
    // }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const phoneRegex = /^\d+$/;
        if (!name || !password || !confirmPassword || !phoneNumber || password !== confirmPassword) {
            if (!name || !password || !confirmPassword || !phoneNumber) {
                alert("Please fill out all fields.");
            } else if (password !== confirmPassword) {
                alert("Passwords do not match.");
            }else if (!phoneRegex.test(phoneNumber)) {
                alert("Phone number should contain only numbers.");
            }
        } else { 

            alert(`Welcome, ${name}!`);

            // Navigate ไปหน้า Login พร้อมกับส่งข้อมูลชื่อผู้ใช้ไปด้วย
            navigate('/login', { state: { name, password, phoneNumber } });
            console.log(addUser);
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
                        <li className="navItem"><a href="#first" className='active' onClick={() => handleNavClick('/first')}>Home</a></li>
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
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Enter confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Enter phone number"
                        value={phoneNumber}
                        pattern="[0-9]*"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                    <button type="submit">Register</button>
                </form>
            </div>
        </header>

    );
};

export default Register;
