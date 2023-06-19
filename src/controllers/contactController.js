
const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

// @desc    Get all contacts
// @route   GET /api/contacts
// @access  Private

const getContacts = asyncHandler( async(req, res) => {
    console.log('req.user ===>',req.user)
    const contacts =  await Contact.find({user_id:req.user._id});

    console.log('contacts',contacts)
    res.status(200).json(contacts)
})
// @desc    Get single contact
// @route   GET /api/contacts/:id
// @access  Private
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
     res.status(404);
     throw new Error('Contact not found');
    }
    res.status(200).json(contact)
})
// @desc  create New contact
// @route   POST /api/contacts
// @access  Private
const createContat = asyncHandler( async (req, res) => {
     const {name, email, phone} = req.body;
     if(!name || !email || !phone){
      res.status(400);
      throw new Error('Please provide all fields')
     }
     const contact = await Contact.create({
        name,
        email,
        phone,
        user_id:req.user._id
     })
    res.status(201).json({contact,code:201})
})
// @desc  Update a contact
// @route   PUT /api/contacts
// @access  Private

const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
     res.status(404);
     throw new Error('Contact not found');
    }

    if(contact.user_id.toString() !== req.user._id){
        res.status(403);
        throw new Error('Not authorized');
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new:true,
        }
     )

    res.status(200).json({updated_data:updatedContact,code:200})
})
// @desc    Delete  contact
// @route   DELETE /api/contacts
// @access  Private  
const deleteContact = asyncHandler( async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
     res.status(404);
     throw new Error('Contact not found');
    }
    if(contact.user_id.toString() !== req.user._id){
        res.status(403);
        throw new Error('Not authorized');
    }
    await Contact.findByIdAndDelete(req.params.id);
    // await Contact.findByIdAndDelete({_id:req.params.id});


    res.status(200).json({message:'Contact removed',code:200})
})

module.exports = {
    getContacts,
    getContact,
    createContat,
    updateContact,
    deleteContact
}
