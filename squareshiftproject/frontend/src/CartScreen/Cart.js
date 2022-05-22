import React from 'react';
import { useSelector } from 'react-redux';
import "./Cart.css"
import CartHeader from './components/CartHeader/CartHeader';
import CartProduct from './components/CartProduct';
import Header from '../productscreen/Components/Header/Header'
import ShopHeader from '../productscreen/Components/ShopHeader';
import Alert from '../Alert/Alert';
const Cart = () => {

    const cart = useSelector(state => state.cartreducer)
     const userinfo = useSelector((state) => state.userloginreducer)
    const { userdetails } = userinfo
  return (
      <div>
          {
              userdetails ? (
                  <div>
                  <Header/>
                  <ShopHeader/>
                  <CartHeader />
                  <CartProduct />
                  </div>
                   
              ) : (
                      <Alert></Alert>
            )
          }
         
    </div>
  )
}

export default Cart