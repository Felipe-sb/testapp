const express = require('express');
const con = require('../db/db')
const authController = require('../controllers/authController'); <<
<<
<<
<
HEAD
const { checkEmptyUsername, checkEmptyEmail, checkEmptyPass, checkEmptyConfirmPass } = require('../middlewares/auth/emptyField'); ===
===
=
const { checkEmptyUsername, checkEmptyEmail, checkEmptyPass, checkEmptyConfirmPass, checkEmptySubjet, checkEmptyProblem } = require('../middlewares/auth/emptyField'); >>>
>>>
>
15814 f7af2afda4ed4e37e3d62921f329e4f4beb
const { checkEmailDB } = require('../middlewares/auth/checkEmailDB');
const { registerDB } = require('../db/registerDB');
const { contact } = require('../controllers/contactController');
const { findProductById, addProduct, getProducts } = require('../controllers/productController');
const { checkEmptySku, checkEmptyName, checkEmptyDescription, checkEmptyPrice } = require('../middlewares/products/emptyField');
const { checkProductOnDb } = require('../middlewares/products/checkProductOnDB');
const { isSkus, isPrice } = require('../middlewares/products/isSku');
const { isEmailContact } = require('../middlewares/auth/isEmail');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.session);
    if (req.session.loggedin) {
        res.render('index', {
            login: true,
            id: req.session.idUser,
            username: req.session.username,
            email: req.session.email
        })
    } else {
        res.render('index', {
            login: false,
        })
    }
});
router.get('/logout', (req, res) => {
    req.session.loggedin = false
    req.session.username = null
    req.session.idUser = null
    req.session.email = null
    console.log(req.session);
    res.render('logout');
})
router.get('/login', (req, res) => {
    console.log(req.session);
    if (req.session.loggedin) {
        res.render('login', { alert: false, login: true })
    } else {
        res.render('login', { alert: false, login: false });
    }
});
router.get('/register', (req, res) => {
    console.log(req.session);
    if (req.session.loggedin) {
        res.render('register', { alert: false, login: true })
    } else {
        res.render('register', { alert: false, login: false });
    }
});
router.get('/forgot-pass', (req, res) => {
    console.log(req.session);
    if (req.session.loggedin) {
        res.render('forgot-pass', { alert: false, login: true })
    } else {
        res.render('forgot-pass', { alert: false, login: false });
    }
})
router.get('/contact', (req, res) => {
    res.render('contact', { alert: false })
})
router.get('/products', getProducts)
router.get('/products/:sku', findProductById)

router.get('/admin/add-product', (req, res) => {
    if (req.session.loggedin) {
        res.render('addProduct', {
            login: true,
            id: req.session.idUser,
            username: req.session.username,
            email: req.session.email,
            alert: false
        })
    } else {
        res.render('addProduct', {
            login: false,
            alert: false
        })
    }
})

//POSTS
router.post('/register', checkEmptyUsername, checkEmptyEmail, checkEmptyPass, checkEmptyConfirmPass, checkEmailDB, registerDB)
router.post('/login', authController.login)
router.post('/forgot-pass', authController.sendNewPassToEmail)
router.post('/contact', isEmailContact, checkEmptySubjet, checkEmptyProblem, contact)
router.post('/admin/add-product', checkEmptySku, checkProductOnDb, checkEmptyName, checkEmptyDescription, checkEmptyPrice, isSkus, isPrice, addProduct)
module.exports = router;