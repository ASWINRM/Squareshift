import React from 'react'
import "./AddProduct.css"
const ProductDesc = () => {
  return (
    <>
         <div className='delete_form'>
        <label>Product Name</label>
        <input type="text" placeholder='Enter username' name="title" required />
         </div>
         <div className='delete_form'>
        <label>Product Price</label>
        <input type="number" placeholder='Enter email' name="price" required />
         </div>
         <div className='delete_form'>
        <label>Product Description</label>
        {/* <input type="number" placeholder='Enter email' name="price" required /> */}
        <textarea rows = "3" columns="2" name = "description" required />
         </div>
         <div className='delete_form'>
        <label>Product Image</label>
        <input type="file"  name="image" required />
         </div>
         <div className='delete_form'>
        <label>Product Category</label>
        <select name = "category">
        <option value="">Select category</option>
         <option value="men's clothing">Men's clothing</option>
        <option value ="women's clothing">Women's clothing</option>
        <option value="electronics">Electronics</option>
        <option value="jewellery">Jewellery</option>

</select>
         </div>
         
    </>
  )
}

export default ProductDesc