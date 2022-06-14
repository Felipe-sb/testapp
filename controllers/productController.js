const con = require('../db/db');
exports.getProducts = (req, res) => {
    con.query('SELECT * FROM products', (error, result) => {

        if (error) throw error;
        console.log(result)
        if (result.length !== 0) {
            if (req.session.loggedin) {
                res.render('products', {
                    data: result,
                    login: true,
                    username:req.session.username
                })
            } else {
                res.render('products', {
                    data: result,
                    login: false
                })
            }

        }  else {
            res.render('products', {
                data: null,
                login: true,
                username:req.session.username
            })
        }
    });
};
exports.findProductById2 = (req, res) => {
    const { sku } = req.body;
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
                    login: true,
                    username:req.session.username
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
                    login: true,
                    username:req.session.username
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

exports.verifiedProductById = (req, res) => {
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
                res.render(`verified-product`, {
                    sku: sku,
                    name: name,
                    description: description,
                    price: price,
                    partialDelete: partialDelete,
                    login: true,
                    username:req.session.username
                });
            } else {
                res.render(`verified-product`, {
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


exports.verifiedProduct = (req, res) => {
    con.query('SELECT * FROM products', (error, result) => {
        if (error) throw error;
        console.log(result)
        if (result.length !== 0) {
            if (req.session.loggedin) {
                res.render('verified-products', {
                    data: result,
                    login: true,
                    username:req.session.username
                })
            } else {
                res.render('verified-products', {
                    data: result,
                    login: false
                })
            }

        }
    });
};

exports.addProduct = (req, res) => {
    const { sku, name, description, price } = req.body;
    con.query(
        `INSERT INTO products VALUES (${sku},'${name}','${description}',${price},'0','0')`,
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

exports.updateProductBD = (req, res) => {
    const { sku, name, description, price } = req.body;
    con.query(
        `UPDATE products SET name='${name}',description='${description}',price= ${price},partialDelete= '0',verified= '0' WHERE sku=${sku} `,
        (error, result) => {
            if (error) throw error;
            res.render('updateProduct', {
                login: req.session.loggedin,
                alert: true,
                alertTitle: 'EXITO',
                alertMessage: 'Producto Actualizado Exitosamente',
                alertIcon: 'success',
                showConfirmButton: true,
                timer: false,
                ruta: 'updateProduct',
            })
        }
    );
};

exports.updateProduct = (req,res)=>{
    const {sku} = req.body;
    console.log(sku)
    con.query(`UPDATE products SET verified = '1' WHERE sku = ${sku};`,async(error,result)=>{
        if(error) throw error

        
        /*

        TODO ESPERANDO LA VISTA PARA PODER AGREGAR EL PRODUCTO 

        await transporter.sendMail({
            from: '"payTooWin" <paytoowin.noreply@gmail.com>',
            to: `${email}`,
            subject: 'account created',
            text: `Bienvenido a payTooWin ${username} ahora disfrutaras mucho más de tus juegos preferidos comprando tu primera cuenta`,
        });
        */

        res.redirect('/verified-products')
    })
}

