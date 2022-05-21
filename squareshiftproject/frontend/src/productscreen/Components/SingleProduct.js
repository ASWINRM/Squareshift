import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import {useState} from "react"
const SingleProduct = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const productList = useSelector(state => state.productreducer);
    const { loading, products, error } = productList;
   
    
    const addtocart = (product) => {
       
       console.log(product)
       
        dispatch({ type: "CART_ADD_SUCCESS", payload: product });
        
    }

    const handleproduct = (id) => {
      
      navigate(`/product/${id}`);

    }

    const cartlist = useSelector(state => state.cartreducer)
    const {cartitems}=cartlist
  return (
      <div className='single_grouped_products'>
          {
              products?.map((product, i) => {
                  
                      
                  return (
                      <div key={product.id} className='single_product' >
                          <div className="ssp-body">
                              <div className="ssp-img" onClick={() => handleproduct(product.id)}>
                                  <img src={product.image} alt="" style={{cursor: "pointer"}}/>
                              </div>
                              <h3 className="ssp-name">{product.title}</h3>
                          </div>
                          <div className='single_product_bottom'>
                              <div className="ssp-price">
                                  &#8377;{product.price}
                              </div>
                              <div className='add_btn'>
                                  {
                                      cartitems.some((c) => c.id == product.id) ? (
                                        <button onClick={() => {
                                             dispatch({ type: "CART_REMOVE_ITEMS", payload: product })
                                             
                                             }}>Added</button>
                                      ) : (
                                              <button onClick={() => {
                                                
                                                 addtocart(product)
                                               }}>Add To Cart</button>
                                        )
                                  }
                                  
                              </div>
                          </div>
                      </div>
                  );
              }
              )
          
      }
   
    </div>
  )
}

export default SingleProduct