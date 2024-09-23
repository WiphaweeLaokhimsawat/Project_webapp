import React from "react";
import './Style/ChefPage.css'; // Import the combined CSS


// Chef data
const chefData = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/eb997ed42105761aa0ba0cf7c0ca78ef204234498e04ceb3a828e8bc281ee113?placeholderIfAbsent=true&apiKey=481b691d389644fcbe1d378101c13fd3",
    description: "กอร์ดอน แรมเซย์ เชฟชื่อดังชาวอังกฤษ เจ้าของ 7 มิชลินสตาร์ โดยเฉพาะร้าน กอร์ดอน แรมเซย์ ในย่านเชลซี กรุงลอนดอน"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/259293f5a5354e71d1ed73c9d07895b9f461f25894834a86854477cfcec7c189?placeholderIfAbsent=true&apiKey=481b691d389644fcbe1d378101c13fd3",
    description: "เชฟอลัน หว่อง เจ้าของฉายา \"เจ้าพ่อแห่งครัวฮาวายสมัยใหม่\" เขาเป็น 1 ใน 12 เชฟ ที่ร่วมกันก่อตั้งกลุ่มเชฟท้องถิ่นฮาวายขึ้นมา"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad361e6f296e9fb898987212820285dce30d82fca26a8f5c9b931316ff44572e?placeholderIfAbsent=true&apiKey=481b691d389644fcbe1d378101c13fd3",
    description: "โนบุ มัตสึฮิซะ เชฟดังชาวญี่ปุ่น-เปรู เจ้าของร้านอาหารชื่อเดียวกับตัวเองมากกว่า 30 แห่งทั่วโลก"
  }
];

// ChefCard Component
function ChefCard({ image, description }) {
  return (
    <article className="chefCard-chef">
      <img src={image} alt="Chef portrait-chef" className="chefImage-chef" />
      <p className="chefDescription-chef">{description}</p>
    </article>
  );
}

// Header Component with highlighted name
function Header() {
  return (
    <header className="header-chef">
      <nav className="navbar-chef">
        <h1 className="logo-chef">DPT Restaurant</h1>
        <ul className="navLinks-chef">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Recommended Menu</a></li>
          <li><a href="#chef" className="active-chef">Chef</a></li>
          <li><a href="#booking">Table booking</a></li>
        </ul>
      </nav>
    </header>
  );
}

// Main ChefPage Component
function Chefpage() {
  return (
    <main className="chefPage-chef">
      <Header />
      <section className="chefGrid-chef">
        {chefData.map((chef, index) => (
          <ChefCard key={index} image={chef.image} description={chef.description} />
        ))}
      </section>
    </main>
  );
}

export default Chefpage;
