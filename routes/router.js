const express = require('express');
const authController = require('../controllers/authController');
const {banAccount} = require('../controllers/banAccount')
const {
    checkEmptyUsername,
    checkEmptyEmail,
    checkEmptyPass,
    checkEmptyConfirmPass,
    checkEmptySubjet,
    checkEmptyProblem,
} = require('../middlewares/auth/emptyField');
const { checkEmailDB } = require('../middlewares/auth/checkEmailDB');
const { registerDB } = require('../db/registerDB');
const { contact } = require('../controllers/contactController');
const {
    findProductById,
    addProduct,
    getProducts,
    verifyProduct,
    verifiedProductById,
    updateProduct,
    verifiedProduct,
    updateProductBD,
    findProductById2,
} = require('../controllers/productController');
const {
    checkEmptySku,
    checkEmptyName,
    checkEmptyDescription,
    checkEmptyPrice,
    checkEmptySkuUpdate,
    checkEmptyNameUpdate,
    checkEmptyDescriptionUpdate,
    checkEmptyPriceUpdate,
} = require('../middlewares/products/emptyField');
const {
    checkProductOnDb,
    checkProductExist,
} = require('../middlewares/products/checkProductOnDB');
const {
    isSkus,
    isPrice,
    isSkuUpdate,
    isPriceUpdate,
} = require('../middlewares/products/isSku');
const { isEmailContact } = require('../middlewares/auth/isEmail');
const { addProductToCart } = require('../controllers/cartController');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.session);
    if (req.session.loggedin) {
        res.render('index', {
            login: true,
            id: req.session.idUser,
            username: req.session.username,
            email: req.session.email,
        });
    } else {
        res.render('index', {
            login: false,
        });
    }
});
router.get('/logout', (req, res) => {
    req.session.loggedin = false;
    req.session.username = null;
    req.session.idUser = null;
    req.session.email = null;
    console.log(req.session);
    res.render('logout');
});
router.get('/login', (req, res) => {
    console.log(req.session);
    if (req.session.loggedin) {
        res.render('login', { alert: false, login: true });
    } else {
        res.render('login', { alert: false, login: false });
    }
});
router.get('/register', (req, res) => {
    console.log(req.session);
    if (req.session.loggedin) {
        res.render('register', { alert: false, login: true });
    } else {
        res.render('register', { alert: false, login: false });
    }
});
router.get('/forgot-pass', (req, res) => {
    console.log(req.session);
    if (req.session.loggedin) {
        res.render('forgot-pass', { alert: false, login: true });
    } else {
        res.render('forgot-pass', { alert: false, login: false });
    }
});
router.get('/contact', (req, res) => {
    if (req.session.loggedin) {
        res.render('contact', {
            login: true,
            id: req.session.idUser,
            username: req.session.username,
            email: req.session.email,
            alert: false,
        });
    } else {
        res.render('contact', {
            login: false,
            alert: false,
        });
    }
});

router.get('/nosotros', (req, res) => {
    if (req.session.loggedin) {
        res.render('nosotros', {
            login: true,
            id: req.session.idUser,
            username: req.session.username,
            email: req.session.email,
            alert: false,
        });
    } else {
        res.render('nosotros', {
            login: false,
            alert: false,
        });
    }
});

router.get('/products', getProducts);
router.get('/products/:sku', findProductById);

router.get('/verified-products/:sku', verifiedProductById);
router.get('/verified-products', verifiedProduct);

router.get('/admin/add-product', (req, res) => {
    if (req.session.loggedin) {
        res.render('addProduct', {
            login: true,
            id: req.session.idUser,
            username: req.session.username,
            email: req.session.email,
            alert: false,
        });
    } else {
        res.render('addProduct', {
            login: false,
            alert: false,
        });
    }
});

router.get('/admin/update-product', (req, res) => {
    if (req.session.loggedin) {
        res.render('updateProduct', {
            login: true,
            id: req.session.idUser,
            username: req.session.username,
            email: req.session.email,
            alert: false,
        });
    } else {
        res.render('updateProduct', {
            login: false,
            alert: false,
        });
    }
});

router.get('/carrito-compras', (req, res) => {
    console.log(req.session);
    if (req.session.loggedin) {
        res.render('carrito-compras', { alert: false, login: true });
    } else {
        res.render('carrito-compras', { alert: false, login: false });
    }
});

router.get('/addProduct', (req, res) => {
    console.log(req.session);
    if (req.session.loggedin) {
        res.render('addProduct', { alert: false, login: true });
    } else {
        res.render('addProduct', { alert: false, login: false });
    }
});

router.get('/updateProduct', (req, res) => {
    console.log(req.session);
    if (req.session.loggedin) {
        res.render('updateProduct', { alert: false, login: true });
    } else {
        res.render('updateProduct', { alert: false, login: false });
    }
});

router.get('/baned-account', (req, res) => {
    if (req.session.loggedin) {
        res.render('baned-account', { alert: false, login: true });
    } else {
        res.render('baned-account', { alert: false, login: false });
    }
})
//POSTS
router.post(
    '/register',
    checkEmptyUsername,
    checkEmptyEmail,
    checkEmptyPass,
    checkEmptyConfirmPass,
    checkEmailDB,
    registerDB
);
router.post('/login', authController.login);
router.post('/forgot-pass', authController.sendNewPassToEmail);
router.post(
    '/contact',
    isEmailContact,
    checkEmptySubjet,
    checkEmptyProblem,
    contact
);
router.post(
    '/admin/add-product',
    checkEmptySku,
    checkProductOnDb,
    checkEmptyName,
    checkEmptyDescription,
    checkEmptyPrice,
    isSkus,
    isPrice,
    addProduct
);

router.post(
    '/admin/update-product',
    checkEmptySkuUpdate,
    checkProductExist,
    checkEmptyNameUpdate,
    checkEmptyDescriptionUpdate,
    checkEmptyPriceUpdate,
    isSkuUpdate,
    isPriceUpdate,
    updateProductBD
);

router.post(
    '/admin/find-product',
    findProductById2
);

router.post('/add-to-cart', addProductToCart);

router.post('/admin/verified-product', updateProduct);
router.post('/baned-account', banAccount);
module.exports = router;
