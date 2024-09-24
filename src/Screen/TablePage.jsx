import React from 'react';
import './Style/TablePage.css';
import { useNavigate } from 'react-router-dom';

function TablePage() {
  const navigate = useNavigate(); 
  const handleNavClick = (path) => {
    navigate(path); // Navigate to the given path
  };
  return (
    <div className="TablePage">
      {/* Navbar */}
      <nav className="navbarTable">
        <div className="logo-table">DPT Restaurant</div>
        <ul className="navLink-table">
          <li className="navItem"><a href="#firstpage" onClick={() => handleNavClick('/firstpage')}>Home</a></li>
          <li className="navItem"><a href="#about" onClick={() => handleNavClick('/about')}>About</a></li>
          <li className="navItem"><a href="#menu" onClick={() => handleNavClick('/menupage')}>Recommended Menu</a></li>
          <li className="navItem"><a href="#chef" onClick={() => handleNavClick('/chefpage')}>Chef</a></li>
          <li className="navItem"><a href="#booking" className='active' onClick={() => handleNavClick('/tablepage')}>Table Booking</a></li>
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
              <button key={table} className="tableButton">{table}</button>
            ))}
        </div>
      </div>
    </div>
  );
}

export default TablePage;
