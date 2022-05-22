import {  Routes, Route } from 'react-router-dom';
import './App.css';
import Products from './productscreen/Productsview/Products'
import Login from './login/Login'
import Signup from './Signup/Signup';
import Detailproduct from './DetailProduct/Detailproduct'
import Cart from './CartScreen/Cart'
import Orders from './Orders/Orders';
import Customer from './Customer/Customer';
import DeleteProduct from './Admin/DeleteProduct/DeleteProduct';
import UpdateProduct from './Admin/UpdateProduct/UpdateProduct';
import AddProduct from './Admin/addProduct/AddProduct';
import AddUser from './Admin/Addusers/AddUser';
import DeleteUser from './Admin/DeleteUser/DeleteUser';
function App() {
 
  return (
    

    <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<Detailproduct />}></Route>
      <Route path="/cart" element={<Cart></Cart>}></Route>
      <Route path="/Orders" element={<Orders></Orders>}></Route>
      <Route path="/customer" element={<Customer></Customer>}></Route>
      <Route path="/deleteproduct" element={<DeleteProduct></DeleteProduct>}></Route>
      <Route path="/updateproduct" element={<UpdateProduct></UpdateProduct>}></Route>
      <Route path="/addproduct" element={<AddProduct></AddProduct>}></Route>
      <Route path="/adduser" element={<AddUser></AddUser>}></Route>
      <Route path='/deleteuser'element={<DeleteUser></DeleteUser>}></Route>
  </Routes>

   
  );
}

export default App;
