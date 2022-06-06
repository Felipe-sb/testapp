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
                ruta: 'admin/add-product',
            });
        } else {
            next();
        }
    });
};
