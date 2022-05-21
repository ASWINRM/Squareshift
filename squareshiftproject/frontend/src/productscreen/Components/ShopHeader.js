import React,{useState} from 'react'
import { useSelector } from 'react-redux'

const ShopHeader = () => {


    const [category,setCategory] = useState("all")

    const handleCategory = (e) => {
        setCategory(e.target.value)
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