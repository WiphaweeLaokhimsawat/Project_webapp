import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Firstpage from './Screen/Firstpage'; // ตรวจสอบเส้นทางว่าไฟล์อยู่ในโฟลเดอร์ Screen
import Menupage from './Screen/Menupage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Menupage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
