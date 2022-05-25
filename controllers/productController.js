const con = require('../db/db');
exports.getProducts = (req, res) => {
    con.query('SELECT * FROM products', (error, result) => {
        if (error) throw error;
        console.log(result)
        if (result.length !== 0) {
            if (req.session.loggedin) {
                res.render('products', {
                    data: result,
                    login: true
                })
            } else {
                res.render('products', {
                    data: result,
                    login: false
                })
            }

        }
    });
};
exports.findProductById = (req, res) => {
    const { sku } = req.params;
    console.log(sku);
    con.query(`SELECT * FROM products WHERE sku=${sku}`, (error, result) => {
        if (error) throw error;
        console.log(result);
        if (result.length !== 0) {
            const [data] = result;
            console.log(data);
            const { sku, name, description, price, partialDelete } = data;
            if (req.session.loggedin) {
                res.render(`product`, {
                    sku: sku,
                    name: name,
                    description: description,
                    price: price,
                    partialDelete: partialDelete,
                    login: true
                });
            } else {
                res.render(`product`, {
                    sku: sku,
                    name: name,
                    description: description,
                    price: price,
                    partialDelete: partialDelete,
                    login: false
                });
            }

        }
    });
};
exports.addProduct = (req, res) => {
    const { sku, name, description, price } = req.body;
    con.query(
        `INSERT INTO products VALUES (${sku},'${name}','${description}',${price},'1')`,
        (error, result) => {
            if (error) throw error;
            res.render('addProduct', {
                login: req.session.loggedin,
                alert: true,
                alertTitle: 'EXITO',
                alertMessage: 'Producto Agregado Exitosamente',
                alertIcon: 'success',
                showConfirmButton: true,
                timer: false,
                ruta: 'admin/add-product',
            })
        }
    );
};