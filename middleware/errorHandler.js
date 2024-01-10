const constants=require("../constant")

const errorHandler=(error,req,res,next)=>{
    error.statusCode=error.statusCode ? error.statusCode : 500;
    error.status=error.status || "Internal server Error";
    res.status(error.statusCode).json({
        status:error.statusCode,
        message: error.message
    });

}
// const { constants } = require("../constants");
// const errorHandler = (err, req, res, next) => {
//   const statusCode = res.statusCode ? res.statusCode : 500;
//   switch (statusCode) {
//     case constants.VALIDATION_ERROR:
//       res.json({
//         title: "Validation Failed",
//         message: err.message,
//         stackTrace: err.stack,
//       });
//       break;
//     case constants.NOT_FOUND:
//       res.json({
//         title: "Not Found",
//         message: err.message,
//         stackTrace: err.stack,
//       });
//     case constants.UNAUTHORIZED:
//       res.json({
//         title: "Unauthorized",
//         message: err.message,
//         stackTrace: err.stack,
//       });
//     case constants.FORBIDDEN:
//       res.json({
//         title: "Forbidden",
//         message: err.message,
//         stackTrace: err.stack,
//       });
//     case constants.SERVER_ERROR:
//       res.json({
//         title: "Server Error",
//         message: err.message,
//         stackTrace: err.stack,
//       });
//     default:
//       console.log("No Error, All good !");
//       break;
//   }
// };

module.exports = errorHandler;