
const mongoose=require("mongoose")

const connectDb=async()=>{
    try{
        //console.log("Mongoose string:",process.env.CONN_STR);
        const connect=await mongoose.connect(process.env.CONN_STR)

        console.log("DB connection successful");
        
    }
    catch(err)
    {
        console.log(err.message);
        process.exit(1);
    }
}
module.exports=connectDb;