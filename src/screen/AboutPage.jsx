import React from 'react';
import './Style/aboutpage.css';
import { useNavigate } from 'react-router-dom';

const DPTRestaurant = () => {
    const navigate = useNavigate(); // Initialize the navigate hook

    const handleNavClick = (path) => {
        navigate(path); // Navigate to the given path
    };
    return (
        <div className="about-container">

            <nav className="navbar">
                <div className="nav-logo">DPT Restaurant</div>

                <ul className="nav-links">
                    <li className="navItem"><a href="#home" onClick={() => handleNavClick('/home')}>Home</a></li>
                    <li className="navItem"><a href="#about" className='active' onClick={() => handleNavClick('/about')}>About</a></li>
                    <li className="navItem"><a href="#menu" onClick={() => handleNavClick('/menupage')}>Recommended Menu</a></li>
                    <li className="navItem"><a href="#chef" onClick={() => handleNavClick('/chefpage')}>Chef</a></li>
                    <li className="navItem"><a href="#booking"  onClick={() => handleNavClick('/tablepage')}>Table Booking</a></li>
                </ul>
                {/* <div className="chef-tag">
                    <span>Ruijkorn Imtrakun</span>
                </div> */}
                <button className="about-tag">Rujikorn Iimtrakul</button>
            </nav>

            <div className="dpt-content">
                <h1>DPT Restaurant</h1>
                <p>
                    ร้าน <span className="highlight">DPT Restaurant</span> สุดหรูสไตล์ฝรั่งเศสที่พร้อมมอบประสบการณ์
                    การรับประทานอาหารสุดพิเศษให้กับคุณลูกค้าของเรา จากฝีมือการปรุงอาหารของเชฟมืออาชีพที่มีประสบการณ์เป็นเชฟมาอย่างยาวนาน
                    และมีชื่อเสียง พร้อมกับบรรยากาศร้านสุดพิเศษที่ท่านจะประทับใจ และ ไม่มีวันลืม
                </p>
            </div>
        </div>
    );
};

export default DPTRestaurant;
