const express =require('express')
const router = express.Router();
const asynchandler =require('express-async-handler')
const User = require('../model/UserSchema');


router.post('/login', asynchandler(async (req, res) => {
    
    const {email,password}=req.body.user_details
        if(!email || !password){
          res.status(401).send("provide both email and password")
        }
        console.log("userlogin")
        console.log(email)
        console.log(password)
        const user=await User.findOne({email})
        if(!user){
            res.status(200).send('No user Found with this Email Id please Sign up')
           
            
        }
         
         
        if(user ){
            if (user.password == password) {
                res.status(200).send({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    Status:true
                })
            }
        }else{
           res.status(200).send("Invalid username or password")
          
        }
           
        }
    
    
))


router.post('/signup',asynchandler(async(req,res)=>{
    try{
        let {name,email,password,isAdmin}=req.body.user_details
        let user;
        
        const exisitinguser=await User.findOne({name})
        if(exisitinguser){
            console.log("exisitinguser")
            res.status(200).send("This User is already found, please login!")
           
            
            
        }else{
            console.log("signupElse")
            console.log(name +" ,"+email+" ,"+password)
            if (name !== "" && email !== "" && password !== "") {
                
                if (isAdmin) {
                     user=await  User.create({
                    name,
                    email,
                    password,
                    isAdmin: true
                   })
                } else {
                    user=await  User.create({
                    name,
                    email,
                    password
                   })
                }
                
                try{
                  
                    console.log("update")
                    res.send({
                        _id:user._id,
                        name:user.name,
                        email:user.email,
                        isAdmin: user.isAdmin,
                        Status:true
                      })
                }catch(e){
                    console.log(e)
                }
                
            }   
        }
    }catch(e){
        console.log(e)
        res.status(401).send(e)
    }}))

module.exports = router;