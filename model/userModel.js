const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please enter the username!!"]
    },
    email:{
        type:String,
        required:[true,"Please enter your email address!!"],
        unique:[true,"Email address already used!!"]
    },
    password:{
        type:String,
        required:[true,"Please enter the passsword!!"]
    }
},
{
    timestamps:true
})

const user=mongoose.model('User',userSchema);
module.exports=user;