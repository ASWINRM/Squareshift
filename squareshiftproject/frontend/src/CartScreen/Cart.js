import React from 'react';
import { useSelector } from 'react-redux';
import "./Cart.css"
import CartHeader from './components/CartHeader/CartHeader';
import CartProduct from './components/CartProduct';
import Header from '../productscreen/Components/Header/Header'
import ShopHeader from '../productscreen/Components/ShopHeader';
const Cart = () => {

    const cart = useSelector(state => state.cartreducer)

  return (
      <div>
          <Header/>
        <ShopHeader/>
        <CartHeader />
        <CartProduct />
    </div>
  )
}

export default Cart