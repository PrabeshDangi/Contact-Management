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
const putContacts=async(req,res)=>{
    res.status(201).json({message:"put contacts from controller!!"})
};

//@desc deleteContact
//@route DELETE/api/contacts/:id
//@access public
const deleteContact=async(req,res)=>{
    res.status(204).json({
        status:"success",
        data:null
    })
};


module.exports={
    getAllContacts,
    putContacts,
    deleteContact,
    getContact,
    postContact
}
