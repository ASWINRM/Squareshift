import {  Routes, Route } from 'react-router-dom';
import './App.css';
import Products from './productscreen/Productsview/Products'
import Login from './login/Login'
import Signup from './Signup/Signup';
import Detailproduct from './DetailProduct/Detailproduct'
import Cart from './CartScreen/Cart'
function App() {
  
  return (
    

    <Routes>

      <Route path="/" element={<Login />} />
       <Route path="/signup" element={<Signup/>} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<Detailproduct />}></Route>
      <Route path="/cart" element={<Cart></Cart>}></Route>
  </Routes>

   
  );
}

export default App;
