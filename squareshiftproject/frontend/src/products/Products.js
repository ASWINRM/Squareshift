import React from 'react';
import {useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {listproduct} from '../Actions/productsaction'
import Loader from '../componenets/Loader'
import Error from '../componenets/Error'
function Products({history}) {
    const dispatch = useDispatch();

    const productList = useSelector(state => state.productreducer);
    const { loading, products, error } = productList;

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
                loading?<Loader></Loader>:error?<Error></Error>:<div>hi</div>
            }
        </div>
    );
}

export default Products;