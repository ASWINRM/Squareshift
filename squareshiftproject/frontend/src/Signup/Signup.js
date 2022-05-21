import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import { BiLockAlt } from "react-icons/bi";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = ({history}) => {
  const navigate = useNavigate();
  const [passwordShown, setpasswordShown] = useState(true);
  const [confirmpasswordShown, setconfirmpasswordShown] = useState(true);

  const [user_details, setUserDetail] = useState({
    username: "",
    email:"",
    password: "",
    confirmPassword:"",
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

  const togglePassword = (type) => {
    if (type == "password") {
      setpasswordShown(!passwordShown);
    } else if(type == "confirm") {
      setconfirmpasswordShown(!confirmpasswordShown);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("../");
  };


  return (
    <form onSubmit = {handleSubmit} >
    <div className="login_page">
      <div className="login_title">
        <h4>Register Now!</h4>
      </div>
      <div className="login_container register">
        <div className="single_form">
          <label>Username</label>
          <div className="form_input">
            <FiUser />
            <input type="text" name="username" placeholder="Your Username" required/>
          </div>
        </div>
        <div className="single_form">
          <label>Email Address</label>
          <div className="form_input">
            <FiUser />
            <input type="email" placeholder="Your Email Address" name="email" required/>
          </div>
        </div>
        <div className="single_form">
          <label>Password</label>
          <div className="form_input password">
            <BiLockAlt />
            <input
              type={passwordShown ? "password" : "text"}
              name="password"
              placeholder="Your Password"
              // onChange={handleChange}
              required
            />
            {passwordShown ? (
              <>
                <AiOutlineEyeInvisible
                  className="eye_icon"
                  onClick={() => togglePassword("password")}
                />
              </>
            ) : (
              <>
                <AiOutlineEye
                  className="eye_icon"
                  onClick={() => togglePassword("password")}
                />
              </>
            )}
          </div>
        </div>
        <div className="single_form">
          <label>Confirm Password</label>
          <div className="form_input password">
            <BiLockAlt />
            <input
              type={confirmpasswordShown ? "password" : "text"}
              name="confirmPassword"
              placeholder="Confirm your Password"
              // onChange={handleChange}
              required
            />
            {confirmpasswordShown ? (
              <>
                <AiOutlineEyeInvisible
                  className="eye_icon"
                  onClick={() => togglePassword("confirm")}
                />
              </>
            ) : (
              <>
                <AiOutlineEye
                  className="eye_icon"
                  onClick={() => togglePassword("confirm")}
                />
              </>
            )}
          </div>
        </div>
        <div className="login_btn">
          <button type="submit" onClick={()=>{history.push('/products')}} >Signup </button>
        </div>
      </div>
    </div>
    </form>
  );
};

export default Signup;
