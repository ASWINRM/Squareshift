import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {filterproduct} from '../../Actions/productsaction'
const ShopHeader = () => {


    const [category,setCategory] = useState("all")
    const dispatch = useDispatch();
    const handleCategory = (e) => {
        console.log(e.target.value)
        e.preventDefault();
        setCategory(e.target.value)
        dispatch(filterproduct(e.target.value));
    }

  return (
    <div>
     <div className="shop-header">
      <h3 className="page-title">Filter by category : </h3>
      <div className='select_category'>
     <select onChange = {handleCategory}>
        <option value="" disabled>Select category</option>
         <option value="men's clothing">Men's clothing</option>
        <option value ="women's clothing">Women's clothing</option>
        <option value="electronics">Electronics</option>
        <option value="jewellery">Jewellery</option>

</select>
</div>
    </div>
    </div>
  )
}

export default ShopHeader