import React,{useEffect, useState} from 'react';
import "./Login.css";
import {FiUser} from "react-icons/fi";
import {BiLockAlt} from "react-icons/bi";
import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import {loginaction} from '../Actions/userloginactions'


const Login = () => {

    const navigate = useNavigate()
    const [passwordShown, setpasswordShown] = useState(true);
    const userinfo = useSelector(state => state.userdetails);
    const dispatch = useDispatch();
    const [user_details, setUserDetail] = useState({
        email: "",
        password: "",
      });

      
   
    
    let handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetail((prev) => {
          return {
            ...prev,
            [name]: value,
          };
        });
      };

    const togglePassword = () => {
        setpasswordShown(!passwordShown);
      };

      const handleSignUp = () => {
          navigate("/Signup")
      }

    const handleSignin = async (e) => {
        e.preventDefault();
        dispatch(loginaction(user_details))
        navigate("/products")
        
        
    }
  return (
      <form>
    <div className='login_page'>
    <div className='login_title'>
    <h4>Welcome!</h4>
    </div>
    <div className='login_container'>
    <div className='single_form'>
   <label>Email</label>
   <div className='form_input'>
   <FiUser />
       <input type="email" placeholder="Your Email"   onChange={handleChange} name="email" required/>
   </div>
   </div>
   <div className='single_form'>

   <label>Password</label>
   <div className='form_input password'>
   <BiLockAlt />
   <input
                type={passwordShown ? "password" : "text"}
                name="password"
                placeholder="Your Password"
                onChange={handleChange}
                required
              />
              {passwordShown ? (
                <>
                  <AiOutlineEyeInvisible className='eye_icon' onClick={togglePassword} />
                </>
              ) : (
                <>
                <AiOutlineEye className='eye_icon' onClick={togglePassword} />
                </>
              )}
       
   </div>
   </div>
   <div className='login_btn'>
       <button type="submit" onClick={handleSignin}>Sign In</button>
       <button onClick ={handleSignUp} >Sign Up</button>

   </div>
    </div>
    </div>
    </form>
  )
}

export default Login