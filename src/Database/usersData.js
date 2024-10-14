// ฟังก์ชันเพิ่มผู้ใช้ใหม่
let users = [];
export const addUser = (newUser) => {
    users.push(newUser);
    console.log("User added successfully:", newUser);
  };
  
  // ฟังก์ชันค้นหาผู้ใช้โดยตรวจสอบจาก name และ password
  export const findUser = (name, password) => {
    return users.find(user => user.name === name && user.password === password);
  };
  
  // ฟังก์ชันสำหรับการเรียกดูรายชื่อผู้ใช้ทั้งหมด (สำหรับตรวจสอบใน console)
  export const getAllUsers = () => {
    return users;
  };