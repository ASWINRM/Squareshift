import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Customer.css";

const Customer = () => {

    const navigate = useNavigate()

    const customerSubmitHandler = (e) => {
        e.preventDefault()
        let data = {}
     for(let i=0;i<e.target.length;i++){
         let name = e.target[i].name
         let value = e.target[i].value
        data[name] = value
     } 
     data.address = data.address2
      ? data.address1.concat(","," ", data.address2)
      : data.address1;
      sessionStorage.setItem("customer",JSON.stringify(data))
      navigate("/orders")
    }

    return (
        <div className="sale-detail-page">
          <div className="sales-detail-container">
            <h2 className="sales-title">Customer Detail</h2>
            <form onSubmit={(e) => customerSubmitHandler(e)}>
              <div className="sales-detail">
                <div className="input-box">
                  <label for="email">Email</label>
                 
                  <input
                    type="email"
                    placeholder="Enter your email"
                    id="email"
                    name="email"
                    required
                  />
                </div>
               
                <div className="input-box">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    id="name"
                    name="name"
                    required
                  />

                </div>
            <div className='contact'>
                <div className="input-box contact">
                  <label for="name">Contact Number</label>
                  <input
                    type="tel"
                    placeholder="Enter your phone No."
                    id="phone"
                    name="phone"
                    required
                  />
                 </div>
                </div>
             <div className='address_container'>
                <h2>Delivery Address</h2>
                  <div className='sales-detail'>
                  <div className="input-box">
                  <label for="address1">Address 1</label>
                  <input
                    type="text"
                    placeholder="Enter yourAddress line 1"
                    id="address1"
                    name="address1"
                    required
                  />
             </div>
             <div className="input-box">
                  <label for="address2">Address 2</label>
                  <input
                    type="text"
                    placeholder="Enter your Address line 2"
                    id="address2"
                    name="address2"
                    
                  />
              </div>
             <div className="input-box">
                  <label for="address2">City</label>
                  <input
                    type="text"
                    placeholder="Enter your city"
                    id="city"
                    name="city"
                    required
                  />
             </div>
              <div className="input-box">
                  <label for="state">State</label>
                  <input
                    type="text"
                    placeholder="Enter your state"
                    id="state"
                    name="state"
                    required
                  />
             </div>
            <div className="input-box">
                  <label for="address2">Pincode</label>
                  <input
                    type="text"
                    placeholder="Enter your pincode"
                    id="pincode"
                    name="pincode"
                    required
                  />
            </div>
    </div>
</div>
              
                
              
               
               
                
              
              </div>
              <div className="sales-btn">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      );
    };
export default Customer