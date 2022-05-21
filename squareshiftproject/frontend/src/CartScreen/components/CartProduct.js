import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { AiFillDelete } from "react-icons/ai";

const CartProduct = () => {
  const cart = useSelector((state) => state.cartreducer.cartitems);
const dispatch = useDispatch()
  return (
    <div>
    <div className="cart-title">
        <p>Product Image</p>
        <p>Product Name</p>
        <p>Product Price</p>
        <p>Action</p>
    </div>
      {cart.length > 0 ? (
        cart.map((item, i) => (
          <div key={item.id} className="cart_items">
            <img src={item.image} />
            <p>{item.title}</p>
            <p>&#x24;{item.price}</p>
            <AiFillDelete
              onClick={() =>
                dispatch({ type: "CART_REMOVE_ITEMS", payload: item })
              }
            />
          </div>
        ))
      ) : (
        <p className="center">No cart to display</p>
      )}
    </div>
  );
};

export default CartProduct;
