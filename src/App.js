

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menupage from './Screen/Menupage';
import FirstPage from './Screen/Firstpage';
import Login from './Screen/LoginPage';
import Register from './Screen/RegisterPage';
import Home from './Screen/HomePage';
import About from './Screen/AboutPage';
import TablePage from './Screen/TablePage';
import Chefpage from './Screen/Chefpage';
import TableBooking from './Screen/TableBooking';
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route index element={<Firstpage/>}/>
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="menupage" element={<Menupage/>}/>
        <Route path="tablepage" element={<TablePage/>}/>
        <Route path="chefpage" element={<Chefpage/>}/>
        <Route path="tablebooking" element={<TableBooking/>}/>

      </Routes>
    </BrowserRouter>
  );
}
// dfds
export default App;
