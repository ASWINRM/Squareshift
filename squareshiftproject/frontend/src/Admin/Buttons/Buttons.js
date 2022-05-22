import React from 'react';
import './Buttons.css'
import { useNavigate } from "react-router-dom";
function Buttons() {
    const navigate = useNavigate()
    
    const deleteproduct = () => {
        navigate('/deleteproduct')
    }

    const updateproduct = () => {
          navigate('/updateproduct')
    }

     const addproduct = () => {
          navigate('/addproduct')
    }

    const adduser = () => {
        navigate('/adduser')
    }

    const deleteuser = () => {
        navigate('/deleteuser')
    }

    return (
        <div className="adminbtns">
            
            <button className="button-24" role="button" onClick={()=>addproduct()}>Add Product</button>
            <button className="button-24" role="button" onClick={()=>deleteproduct()} >Delete Product</button>
            <button className="button-24" role="button" onClick={()=>updateproduct()}>Update Product</button>
            <button className="button-24" role="button" onClick={()=>adduser()}>Add User</button>
            <button className="button-24" role="button" onClick={()=>deleteuser()}>Delete Users</button>
           
            
        </div>
    );
}

export default Buttons;