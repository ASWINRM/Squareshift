import React from 'react';
import {useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {listproduct} from '../../Actions/productsaction'
import Loader from '../../componenets/Loader'
import Error from '../../componenets/Error'
import Header from '../Components/Header/Header';
import "./Products.css";
import SingleProduct from '../Components/SingleProduct';
import ShopHeader from '../Components/ShopHeader';
import Buttons from '../../Admin/Buttons/Buttons'
import Alert from '../../Alert/Alert'
function Products({history}) {
    const dispatch = useDispatch();
   
    const productList = useSelector(state => state.productreducer);
    const { loading, products, error } = productList;

      const userinfo = useSelector((state) => state.userloginreducer)
    const { userdetails } = userinfo
    

    useEffect(() => {
        console.log("dei machan");
        dispatch(listproduct())
    }, [dispatch])
    

    useEffect(() => {
        console.log(products);
    },[products])

    return (
        <div>
            {
                userdetails ?
                    <div>
                         <Header />
                        <ShopHeader />
                        {
                            userdetails.isAdmin && <div>
                                <Buttons></Buttons>
                            </div>
                        }
                         {
                         loading?<Loader></Loader>:error?<Error></Error>:<div><SingleProduct /></div>
                        }
                      
                   </div>
            
        :<Alert></Alert>
            }
        </div>
    );
}

export default Products;