import React from 'react';
import './Style/TablePage.css';
import { useNavigate } from 'react-router-dom';

function TablePage() {
  const navigate = useNavigate();

  const handleTableClick = (table) => {
    // ส่งข้อมูลโต๊ะที่เลือกไปยังหน้า TableBooking พร้อมกับข้อมูล state
    navigate('/tablebooking', { state: { table } });
  };

  return (
    <div className="TablePage">
      {/* Navbar */}
      <nav className="navbarTable">
        <div className="logo-table">DPT Restaurant</div>
        <ul className="navLink-table">
          <li className="navItem"><a href="#firstpage" onClick={() => navigate('/firstpage')}>Home</a></li>
          <li className="navItem"><a href="#about" onClick={() => navigate('/about')}>About</a></li>
          <li className="navItem"><a href="#menu" onClick={() => navigate('/menupage')}>Recommended Menu</a></li>
          <li className="navItem"><a href="#chef" onClick={() => navigate('/chefpage')}>Chef</a></li>
          <li className="navItem"><a href="#settime" className="active" onClick={() => navigate('/settime')}>Table Booking</a></li>
        </ul>
        <button className="table-tag">Rujikorn Iimtrakul</button>
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
