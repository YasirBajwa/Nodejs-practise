const express = require('express');
const {registerUser,currentUser,loginUser,logoutUser} = require('../controllers/usercontroller');
const router = express.Router();


router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/current',currentUser);
router.get('/logout',logoutUser);

module.exports = router;