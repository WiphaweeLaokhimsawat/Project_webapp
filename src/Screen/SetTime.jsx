import React, { useState } from "react";
import './Style/registerpage.css';
import './Style/settime.css';
import { useNavigate } from 'react-router-dom';

function SetTime() {
    const navigate = useNavigate();
    const handleNavClick = (path) => {
        navigate(path); // Navigate to the given path
    };
    const handleClick = () => {
        alert("คุณคลิกแล้ว!"); // หรือทำสิ่งอื่นตามที่ต้องการ
    };
    return (
        <div className="SetT-Page">
            {/* Navbar */}
            <nav className="navbarTable">
                <div className="logo-table">DPT Restaurant</div>
                <ul className="navLink-table">
                    <li className="navItem"><a href="#home" onClick={() => handleNavClick('/home')}>Home</a></li>
                    <li className="navItem"><a href="#about" onClick={() => handleNavClick('/about')}>About</a></li>
                    <li className="navItem"><a href="#menu" onClick={() => handleNavClick('/menupage')}>Recommended Menu</a></li>
                    <li className="navItem"><a href="#chef" onClick={() => handleNavClick('/chefpage')}>Chef</a></li>
                    <li className="navItem"><a href="#settime" className='active' onClick={() => handleNavClick('/settime')}>Table Booking</a></li>
                </ul>
                <button className="table-tag">Rujikorn Iimtrakul</button>
            </nav>

            <div>
                <div className="SetT-box">

                    <p className="SetT-reservation1">Select time</p>
                    <div className="SetT-box-in-box">
                        <div className="SetT-box-input-container">
                            <p className="SetT-reservation2">Name</p>
                            <p className="SetT-box-input">ตรงนี้ดึงข้อมูล</p>
                        </div>

                        <div className="SetT-box-input-container">
                            <p className="SetT-reservation2">Day</p>
                            <p className="SetT-box-date">onClick</p>
                            <p className="SetT-reservation2">Time</p>
                            <p className="SetT-box-time">onClick</p>
                        </div>

                        <div className="SetT-box-input-container">
                            <p className="SetT-reservation2">Phone</p>
                            <p className="SetT-box-PH">ตรงนี้ดึงข้อมูล</p>
                        </div>
                    </div>
                    <div onClick={handleClick} className="SetT-box-submit">
                        <p className="SetT-reservation-submit">Submit</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SetTime;