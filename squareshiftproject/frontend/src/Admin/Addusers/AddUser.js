import React,{useState} from 'react';
import "./AddUser.css";
import { GrClose } from "react-icons/gr";
import swal from "sweetalert";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const AddUser = () => {
    const navigate = useNavigate()
    const [user,setUser] = useState({
        name:"",
        email:"",
        password:"",
        confirm:""
    })
    const addUser = async(e) => {
     e.preventDefault()
      let data = {}

    for(let i=0;i<e.target.length;i++){
    data[e.target[i].name] = data[e.target[i].value]
    }
    setUser(data)
    let newdata=await axios.post('http://localhost:5000/api/user/signup',{user_details:user})
   swal("The user is added successfully", "", "success", {
    closeOnClickOutside: false,
    className: "success-swal",
    }).then(() => {
    navigate("/products");
    });
    }

     const toproductpage = (e) => {
        e.preventDefault();
        navigate("/products");
    }
  return (
    <div className='add_user'>
    <div className='add_user_container'>
    <div className="delete_head">
          <h4>Add User</h4>
          <GrClose
            style={{ borderRadius: "9999px" }}
            onClick={toproductpage }
          />
        </div>
        <form  onSubmit={addUser} className='delete_body'>
         <div className='delete_form'>
        <label>Username</label>
        <input type="text" placeholder='Enter username' name="name" required />
         </div>
         <div className='delete_form'>
        <label>Email</label>
        <input type="email" placeholder='Enter email' name="email" required />
         </div>
         <div className='delete_form'>
        <label>Password</label>
        <input type="password" placeholder='Enter password' name="password" required />
         </div>
         <div className='delete_form'>
        <label>Confirm Password</label>
        <input type="text" placeholder='Enter confirm password' name="confirm" required />
         </div>
         <div className='add_user_btn'>
             <button type = "submit">Add User</button>
         </div>
        </form>
    </div>
    </div>
  )
}

export default AddUser