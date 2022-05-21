import {  Routes, Route } from 'react-router-dom';
import './App.css';
import Products from './products/Products'
function App() {
  
  return (
    

   <Routes>
    <Route path="/products" element={<Products/>} />
  </Routes>

   
  );
}

export default App;
