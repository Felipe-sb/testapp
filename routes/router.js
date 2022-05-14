const express = require('express');
const con = require('../db/db')
const authController = require('../controllers/authController')
const router = express.Router();
router.get('/',authController.loggedIn);
router.get('/logout',authController.logout)
router.get('/login', (req, res) => {
    res.render('login',{alert:false});
});
router.get('/register', (req, res) => {
    res.render('register',{alert:false});
});
router.get('/forgot-pass',(req,res)=>{
    res.render('forgot-pass')
})
router.post('/register',authController.register)
router.post('/login',authController.login)
module.exports = router;
