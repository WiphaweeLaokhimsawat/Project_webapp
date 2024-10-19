import './Style/accountpage.css';
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function AccountPage() {
    const navigate = useNavigate(); // Initialize the navigate hook
    const [userData, setUserData] = useState({ name: "", phoneNumber: "" });

    const handleNavClick = (path) => {
        navigate(path); // Navigate to the given path
    };
    useEffect(() => {
        // ดึงข้อมูลผู้ใช้จาก localStorage
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser) {
            setUserData({
                name: storedUser.user,
                phoneNumber: storedUser.tel,
            });
        } else {
            // ถ้าไม่มีข้อมูลผู้ใช้ นำทางไปที่หน้า login
            navigate('/login');
        }
    }, []);
    return (
        <div className='account-container'>
            <nav className='navbaraccount'>
                <div className="logo-account">DPT Restaurant</div>

                <ul className="navLink-account">
                    <li className="navItem"><a href="#home" onClick={() => handleNavClick('/home')}>Home</a></li>
                    <li className="navItem"><a href="#about" className='active' onClick={() => handleNavClick('/about')}>About</a></li>
                    <li className="navItem"><a href="#menu" onClick={() => handleNavClick('/menupage')}>Recommended Menu</a></li>
                    <li className="navItem"><a href="#chef" onClick={() => handleNavClick('/chefpage')}>Chef</a></li>
                    <li className="navItem"><a href="#settime" onClick={() => handleNavClick('/settime')}>Table Booking</a></li>
                </ul>
                <button className="account-tag">Rujikorn Iimtrakul</button>
            </nav>
            <div className='box-show'>
                <h2>Account</h2>
                <div className='form-box'>
                    <label>Name</label>
                </div>
                <div className='form-box'>
                    <label>Phone Number</label>
                </div>
                <button className='button-history'>Booking History</button>

            </div>
        </div >
    )
};
export default AccountPage;