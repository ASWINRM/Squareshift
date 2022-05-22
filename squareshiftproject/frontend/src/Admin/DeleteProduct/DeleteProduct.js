import React,{useState} from 'react';
import "./DeleteProduct.css";
import { GrClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Alert from '../../Alert/Alert';
import { useSelector } from 'react-redux'
import Header from '../../productscreen/Components/Header/Header';
import ShopHeader from '../../productscreen/Components/ShopHeader';
import axios from 'axios';
const DeleteProduct = async () => {
    const navigate = useNavigate();

    const [productId,setProductId] = useState("")
    const userinfo = useSelector((state) => state.userloginreducer)
    const { userdetails } = userinfo
    const deleteProduct =async (e) => {
        e.preventDefault();
        let data = {}
        for(let i=0;i<e.target.length;i++){
            data[e.target[i].name] = data[e.target[i].value]
        }
        console.log(data);
        let newdata=await axios.delete(`https://fakestoreapi.com/products/${productId}`)
         swal("The product is deleted successfully", "", "success", {
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
      <div>
          {
              (userdetails && userdetails.isAdmin) ? (
                  <div>
                      <Header></Header>
                       <ShopHeader></ShopHeader>
                      <div className='delete_product'>
                     <div className='delete_product_container'>
                     <div className="delete_head">
                     <h4>Delete Product</h4>
                     <GrClose
                         style={{ borderRadius: "9999px" }}
                        onClick={toproductpage }
                     />
                              
                   </div>
                <form onSubmit={deleteProduct} className="delete_body">
                <div className='delete_form'>
                 <label>Product Id</label>
                                      <input type="number" placeholder='Enter product id' name="productId" onChange={(e) => {setProductId(e.target.value) }} required />
              </div>
             <div className='delete_btn'>
               <button type = "submit" onClick={deleteProduct}>Delete Product</button>
             </div>
             </form>
                 </div>
             </div>
            </div>
                      
                      
                 
              
              ): (
                    <Alert />  
              )
          }
    </div>
   
  )
}

export default DeleteProduct