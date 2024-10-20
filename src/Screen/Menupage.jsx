import React, { useEffect, useState } from "react";
import './Style/menupage.css';
import { useNavigate } from 'react-router-dom';

function Menupage() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ user: '', tel: '', role: '' });
  const handleNavClick = (path) => {
    navigate(path); // Navigate to the given path
  };
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUserData(storedUser);
    } else {
      // ถ้าไม่มีข้อมูลผู้ใช้ใน localStorage นำทางไปที่หน้า login
      // navigate('/login');
    }
  }, [navigate]);
  // State สำหรับควบคุมการแสดงปุ่ม Logout
  const [showLogout, setShowLogout] = useState(false);

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
    <div className="menu-container">
      {/* <header className="menu-header"> */}

      <nav className="menu-nav">
        <div className="logo-menu">DPT Restaurant</div>
        <ul className="navlink-menu">
          <li className="navItem"><a href="#home" onClick={() => handleNavClick('/home')}>Home</a></li>
          <li className="navItem"><a href="#about" onClick={() => handleNavClick('/about')}>About</a></li>
          <li className="navItem"><a href="#menu" className="active" onClick={() => handleNavClick('/menupage')}>Recommended Menu</a></li>
          <li className="navItem"><a href="#chef" onClick={() => handleNavClick('/chefpage')}>Chef</a></li>
          <li className="navItem"><a href="#settime" onClick={() => handleNavClick('/settime')}>Table Booking</a></li>
        </ul>
        {/* <button className="home-tag">{userData.user}</button> */}
        {/* แสดงชื่อผู้ใช้และปุ่ม Logout */}
        <button className="home-tag" onClick={toggleLogout}>
          {userData.user || "LOGIN"}
        </button>
        {showLogout && (
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        )}
      </nav>
      {/* </header> */}

      <section className="menu-items">
        <div className="menu-item">
          <img src="5.jpg" alt="Spaghetti Carbonara" />
          <p>สปาเก็ตตี้คาโบนาร่า</p>
          <span>250 THB</span>
        </div>
        <div className="menu-item">
          <img src="8.jpeg" alt="Lasagna" />
          <p>ผักโขมอบชีส</p>
          <span>300 THB</span>
        </div>
        <div className="menu-item">
          <img src="6.jpg" alt="Truffle Pizza" />
          <p>ทรัฟเฟิลพิซซ่า</p>
          <span>450 THB</span>
        </div>
        <div className="menu-item">
          <img src="0.jpeg" alt="Lasagna Pork" />
          <p>ลาซานญ่าหมู</p>
          <span>300 THB</span>
        </div>
        <div className="menu-item">
          <img src="11.jpeg" alt="Beef Stew" />
          <p>สตูเนื้อ</p>
          <span>350 THB</span>
        </div>
        <div className="menu-item">
          <img src="7.jpg" alt="Escargot" />
          <p>หอยเชลล์อบเนย</p>
          <span>300 THB</span>
        </div>
        <div className="menu-item">
          <img src="3.jpg" alt="Mushroom Soup" />
          <p>ซุปเห็ด</p>
          <span>150 THB</span>
        </div>
        <div className="menu-item">
          <img src="2.jpg" alt="Pumpkin Soup" />
          <p>ซุปฟักทอง</p>
          <span>150 THB</span>
        </div>
      </section>
    </div>
  );
}

export default Menupage;