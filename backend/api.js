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



app.get('/api/user', function(req, res){
  db.query("SELECT * FROM userdb_dtp", function(err, result, fields){
    if(err) {
      return res.status(400).send('Not found');
    }
    console.log(result);
    res.send(result);
  });
})

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

  app.post("/register", (req, res) => {
  const { user, password, tel } = req.body;

  if (!user ||  !password || !tel) {
    return res.status(400).json({ error: "Please provide all required fields" });
  }

  // คำสั่ง SQL ในการแทรกข้อมูลผู้ใช้ใหม่ลงในฐานข้อมูล
  const query = "INSERT INTO userdb_dtp (user, password, tel) VALUES (?, ?, ?)";
  db.query(query, [user, password, tel], (err, results) => {
    if (err) {
      console.error("Error inserting data into MySQL:", err);
      return res.status(500).json({ error: "Failed to register user" });
    }
    res.status(200).json({ message: "User registered successfully!" });
  });
});

// เริ่มต้นเซิร์ฟเวอร์
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
