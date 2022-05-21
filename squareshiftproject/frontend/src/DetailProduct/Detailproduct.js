import React, { useEffect,useState } from 'react';
import Header from '../productscreen/Components/Header/Header';
import { useDispatch ,useSelector} from 'react-redux';
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

    const cartlist = useSelector(state => state.cartreducer)
    const {cartitems}=cartlist
    return (
        <div>
            <Header></Header>
            
            {
                loading && <Loader></Loader>
            }
            {
                product && <div key ={product.id} className='product'>
              
               <div className="product-img">
                 <img src={product.image} alt="" />
                </div>
                    <div className="product_detail">
                        <h2 className="product-name">{product.title}</h2>
                         <div className="product-desc">
                            <p>{ product.description}</p>
                        </div>
                        <div className='single_product_bottom'>
                           
                            <div className="product-price">Price :
                               &#8377;{product.price}
                            </div>
                            <div >
                                 {
                                      cartitems.some((c) => c.id == product.id) ? (
                                        <button onClick={() => {
                                             dispatch({ type: "CART_REMOVE_ITEMS", payload: product })
                                             
                                             }} className='add_btndetail'>Added</button>
                                      ) : (
                                              <button onClick={() => {
                                                
                                                 addtocart(product)
                                               }} className='add_btndetail'>Add To Cart</button>
                                        )
                                  }
                          
                          </div>
                    </div>
                       
                
        
              </div>
            
            </div>
                  }
               
            </div>
    );
}

export default Detailproduct;