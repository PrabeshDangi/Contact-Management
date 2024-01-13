const express=require("express")
const router=express.Router();
const userController=require("../Controller/userController");


router.post('/register',userController.registerUser);
router.post('/login',userController.userLogin);
router.get('/current',userController.currentUser);

module.exports=router;