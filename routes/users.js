const express = require('express');
const router = express.Router();
const UserControl = require('../controllers/user')


router.post('/login',UserControl.login );

router.post('/register',UserControl.register)

router.get('/users', UserControl.getAllUser);

// router.get('/user/:id',UserControl.getUser);


module.exports = router;