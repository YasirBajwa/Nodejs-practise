
// @desc    Get all contacts
// @route   GET /api/contacts
// @access  Public

const getContacts = (req, res) => {
    res.status(200).json({message:'Fetched all contacts'})
}

// @desc    Get single contact
// @route   GET /api/contacts/:id
// @access  Public

const getContact = async (req, res) => {
    res.status(200).json({message:`Fetched contact with id ${req.params.id}`})
}

// @desc  create New contact
// @route   POST /api/contacts
// @access  Public

const createContat = async (req, res) => {
     console.log('req.body==>',req.body)
     const {name, email, phone} = req.body;
     if(!name || !email || !phone){
      res.status(400);
      throw new Error('Please provide all fields')
     }
    res.status(201).json({message:'Created a contact'})
}
// @desc  Update a contact
// @route   PUT /api/contacts
// @access  Public

const updateContact = async (req, res) => {
    res.status(200).json({message:`Updated contact with id ${req.params.id}`})
}

// @desc    Delete  contact
// @route   DELETE /api/contacts
// @access  Public  

const deleteContact = async(req, res) => {
    res.status(200).json({message:`Delete contact with id ${req.params.id}`})
}

module.exports = {
    getContacts,
    getContact,
    createContat,
    updateContact,
    deleteContact
}
