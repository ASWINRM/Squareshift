import {  Routes, Route } from 'react-router-dom';
import './App.css';
import Products from './productscreen/Productsview/Products'
import Login from './login/Login'
import Signup from './Signup/Signup';
function App() {
  
  return (
    

    <Routes>
      <Route path="/" element={<Login />} />
       <Route path="/signup" element={<Signup/>} />
    <Route path="/products" element={<Products/>} />
  </Routes>

   
  );
}

export default App;
