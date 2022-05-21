const mongoose = require('mongoose');

const Userschema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
   email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        unique:true,
        minlength:6
    },
    resetpasswordtoken:String,
   
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    }
},{
    timestamps:true
},{collection: 'players'})


const User=mongoose.model('User',Userschema)

module.exports = User;