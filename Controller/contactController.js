const express=require("express")
const asyncHandler=require("express-async-handler")
const Contacts=require("../model/contactModel")

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

//@desc getContacts single
//@route GET/api/contacts/:id
//@access public
const getContact=asyncHandler(async(req,res)=>{
    res.status(200).json({message:`single ${req.params.id} contacts from controller!!`})
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
     
        res.status(201).json(contact);
});



//@desc updateContacts
//@route PUT/api/contacts/:id
//@access public
const putContacts=asyncHandler(async(req,res)=>{
    res.status(201).json({message:"put contacts from controller!!"})
});

//@desc deleteContact
//@route DELETE/api/contacts/:id
//@access public
const deleteContact=asyncHandler(async(req,res)=>{
    res.status(204).json({
        status:"success",
        data:null
    })
});


module.exports={
    getAllContacts,
    putContacts,
    deleteContact,
    getContact,
    postContact
}