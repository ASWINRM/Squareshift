import React from "react";
import "./AddProduct.css";
import { GrClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import ProductDesc from "./productDesc";
import axios from 'axios'
const AddProduct = () => {
  const navigate = useNavigate();

  const addProduct = async(e) => {
    e.preventDefault();
    let data = {}
    for(let i=0;i<e.target.length;i++){
        data[e.target[i].name] = data[e.target[i].value]
      }
      
      await axios.post("https://fakestoreapi.com/products",JSON.stringify(data))
    
     
    swal("The product is added successfully", "", "success", {
      closeOnClickOutside: false,
      className: "success-swal",
    }).then(() => {
      navigate("/products");
    });
    };
    
     const toproductpage = (e) => {
        e.preventDefault();
        navigate("/products");
    }

  return (
    <div className="add_product">
      <div className="add_product_container">
        <div className="delete_head">
          <h4>Add new Product</h4>
          <GrClose
            style={{ borderRadius: "9999px" }}
            onClick={toproductpage}
          />
        </div>
        <form onSubmit={addProduct} className="delete_body">
          <ProductDesc />
          <div className='add_user_btn'>
             <button type = "submit" >Add Product</button>
         </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
