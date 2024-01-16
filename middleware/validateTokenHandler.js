const asyncHandler=require("express-async-handler")

const jwt=require("jsonwebtoken");

const tokenValidator=asyncHandler(async(req,res,next)=>{
    let token;
    const authHeader= req.headers.Authorization || req.headers.authorization
    if(authHeader && authHeader.startsWith("Bearer")){
        token= authHeader.split(" ")[1];
        jwt.verify(token,process.env.ACCESS_SECRET_KEY,(err,decoded)=>{
            if(err)
            {
                const error=new Error("User unauthorized!!");
                error.status=401;
                return next(error);
            }
            else{
                req.user=decoded.user
                next();
            }
        });
       
    }
    else
    {
        const error=new Error("Token is missing!!")
        error.status=401;
        return next(error);
    }
    
})

module.exports=tokenValidator;