import React, { useState, useEffect } from 'react';
import './Style/loginpage.css'; // Ensure this file exists
import { useNavigate } from 'react-router-dom';
import Axios from "axios";

// import { findUser } from './Database/usersData'; 
function LoginPage() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // console.log('Logging in with', name, password);
        // navigate('/first');
        Axios.get('http://localhost:5000/api/user')
        .then((response) => {
            const users = response.data;

            // ค้นหาผู้ใช้ที่ตรงกับชื่อและรหัสผ่านที่กรอก
            const user = users.find(u => u.user === name && u.password === password);

            if (user) {
                // ถ้าพบผู้ใช้แล้ว ตรวจสอบ role
                if (user.role === 'customer') {
                    navigate('/home');
                } else if (user.role === 'admin') {
                    navigate('/first');
                }
            } else {
                // ถ้าไม่มีข้อมูลผู้ใช้ นำทางไปยังหน้า Register
                console.log('User not found, redirecting to register page...');
                alert("NO DATA");
                console.log(users);
                // navigate('/register');
            }
        })
        .catch((error) => {
            console.error('Error fetching user data:', error);
        });
        // Axios.get('http://localhost:5000/api/user')
        //     .then((response) => {
        //         const users = response.data;
        //         console.log(users);
        //         // ค้นหาผู้ใช้ที่ตรงกับชื่อที่กรอก
        //         const user = users.find(u => u.user === name);
        //         console.log(user);
        //         if (user) {
        //             console.log('Input Password:', password);
        //             console.log('Hashed Password from DB:', user.password);
        //             // เปรียบเทียบรหัสผ่านที่กรอกกับรหัสผ่านที่ถูก hash ในฐานข้อมูล
        //             bcrypt.compare(password, user.password, (err, result) => {
        //                 if (result) {
        //                     // รหัสผ่านถูกต้อง ตรวจสอบ role
        //                     if (user.role === 'customer') {
        //                         navigate('/home');
        //                     } else if (user.role === 'admin') {
        //                         navigate('/first');
        //                     }
        //                 } else {
        //                     // รหัสผ่านไม่ถูกต้อง
        //                     alert('Incorrect password');
        //                 }
        //             });

        //         } else {
        //             // ถ้าไม่มีข้อมูลผู้ใช้ในฐานข้อมูล
        //             console.log('User not found, redirecting to register page...');
        //             alert("NO DATA");
        //         }
        //     })
        //     .catch((error) => {
        //         console.error('Error fetching user data:', error);
        //     });
    }

    const handleRegister = () => {
        console.log('Registering', name, password);
        navigate('/register');
    };
    const handleNavClick = (path) => {
        navigate(path); // Navigate to the given path
    };
    useEffect(() => {

    })

    return (
        <div className="login-header">
            {/* Navigation Bar */}
            {/* <div className="headerContent">
                <div className="logoColumn">
                    <h1 className="logo">DPT Restaurant</h1>
                </div> */}
            <nav className="navbar-login">
                <div className="nav-logo">DPT Restaurant</div>
                <ul className="navlink-login">
                    <li className="navItem"><a href="#first" className='active' onClick={() => handleNavClick('/first')}>Home</a></li>
                    <li className="navItem"><a href="#about" onClick={() => handleNavClick('/about')}>About</a></li>
                    <li className="navItem"><a href="#menu" onClick={() => handleNavClick('/menupage')}>Recommended Menu</a></li>
                    <li className="navItem"><a href="#chef" onClick={() => handleNavClick('/chefpage')}>Chef</a></li>
                    <li className="navItem"><a href="#settime" onClick={() => handleNavClick('/settime')}>Table Booking</a></li>
                </ul>
                {/* <button className="chef-tag">Rujikorn Iimtrakul</button> */}
            </nav>
            {/* </div> */}

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
        </div>
    );
}

export default LoginPage;
