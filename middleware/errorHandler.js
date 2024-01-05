const constants=require("../constant")
const errorHandler = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Internal Server Error";
    switch(status){
        case constants.VALIDATION_ERROR:
            res.json({ 
                title:"Validation Error",
                error: message,
                stackTrace: err.stack 
            });
            break;
        case constants.NOT_FOUND:
            res.json({ 
                title:"Not Found",
                error: message,
                stackTrace: err.stack
             });
             break;
        case constants.UNAUTHORIZED:
            res.json({
                title:"Unauthorized error!!",
                error:message,
                stackTrace:err.stack
            });
            break;
        case constants.FORBIDDEN:
            res.json({
                title:"Forbidden error",
                error:message,
                stackTrace:err.stack
            });
            break;
        case constants.SERVER_ERROR:
            res.json({
                title:"Server Error",
                error:message,
                stackTrace:err.stack
            });
            break;
        default:
            console.log("No error, good to go buddy!!")
            break;

    };

}
    
   

module.exports=errorHandler;