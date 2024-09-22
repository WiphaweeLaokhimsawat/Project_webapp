

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menupage from './screen/Menupage';
import FirstPage from'./screen/FirstPage';
import Login from './screen/LoginPage';
import Register from './screen/RegisterPage';
import Home from './screen/HomePage';
import About from './screen/AboutPage';
import Chefpage from './screen/Chefpage';
import TablePage from './screen/TablePage';
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route index element={<TablePage/>}/>
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="menupage" element={<Menupage/>}/>
        <Route path="chefpage" element={<Chefpage/>}/>
        <Route path="tablepage" element={<TablePage/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
