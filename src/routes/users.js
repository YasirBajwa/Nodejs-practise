const express = require('express');
const {registerUser,currentUser,loginUser,logoutUser} = require('../controllers/usercontroller');
const validateToken = require('../middleware/validateToken');
const router = express.Router();


router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/current',validateToken,currentUser);
router.get('/logout',logoutUser);

module.exports = router;