import React, { useState,useEffect } from 'react';
import { useNavigate,useLocation } from 'react-router-dom'; // ใช้สำหรับดึงข้อมูลโต๊ะจาก state
import './Style/settime.css';

const SetTime = () => {
    // const location = useLocation();
    // const { table } = location.state || {}; // ดึงข้อมูลโต๊ะที่เลือกจาก state
    const navigate = useNavigate();
    // const location = useLocation();
    // const { user, tel, role } = location.state || {};
    const [userData, setUserData] = useState({ user: '', tel: '', role: '' });
    //  const [userData, setUserData] = useState({ name: "", phoneNumber: "" });
    const [form, setForm] = useState({
        name: 'Rujikorn Iimtrakul',
        day: '',
        time: '',
        phone: '093-232-2332'
    });

    

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submission
        console.log(form);
        
    };
    const handleTable = () => {
        // console.log('Registering', name, password);
        navigate('/tablepage');
    };
    
    const handleNavClick = (path) => {
      navigate(path); // Navigate to the given path
    };
    
    const [showLogout, setShowLogout] = useState(false);
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUserData(storedUser);
        } else {
            // ถ้าไม่มีข้อมูลผู้ใช้ใน localStorage นำทางไปที่หน้า login
            navigate('/login');
        }
    }, [navigate]);
    // ฟังก์ชันจัดการการคลิกเพื่อแสดงปุ่ม Logout
    const toggleLogout = () => {
        setShowLogout(!showLogout);
    };

    // ฟังก์ชันจัดการ Logout
    const handleLogout = () => {
        // ลบข้อมูลผู้ใช้จาก localStorage
        localStorage.removeItem('user');
        // นำทางกลับไปหน้า login
        navigate('/login');
    };

    return (
        <div className="settime-container">
            <nav className="navbarsettime">
                <div className="logo-settime">DPT Restaurant</div>
                <ul className="navLink-settime">
                    <li className="navItem"><a href="#home" onClick={() => handleNavClick('/home')}>Home</a></li>
                    <li className="navItem"><a href="#about" onClick={() => handleNavClick('/about')}>About</a></li>
                    <li className="navItem"><a href="#menu" onClick={() => handleNavClick('/menupage')}>Recommended Menu</a></li>
                    <li className="navItem"><a href="#chef" onClick={() => handleNavClick('/chefpage')}>Chef</a></li>
                    <li className="navItem"><a href="#settime" className="active" onClick={() => handleNavClick('/settime')}>Table Booking</a></li>
                </ul>
                 {/* <button className="home-tag">{userData.user}</button> */}
                     {/* แสดงชื่อผู้ใช้และปุ่ม Logout */}
                     <button className="home-tag" onClick={toggleLogout}>
                        {userData.user|| "LOGIN"}
                    </button>
                    {showLogout && (
                        <button className="logout-button" onClick={handleLogout}>
                            Logout
                        </button>
                    )}
            </nav>

            <div className="settime-form">
                <h2>Reserve a Table</h2>
                <form onSubmit={handleSubmit}>
                    <div className="settime-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={userData.user}
                            onChange={handleChange}
                            disabled
                        />
                    </div>
                    <div className="form-group">
                        <label>Day</label>
                        <input
                            type="date"
                            name="day"
                            value={form.day}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Time</label>
                        <input
                            type="time"
                            name="time"
                            value={form.time}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={userData.tel}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="submit-btn" onClick={handleTable}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SetTime;
