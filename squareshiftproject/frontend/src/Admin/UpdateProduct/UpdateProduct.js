import React,{useState} from 'react'
import ProductDesc from '../addProduct/productDesc.js';
import "./UpdateProduct.css";
import { GrClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from 'axios'
const UpdateProduct = async() => {
    const navigate = useNavigate();

    const [productId,setProductId] = useState("")

    const updateProduct = async(e) => {
        e.preventDefault();
        let data = {}
        for(let i=0;i<e.target.length;i++){
            data[e.target[i].name] = data[e.target[i].value]
        }

        await axios.put(`https://fakestoreapi.com/products/${productId}`,data)
        
         
        swal("The product is updated successfully", "", "success", {
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
    <div className="update_product">
      <div className="updateproduct_container">
        <div className="delete_head">
          <h4>Update Product</h4>
          <GrClose
            style={{ borderRadius: "9999px" }}
            onClick={toproductpage}
          />
        </div>
        <form onSubmit={updateProduct} className="delete_body">
        <div className='delete_form'>
        <label>Product Id</label>
        <input type="number" placeholder='Enter product id' name="productId" onChange = {(e) =>setProductId(e.target.value)} required />
         </div>
          <ProductDesc />
          <div className='add_user_btn'>
             <button type = "submit">Update Product</button>
         </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateProduct