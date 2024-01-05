const express=require("express")
const dotenv=require("dotenv");
dotenv.config({path:'./config.env'})
const contact_routes=require("./Routes/contact");
const connectDB=require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");



connectDB();
const app=express();
const port=process.env.PORT||5000;

// mongoose.connect(process.env.CONN_STR,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }).then((conn)=>{
//     console.log("DB connection successful");
// }).catch((err)=>{
//     console.log(err.message);
// })






app.use(express.json());
app.use("/api/contacts",contact_routes)
app.use(errorHandler)


app.listen(port,()=>{
    console.log("Server started!!")
})