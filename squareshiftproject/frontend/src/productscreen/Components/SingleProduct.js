import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


const SingleProduct = () => {

    const dispatch = useDispatch();

    const productList = useSelector(state => state.productreducer);
    const { loading, products, error } = productList;
     
    const addtocart = (product) => {
       
       console.log(product)
       
        dispatch({type:"CART_ADD_SUCCESS",payload: product});
    }

  return (
      <div className='single_grouped_products'>
      {
          products?.map((product,i) => (
            <div key ={product.id} className='single_product'>
            <div className="ssp-body">
        <div className="ssp-img">
          <img src={product.image} alt="" />
        </div>
        <h3 className="ssp-name">{product.title}</h3>
      </div>
      <div className='single_product_bottom'>
      <div className="ssp-price">
        &#8377;{product.price}
      </div>
      <div className='add_btn'>
      <button onClick={()=>addtocart(product)}>Add to Cart</button>
      </div>
      </div>
    </div>
          ))
      }
   
    </div>
  )
}

export default SingleProduct