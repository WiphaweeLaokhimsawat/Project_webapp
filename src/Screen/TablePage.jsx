import React from 'react';
import './Style/TablePage.css';


function TablePage() {
  return (
    <div className="TablePage">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">DPT Restaurant</div>
        <ul className="navLinks">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#recommended-menu">Recommended Menu</a></li>
          <li><a href="#chef">Chef</a></li>
          <li><a href="#table-booking">Table booking</a></li>
        </ul>
        <button className="accountButton">Rujikorn Iimtrakul</button>
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
