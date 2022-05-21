import React, { useEffect,useState } from 'react';
import Header from '../productscreen/Components/Header/Header';
import ShopHeader from '../productscreen/Components/ShopHeader';
import { useDispatch } from 'react-redux';
import Loader from '../componenets/Loader'
import axios from 'axios';
import "./detailproduct.css";
function Detailproduct({ match }) {
    
    const id = window.location.pathname.split('/')[2];
    console.log(id);
    const [product, setproduct] = useState(null);
    const dispatch = useDispatch();
    const [loading, setloading] = useState(true);
    useEffect(() => {
        (async () => {
        
            let { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
            if (data) {
                console.log(data);
                setproduct(data);
                setloading(false);
            }
            
        })();
    },[])
     const addtocart = (product) => {
       
       console.log(product)
       
        dispatch({type:"CART_ADD_SUCCESS",payload: product});
    }

    return (
        <div>
            <Header></Header>
            <ShopHeader></ShopHeader>
            {
                loading && <Loader></Loader>
            }
            {
                product && <div key ={product.id} className='product'>
              <div className="productpage">
               <div className="product-img">
                 <img src={product.image} alt="" />
                    </div>
                    <div className="product_detail">
                    <h3 className="product-name">{product.title}</h3>
                        </div>
                        <div className="product-desc">
                            <p>{ product.description}</p>
                        </div>
                   <div className='single_product_bottom'>
                     <div className="product-price">
                        &#8377;{product.price}
                      </div>
                  <div className='add_btn'>
                        <button onClick={()=>addtocart(product)}>Add to Cart</button>
                   </div>
                </div>
        
              </div>
            
            </div>
                  }
               
            </div>
    );
}

export default Detailproduct;