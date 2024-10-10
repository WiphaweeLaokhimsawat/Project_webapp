const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3100;

// กำหนดค่าการเชื่อมต่อกับ MySQL
const db = mysql.createConnection({
  host: 'ddc.dumri.in.th',//เปลี่ยนทุกครั้งที่เปิด DTB
  user: 'myadmin01',
  password: 'Go6AM0Hnv8jqer65',
  database: 'myadmin01'
});

// เชื่อมต่อกับ MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});