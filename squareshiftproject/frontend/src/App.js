import {  Routes, Route } from 'react-router-dom';
import './App.css';
import Products from './productscreen/Productsview/Products'
import Login from './login/Login'
import Signup from './Signup/Signup';
import Detailproduct from './DetailProduct/Detailproduct'
import Cart from './CartScreen/Cart'
import Orders from './Orders/Orders';
import Customer from './Customer/Customer';
function App() {
  
  return (
    

    <Routes>

      <Route path="/" element={<Login />} />
       <Route path="/signup" element={<Signup/>} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<Detailproduct />}></Route>
      <Route path="/cart" element={<Cart></Cart>}></Route>
      <Route path="/Orders" element={<Orders></Orders>}></Route>
      <Route path="/customer" element={<Customer></Customer>}></Route>
  </Routes>

   
  );
}

export default App;
