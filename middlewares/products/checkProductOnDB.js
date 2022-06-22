const con = require('../../db/db');
exports.checkProductOnDb = (req, res, next) => {
    const { sku } = req.body;
    con.query(`SELECT sku FROM products WHERE sku=${sku}`, (error, result) => {
        if (error) throw error;
        if (result.length !== 0) {
            res.render('addProduct', {
                login: req.session.loggedin,
                alert: true,
                alertTitle: 'Ooooooops',
                alertMessage: 'El Producto Ya Existe',
                alertIcon: 'warning',
                showConfirmButton: true,
                timer: false,
                ruta: 'addProduct',
            });
        } else {
            next();
        }
    });
};

exports.checkProductExist = (req, res, next) => {
    const { sku } = req.body;
    con.query(`SELECT sku FROM products WHERE sku=${sku}`, (error, result) => {
        if (error) throw error;
        if (result.length === 0) {
            res.render('updateProduct', {
                login: req.session.loggedin,
                alert: true,
                alertTitle: 'Ooooooops',
                alertMessage: 'El Producto No Existe',
                alertIcon: 'warning',
                showConfirmButton: true,
                timer: false,
                ruta: 'updateProduct',
            });
        } else {
            next();
        }
    });
};

exports.checkProductExistSeach = (req, res, next) => {
    const { sku } = req.body;
    con.query(`SELECT sku FROM products WHERE sku=${sku}`, (error, result) => {
        if (error) throw error;
        if (result.length === 0) {
            res.render('findProduct', {
                login: req.session.loggedin,
                alert: true,
                alertTitle: 'Ooooooops',
                alertMessage: 'El Producto No Existe Por Favor Añadalo',
                alertIcon: 'warning',
                showConfirmButton: true,
                timer: false,
                ruta: 'addProduct',
            });
        } else {
            next();
        }
    });
};
