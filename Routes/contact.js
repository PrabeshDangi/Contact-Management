const express=require("express")
const controller=require("../Controller/contactController")
const router=express.Router();

router.route("/").get(controller.getAllContacts).post(controller.postContact);
router.route("/:id").get(controller.getContact).put(controller.putContacts).delete(controller.deleteContact);



module.exports=router;