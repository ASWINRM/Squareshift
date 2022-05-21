import React,{useState} from 'react'
import { useSelector } from 'react-redux'

const CartHeader = () => {

    const cart = useSelector(state => state.cartreducer.cartitems)
    const [total,setTotal] = useState(0)
   console.log(cart)
    const totalPrice =
        cart.reduce((acc,curr) => {
             return acc + curr.price
        },0)


  return (
    <div>
    <div className="cart-product-header">
    <span className="cart-total-value">Quantity : {cart.length ?? 0}</span>
          <span className="cart-total-value">Total : &#x24; {totalPrice}</span>
          <button className="place-order-btn" type="submit">
            Proceed To Checkout
          </button>
        </div>
    </div>
  )
}

export default CartHeader