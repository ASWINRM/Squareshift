import React,{useState} from 'react'
import "./DeleteUser.css"
import { GrClose } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import swal from "sweetalert";
import axios from 'axios'
import { useSelector } from 'react-redux';
import Alert from "../../Alert/Alert";
const DeleteUser = () => {
    const navigate = useNavigate()

    const [user,setUser] = useState({
        name:"",
        email:""
    })

const deleteUser =async (e) => {
  e.preventDefault()
  let data = {}
  for(let i=0;i<e.target.length;i++){
      data[e.target[i].name] = data[e.target[i].value]
  }
  setUser(data)
        let newdata = await axios.post('http://localhost:5000/api/user/deleteuser', { user })
        
  swal("The user is deleted successfully", "", "success", {
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
      const userinfo = useSelector((state) => state.userloginreducer)
    const { userdetails } = userinfo
    return (
      <div>
           {
          userdetails.isAdmin?( <div className='deleteUser'>
     <div className='delete_container'>
       <div className="delete_head">
          <h4>Delete User</h4>
          <GrClose
            style={{ borderRadius: "9999px" }}
            onClick={toproductpage }
          />
        </div>
        <form  onSubmit={deleteUser} className='delete_body'>
         <div className='delete_form'>
        <label>Username</label>
        <input type="text" placeholder='Enter username' name="name" required />
         </div>
         <div className='delete_form'>
        <label>Email</label>
        <input type="email" placeholder='Enter email' name="email" required />
         </div>
         <div className='delete_btn'>
             <button type = "submit">Delete User</button>
         </div>
        </form>
    </div>
    </div>):(<Alert/>)
      } 
       </div>
   
  )
}

export default DeleteUser