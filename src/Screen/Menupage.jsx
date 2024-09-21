import React from 'react';
import './Style/Menupage.css';

const Menupage = () => {
  return (
    <div className="menu-container">
      <header className="menu-header">
        <h1>DPT Restaurant</h1>
        <nav className="menu-nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/recommended-menu" className="active">Recommended Menu</a>
          <a href="/chef">Chef</a>
          <a href="/table-booking">Table booking</a>
        </nav>
      </header>
      
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
