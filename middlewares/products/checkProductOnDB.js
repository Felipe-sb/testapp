const con = require('../../db/db');
exports.checkProductOnDb = (req, res, next) => {
    const { sku } = req.body;
    con.query(`SELECT sku FROM products WHERE sku=${sku}`, (error, result) => {
        if (error) throw error;
        if (result.length !== 0) {
            res.render('addProduct', {
                msg: 'el producto ya existe',
            });
        } else {
            next();
        }
    });
};
