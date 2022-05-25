const con = require('../db/db');
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
            res.render(`product`, {
                sku: sku,
                name: name,
                description: description,
                price: price,
                partialDelete: partialDelete,
            });
        }
    });
};
exports.addProduct = (req, res) => {
    const { sku, name, description, price } = req.body;
    con.query(
        `INSERT INTO products VALUES (${sku},'${name}','${description}',${price},'1')`,
        (error, result) => {
            if (error) throw error;
            res.render('addProduct',{
                msg:'producto agregado'
            })
        }
    );
};