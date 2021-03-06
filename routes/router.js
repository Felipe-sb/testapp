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
    checkEmptyEmailRegister,
    checkEmptyPassRegister,
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
    getProductsCart,
    deleteCart,
    deleteProductBD,
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
    checkEmptyGame,
    checkEmptyGameUpdate,
    checkEmptyLevelUpdate,
    checkEmptyLevel,
    checkEmptyNameContact,
    checkEmptySubject,
    checkEmptyText,
    checkEmptySkuDelete,
} = require('../middlewares/products/emptyField');
const {
    checkProductOnDb,
    checkProductExist,
    checkProductExistSeach,
    checkProduct,
} = require('../middlewares/products/checkProductOnDB');
const {
    isSkus,
    isPrice,
    isSkuUpdate,
    isPriceUpdate,
    isLevel,
    isSkuDelete,
} = require('../middlewares/products/isSku');
const { isEmailContact, isEmail, isEmailRegister, checkPass, confirmPass, checkConfirmPass } = require('../middlewares/auth/isEmail');
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

router.get('/admin/delete-product', (req, res) => {
    if (req.session.loggedin) {
        res.render('deleteProduct', {
            login: true,
            id: req.session.idUser,
            username: req.session.username,
            email: req.session.email,
            alert: false,
        });
    } else {
        res.render('deleteProduct', {
            login: false,
            alert: false,
        });
    }
});

router.get('/perfil-usuario', (req, res) => {
    if (req.session.loggedin) {
        res.render('perfil-usuario', {
            login: true,
            id: req.session.idUser,
            username: req.session.username,
            email: req.session.email,
            alert: false,
        });
    } else {
        res.render('perfil-usuario', {
            login: false,
            alert: false,
        });
    }
});

router.get('/perfil', (req, res) => {
    if (req.session.loggedin) {
        res.render('perfil', {
            login: true,
            id: req.session.idUser,
            username: req.session.username,
            email: req.session.email,
            alert: false,
        });
    } else {
        res.render('perfil', {
            login: false,
            alert: false,
        });
    }
});

router.get('/medios-pago', (req, res) => {
    if (req.session.loggedin) {
        res.render('medios-pago', {
            login: true,
            id: req.session.idUser,
            username: req.session.username,
            email: req.session.email,
            alert: false,
        });
    } else {
        res.render('medios-pago', {
            login: false,
            alert: false,
        });
    }
});

router.get('/pedidos', (req, res) => {
    if (req.session.loggedin) {
        res.render('pedidos', {
            login: true,
            id: req.session.idUser,
            username: req.session.username,
            email: req.session.email,
            alert: false,
        });
    } else {
        res.render('pedidos', {
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

router.get('/deleteProduct', (req, res) => {
    console.log(req.session);
    if (req.session.loggedin) {
        res.render('deleteProduct', { alert: false, login: true });
    } else {
        res.render('deleteProduct', { alert: false, login: false });
    }
});

router.get('/products', getProducts);
router.get('/products/:sku', findProductById);

router.get('/carrito-compras', getProductsCart);
router.get('/carrito-compras/:id', findProductById);

router.get('/verified-products/:sku', verifiedProductById);
router.get('/verified-products', verifiedProduct);

router.get('/addProduct', (req, res) => {
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

router.get('/findProduct', (req, res) => {
    if (req.session.loggedin) {
        res.render('findProduct', {
            login: true,
            id: req.session.idUser,
            username: req.session.username,
            email: req.session.email,
            alert: false,
        });
    } else {
        res.render('findProduct', {
            login: false,
            alert: false,
        });
    }
});

router.get('/updateProduct', (req, res) => {
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

router.get('/findProduct', (req, res) => {
    console.log(req.session);
    if (req.session.loggedin) {
        res.render('findProduct', { alert: false, login: true });
    } else {
        res.render('findProduct', { alert: false, login: false });
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
    checkEmptyEmailRegister,
    checkEmptyPassRegister,
    checkEmptyConfirmPass,
    checkEmailDB,
    isEmailRegister,
    checkPass,
    checkConfirmPass,
    confirmPass,
    registerDB
);
router.post('/login',isEmail, authController.login);
router.post('/forgot-pass', authController.sendNewPassToEmail);

router.post(
    '/contact',
    isEmailContact,
    checkEmptyNameContact,
    checkEmptySubject,
    checkEmptyText,
    contact
);

router.post(
    '/carrito-compras',
    deleteCart
    
);

router.post(
    '/addProduct',
    checkEmptySku,
    checkProductOnDb,
    checkEmptyName,
    checkEmptyGame,
    checkEmptyLevel,
    checkEmptyDescription,
    checkEmptyPrice,
    isSkus,
    isPrice,
    isLevel,
    addProduct
);

router.post(
    '/updateProduct',
    checkEmptySkuUpdate,
    checkProductExist,
    checkEmptyNameUpdate,
    checkEmptyGameUpdate,
    checkEmptyLevelUpdate,
    checkEmptyDescriptionUpdate,
    checkEmptyPriceUpdate,
    isSkuUpdate,
    isPriceUpdate,
    updateProductBD
);

router.post(
    '/deleteProduct',
    checkProduct,
    isSkuDelete,
    checkEmptySkuDelete,
    deleteProductBD
    
);

router.post(
    '/findProduct',
    checkProductExistSeach,
    findProductById2
);

router.post('/add-to-cart', addProductToCart);

router.post('/admin/verified-product', updateProduct);
router.post('/baned-account', banAccount);
module.exports = router;
