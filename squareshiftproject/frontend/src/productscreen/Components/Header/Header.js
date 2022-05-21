import React from "react";
import "./Header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { listproduct } from "../../../Actions/productsaction";
import { useDispatch, useSelector } from 'react-redux'
const Header = () => {
    const dispatch = useDispatch();
    const getallproducts = (e) => {
        e.preventDefault();
        dispatch(listproduct())
     
    }

    const userinfo = useSelector((state) => state.userloginreducer)
    const {name}=userinfo.userdetails
  return (
    <>
      <div className="product_header">
        <div className="left">
          <p style={{ fontSize: "20px" }}>The Shopping Store</p>
          <p>Home</p>
          <p onClick={getallproducts}>All products</p>
        </div>
        <div className="right">
          <div className="shop-cart-btn">
            <AiOutlineShoppingCart />{" "}
            {/* {cart.length ? ( */}
              <span className="cart-badge">1</span>
            {/* ) : null} */}
          </div>

          <FaUserCircle />
                  <p>{name}</p>
        </div>
      </div>
      <div className="header_bottom">
        <p>Super Deal!! Free shopping on Orders above $50</p>
      </div>
    </>
  );
};

export default Header;
