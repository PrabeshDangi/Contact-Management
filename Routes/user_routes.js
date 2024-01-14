const express=require("express")
const router=express.Router();
const userController=require("../Controller/userController");
const validateToken=require("../middleware/validateTokenHandler")


router.post('/register',userController.registerUser);
router.post('/login',userController.userLogin);
router.get('/current',validateToken,userController.currentUser);

module.exports=router;