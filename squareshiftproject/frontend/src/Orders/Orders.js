import React,{useState} from 'react';
import { AiOutlineSwapLeft } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import "./Orders.css"
import swal from "sweetalert";
import OrderSummaryProducts from './OrderSummaryProducts';
import { useNavigate } from 'react-router-dom';

const Orders = () => {

    const [customer] = useState(JSON.parse(sessionStorage.getItem("customer")));
 const navigate = useNavigate()
    const cart = useSelector(state => state.cartreducer.cartitems)
    const totalPrice =
    cart.reduce((acc,curr) => {
         return acc + curr.price
    },0)

    const handleProceed = () => {
        swal("The Order Has been Successfully placed", "", "success", {
            closeOnClickOutside: false,
            className: "success-swal",
          }).then(() => {
            navigate("../products");
          });
    }

    return (
        <div className="orderSummary">
          <h2 className="page-heading">Order Summary</h2>
          <h3 className="section-title">Customer order details</h3>
          <div className="order-summary-boxes">
            <div className="billing-details-box">
              <div>
                <span>Customer Name</span>
                <p>
                  : <span>{customer["name"]} </span>
                </p>
              </div>
              <div>
                <span>Mobile No</span>
                <p>
                  : <span>{customer["phone"]} </span>
                </p>
              </div>
              <div>
                <span>Email Id</span>
                <p>
                  : <span> {customer["email"]} </span>
                </p>
              </div>
              <div>
                <span>Delivery address </span>
                <p>
                  {" "}
                  : <span>{customer.address} </span>{" "}
                </p>
              </div>
              
            </div>
          
          </div>
          <div className="order-summary-table-title">
            <h3 className="section-title">List of products ordered by customer</h3>
            
          </div>
          <div className="summary-order-details">
            <div className="orderSummaryProducts-title">
              <h5 hidden>Product id</h5>
              <h5>Product Name</h5>
              <h5>Product Quantity</h5>
              <h5>Price</h5>
              <h5>Status</h5>
            </div>
            {cart.map((item) => (
              <OrderSummaryProducts key={item.id} item={item} />
            ))}
          </div>
          <div className="place-order-section">
            <span></span>
            <button type="submit" onClick={handleProceed}>
             Proceed to Confirm
            </button>
            <p className="total-price">
              Order Total <span>&#x20B9; {totalPrice?.toFixed(2)}</span>
            </p>
          </div>
          
        </div>
      );
    };
  

export default Orders