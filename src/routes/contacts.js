const express = require('express');

const router = express.Router();
const {getContacts,updateContact,createContat,deleteContact, getContact} = require('../controllers/contactController')
const validateToken = require('../middleware/validateToken')

router.use(validateToken)
router.route("/").get(getContacts).post(createContat)
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact)


module.exports = router;