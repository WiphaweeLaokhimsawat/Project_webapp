import React, { useState, useEffect } from 'react';
import './Style/tablepage.css';
import { useLocation,useNavigate } from 'react-router-dom';

function TablePage() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ user: '', tel: '', role: '' });
  const location = useLocation();
  const { day, time,time_end } = location.state || {};
  const [showDropdown, setShowDropdown] = useState(false);

  const handleNavClick = (path) => {
    navigate(path); // Navigate to the given path
  };

  const handleTableClick = (table) => {
    // ส่งข้อมูลโต๊ะที่เลือกไปยังหน้า TableBooking พร้อมกับข้อมูล state
    console.log(table ,day ,time,time_end);
    navigate('/tablebooking', { state: { table ,day ,time,time_end} });
  };

  // ฟังก์ชันจัดการการคลิกเพื่อแสดงปุ่ม Logout
  const toggleDropdown = () => {
    if (userData.user) {
      // ถ้ามีข้อมูลผู้ใช้ให้แสดง dropdown
      setShowDropdown(!showDropdown);
    } else {
      // ถ้าไม่มีข้อมูลผู้ใช้ให้ไปหน้า login
      navigate('/login');
    }
  };
  const goToAccount = () => {
    navigate('/account');
  };
  const goToBookingHistory = () => {
    navigate('/detailbooking');
  };


  // ฟังก์ชันจัดการ Logout
  const handleLogout = () => {
    // ลบข้อมูลผู้ใช้จาก localStorage
    localStorage.removeItem('user');
    // นำทางกลับไปหน้า login
    navigate('/first');
  };
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUserData(storedUser);
    } else {
      // ถ้าไม่มีข้อมูลผู้ใช้ใน localStorage นำทางไปที่หน้า login
      navigate('/first');
    }
  }, [navigate]);
  return (
    <div className="TablePage">
      {/* Navbar */}
      <nav className="navbarTable">
        <div className="logo-table">DPT Restaurant</div>
        <ul className="navLink-table">
          <li className="navItem"><a href="#home" onClick={() => handleNavClick('/home')}>Home</a></li>
          <li className="navItem"><a href="#about" onClick={() => handleNavClick('/about')}>About</a></li>
          <li className="navItem"><a href="#menu" onClick={() => handleNavClick('/menupage')}>Recommended Menu</a></li>
          <li className="navItem"><a href="#chef" onClick={() => handleNavClick('/chefpage')}>Chef</a></li>
          <li className="navItem"><a href="#settime" className="active" onClick={() => handleNavClick('/settime')}>Table Booking</a></li>
        </ul>
        {/* <button className="home-tag">{userData.user}</button> */}
        {/* แสดงชื่อผู้ใช้และปุ่ม Logout */}
        <div className="dropdown-table">
          <button className="table-tag" onClick={toggleDropdown}>
            {userData.user || "LOGIN"}
          </button>

          {showDropdown && (
            <div className="dropdowntable-menu">
              <ul>
                <li onClick={goToAccount}>Account</li>
                <li onClick={goToBookingHistory}>Booking History</li>
                <li onClick={handleLogout}>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Table Reservation Section */}
      <div className="table-reservation">
        <h2>Reserve a Table</h2>
        <div className="table-grid">
          {['A-01', 'A-02', 'A-03', 'A-04', 'B-01', 'B-02', 'B-03', 'B-04',
            'C-01', 'C-02', 'C-03', 'C-04', 'D-01', 'D-02', 'D-03', 'D-04',
            'VIP-01', 'VIP-02'].map((table) => (
              <button
                key={table}
                className="tableButton"
                onClick={() => handleTableClick(table)} // เมื่อคลิกจะส่งโต๊ะที่เลือก
              >
                {table}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}

export default TablePage;
