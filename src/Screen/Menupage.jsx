import React from 'react';
import './Style/Menupage.css';
import { useNavigate } from 'react-router-dom';

function Menupage() {
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    navigate(path); // Navigate to the given path
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
          <li className="navItem"><a href="#booking" onClick={() => handleNavClick('/tablepage')}>Table booking</a></li>
        </ul>
        <button className="menu-tag">Rujikorn Iimtrakul</button>
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