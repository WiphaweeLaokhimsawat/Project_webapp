const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3307;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// กำหนดค่าการเชื่อมต่อกับ MySQL
const db = mysql.createConnection({
    host: 'ddc.dumri.in.th',
    user: 'myadmin01',
    password: 'Go6AM0Hnv8jqer65',
    database: 'myadmin01'
  });
  

// เชื่อมต่อฐานข้อมูล
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});


app.get("/names", (req, res) => {
  const query = "SELECT user FROM userdb_dtp"; 
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Failed to retrieve data" });
    } else {
      res.status(200).json(results);
    }
  });
});

app.get("/phone", (req, res) => {
    const query = "SELECT tel FROM timedb_dtp"; 
    db.query(query, (err, results) => {
      if (err) {
        console.error("Error executing query:", err);
        res.status(500).json({ error: "Failed to retrieve data" });
      } else {
        res.status(200).json(results);
      }
    });
  });

  app.get("/table", (req, res) => {
    const query = "SELECT table_no FROM timedb_dtp"; 
    db.query(query, (err, results) => {
      if (err) {
        console.error("Error executing query:", err);
        res.status(500).json({ error: "Failed to retrieve data" });
      } else {
        res.status(200).json(results);
      }
    });
  });

// เริ่มต้นเซิร์ฟเวอร์
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
