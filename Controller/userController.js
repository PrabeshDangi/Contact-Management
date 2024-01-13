const asyncHandler = require("express-async-handler");
const bcrypt=require("bcrypt");
const User=require("../model/userModel");


// @desc Register User
// @route POST/api/users/register
// @access Public
const registerUser=asyncHandler(async(req,res,next)=>{
    const{username,email,password}=req.body;

    if(!username|| !email|| !password){
        const error=new Error("All fields mandatory!!")
        error.status=400;
        return next(error);
    }

    const userAvailable=await User.findOne({email});

    if(userAvailable)
    {
        const error=new Error("Email is already registered!!")
        error.status=400;
        return next(error);
    }

    const hashedPassword=await bcrypt.hash(password,5)

    const user=await User.create({
        username,
        email,
        password:hashedPassword
    })

    res.status(201).json({
        status:"success",
        _id: user.id,
        email:user.email
    })

    // if(user)
    // {
    //     res.status(201).json({
    //         status:"success",
    //         _id: user.id,
    //         email:user.email
    //     })
    // }
    // else{
    //     const error=new Error("Email address already used. Please use new email address!!")
    //     error.status=400
    //     return next(error)
    // }
})


// @desc User Login
// @route POST/api/users/login
// @access Public
const userLogin=asyncHandler(async(req,res,next)=>{
    res.json({message:"User Login!!"})
})


// @desc Current User
// @route get/api/users/current
// @access Private
const currentUser=asyncHandler(async(req,res,next)=>{
    res.json({message:"Current User information!!"})
})

module.exports={
    registerUser,
    userLogin,
    currentUser
}