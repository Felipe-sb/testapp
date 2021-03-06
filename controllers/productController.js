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


exports.getProductsCart = (req, res) => {
    con.query('SELECT * FROM cart', (error, result) => {

        if (error) throw error;
        let data = result.map(product => {
            if (product.users_id === req.session.idUser) {
                return product
            }
        })
        .filter(product => product !== undefined)
        console.log(data);
        if (result.length !== 0) {
            if (req.session.loggedin) {
                res.render('carrito-compras', {
                    data,
                    login: true,
                    username:req.session.username
                })
                return
            } else {
                res.render('carrito-compras', {
                    data: data,
                    login: false
                })
                return
            }
        }  else {
            res.render('carrito-compras', {
                data: null,
                login: true,
                username:req.session.username
            })
            return
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
            const { sku, name, game, level, description, price, partialDelete } = data;
            if (req.session.loggedin) {
                res.render(`product`, {
                    sku: sku,
                    name: name,
                    game: game, 
                    level: level,
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
                    game: game,
                    level: level,
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
            const { sku, name, game, level, description, price, partialDelete } = data;
            if (req.session.loggedin) {
                res.render(`product`, {
                    sku: sku,
                    name: name,
                    game: game,
                    level: level,
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
                    game: game,
                    level: level,
                    description: description,
                    price: price,
                    partialDelete: partialDelete,
                    login: false
                });
            }

        }
    });
};

exports.findProductByIdCart = (req, res) => {
    const { sku } = req.params;
    console.log(sku);
    con.query(`SELECT * FROM products WHERE sku=${sku}`, (error, result) => {
        if (error) throw error;
        console.log(result);
        if (result.length !== 0) {
            const [data] = result;
            console.log(data);
            const { sku, name, game, level, description, price, partialDelete } = data;
            if (req.session.loggedin) {
                res.render(`product`, {
                    sku: sku,
                    name: name,
                    game: game,
                    level: level,
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
                    game: game,
                    level: level,
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
            const { sku, name, game, level, description, price, partialDelete } = data;
            if (req.session.loggedin) {
                res.render(`verified-product`, {
                    sku: sku,
                    name: name,
                    game: game,
                    level: level,
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
                    game: game,
                    level: level,
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

exports.deleteCart = (req, res) => {
    con.query(
        `DELETE FROM cart `,
        (error, result) => {
            if (error) throw error;
            res.render('carrito-compras', {
                login: req.session.loggedin,
                alert: true,
                alertTitle: 'EXITO',
                alertMessage: 'Carrito Vaciado Exitosamente',
                alertIcon: 'success',
                showConfirmButton: true,
                timer: false,
                ruta: 'carrito-compras',
            })
        }
    );
};

exports.addProduct = (req, res) => {
    const { sku, name, game, level, description, price } = req.body;
    con.query(
        `INSERT INTO products VALUES (${sku},'${name}','${game}','${level}','${description}',${price},'0','0')`,
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
                ruta: 'addProduct',
            })
        }
    );
};

exports.updateProductBD = (req, res) => {
    const { sku, name, game, level, description, price } = req.body;
    con.query(
        `UPDATE products SET name='${name}',game='${game}',level='${level}',description='${description}',price= ${price},partialDelete= '0',verified= '0' WHERE sku=${sku} `,
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

exports.deleteProductBD = (req, res) => {
    const {sku} = req.body;
    con.query(
        `DELETE FROM products WHERE sku=${sku} `,
        (error, result) => {
            if (error) throw error;
            res.render('deleteProduct', {
                login: req.session.loggedin,
                alert: true,
                alertTitle: 'EXITO',
                alertMessage: 'Producto Eliminado Exitosamente',
                alertIcon: 'success',
                showConfirmButton: true,
                timer: false,
                ruta: 'deleteProduct',
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
            text: `Bienvenido a payTooWin ${username} ahora disfrutaras mucho m??s de tus juegos preferidos comprando tu primera cuenta`,
        });
        */

        res.redirect('/verified-products')
    })
}

