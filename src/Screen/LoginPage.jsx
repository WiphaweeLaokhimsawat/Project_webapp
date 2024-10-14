import React, { useState,useEffect} from 'react';
import './Style/loginpage.css'; // Ensure this file exists
import { useNavigate } from 'react-router-dom';
import { findUser } from './Database/usersData'; 
function LoginPage() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    // const location = useLocation();
    // const [name, setName] = useState(location.state?.name || '');
    // const [password, setPassword] = useState(location.state?.password || '');
    // const registeredName = location.state?.name;
    // const registeredPassword = location.state?.password;

    useEffect(() => {
        console.log(findUser);
        // if (location.state) {
        //     console.log('Received data from Register:', location.state);
        // }
    }, []);
    const handleLogin = () => {
        const user = findUser(name, password);  // ค้นหาผู้ใช้ใน localStorage

        if (user) {
            alert('Login successful!');
            navigate('/home',{ state: { name } });  // นำผู้ใช้ไปยังหน้า home ถ้าข้อมูลถูกต้อง
        } else {
            alert('Incorrect username or password. Please try again.');
        }
    };
    // const handleLogin = () => {
    //     if (name === registeredName && password === registeredPassword) {
    //         // alert('Login successful!');
    //         console.log('Logging in with', name, password);
    //         navigate('/home');  // Navigate ไปหน้าที่ต้องการเมื่อข้อมูลถูกต้อง
    //     } else {
    //         alert('Incorrect username or password. Please try again.');
    //     }
        
    // };

    const handleRegister = () => {
        console.log('Registering', name, password);
        navigate('/register');
    };
    const handleNavClick = (path) => {
        navigate(path); // Navigate to the given path
    };


    return (
        <header className="login-header">
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
                    <li className="navItem"><a href="#booking" onClick={() => handleNavClick('/tablepage')}>Table Booking</a></li>
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
        </header>
    );
}

export default LoginPage;
