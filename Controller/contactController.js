//const express=require("express")
const asyncHandler=require("express-async-handler")
const Contacts=require("../model/contactModel");

//@desc getAllContacts
//@route GET/api/contacts
//@access public
const getAllContacts=asyncHandler(async(req,res)=>{
    const contacts=await Contacts.find()
    res.status(200).json({
        status:"success",
        contacts:contacts
    })
});

// @desc getContacts single
// @route GET/api/contacts/:id
// @access public
const getContact = asyncHandler(async (req, res,next) => {
    
    const contact=await Contacts.findById(req.params.id)

    if(!contact){
        const error=new Error("Contact not found!!");
        error.status=404;
        return next(error);//Yeha nera return nagarda bug aako thiyo. i.e status success aairako thiyo!!
    }
    res.status(200).json({
        status:"Success",
        data:contact
    })
    
    
});

//@desc CreateContacts single
//@route POST/api/contacts
//@access public
const postContact = asyncHandler(async (req, res, next) => {
    console.log(req.body);
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
        const error = new Error("All fields are mandatory");
        error.status = 400;
        next(error);
    }
    const contact=Contacts.create({
        name,
        email,
        phone
    })
     res.status(201).json({
        status:"Success",
        data:req.body
    });
});



//@desc updateContacts
//@route PUT/api/contacts/:id
//@access public
const putContacts=asyncHandler(async(req,res)=>{
    const contact=await Contacts.findById(req.params.id);
    if(!contact)
    {
        const error=new Error("Contact Not found!!");
        error.status=404;
        return next(error);
    }

    const updatedContact=await Contacts.findByIdAndUpdate(req.params.id, req.body, {new:true,runValidators:true})
    res.status(201).json(updatedContact)
});

//@desc deleteContact
//@route DELETE/api/contacts/:id
//@access public
const deleteContact=asyncHandler(async(req,res)=>{
    const contact=await Contacts.findById(req.params.id);
    if(!contact)
    {
        const error=new Error("Contact Not found!!");
        error.status=404;
        return next(error);
    }

    const deleteContact=await Contacts.findByIdAndDelete(req.params.id)
    //const deleteContact=await Contacts.remove();
    res.status(204).json({
        status:"success",
        message:"Contact deleted Successfully"
    })
});


module.exports={
    getAllContacts,
    putContacts,
    deleteContact,
    getContact,
    postContact
}
