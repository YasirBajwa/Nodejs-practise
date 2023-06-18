const express = require('express');

const router = express.Router();
const {getContacts,updateContact,createContat,deleteContact, getContact} = require('../controllers/contactController')

router.route("/").get(getContacts).post(createContat)
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact)


module.exports = router;


// router.route("/").get(getContacts)

// router.route("/:id").get(getContact)

// router.route("/").post(createContat)

// router.route("/:id").put(updateContact)

// router.route("/:id").delete(deleteContact)