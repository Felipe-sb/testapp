const express = require('express');
const con = require('../db/db')
const authController = require('../controllers/authController');
const { checkEmptyEmail } = require('../middlewares/emptyField');
const { isEmail } = require('../middlewares/isEmail');
const router = express.Router();
router.get('/',(req,res)=>{
    console.log(req.session);
    if (req.session.loggedin) {
        res.render('index',{
            login:true,
            id:req.session.idUser,
            username:req.session.username,
            email:req.session.email
        })
    }else{
        res.render('index',{
            login:false,
        })
    }
});
router.get('/logout',(req,res)=>{
    req.session.loggedin=false
    req.session.username=null
    req.session.idUser=null
    req.session.email=null
    console.log(req.session);
    res.render('logout');
})
router.get('/login', (req, res) => {
    console.log(req.session);
    if (req.session.loggedin) {
        res.render('login',{alert:false,login:true})
    }else{
        res.render('login',{alert:false,login:false});
    }
});
router.get('/register', (req, res) => {
    console.log(req.session);
    if (req.session.loggedin) {
        res.render('register',{alert:false,login:true})
    }else{
        res.render('register',{alert:false,login:false});
    }
});
router.get('/forgot-pass',(req,res)=>{
    console.log(req.session);
    if (req.session.loggedin) {
        res.render('forgot-pass',{alert:false,login:true})
    }else{
        res.render('forgot-pass',{alert:false,login:false});
    }
})
router.post('/register',authController.register)
router.post('/login',checkEmptyEmail,isEmail,authController.login)
router.post('/forgot-pass',authController.sendNewPassToEmail)
module.exports = router;
