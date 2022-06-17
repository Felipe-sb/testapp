const { query } = require('express');
const con = require('../db/db');
const { v4: uuidv4 } = require('uuid');


exports.addProductToCart = (req, res) => {
    const { sku } = req.body;
    const { idUser } = req.session;
    console.log(sku, idUser);

    con.query(
        `select products_sku from cart where users_id='${idUser}'`,
        (error, result) => {
            if (error) throw error;
            console.log(result);

            if (result.length !== 0) {
                const data=result[0].products_sku.split(',')
                console.log(data)
                const newData=[...data,JSON.stringify({sku:sku})]
                console.log(newData)
                const newDataString= newData.toString();
                console.log(newDataString)
                con.query(`UPDATE cart SET products_sku ='${newDataString}' WHERE users_id='${idUser}'`,(error,result)=>{
                    if(error) throw error;
                    res.send('Producto Agregado')
                })
            } else {
                const id = uuidv4();
                const products = { sku };
                con.query(
                    `insert into cart values ('${id}', '${JSON.stringify(
                        products
                    )}', '${idUser}')`,
                    (error, result) => {
                        if (error) throw error;
                        console.log(result);
                        res.send('PRODUCTO AGREGADO');
                    }
                );
            }
        }
    );
};
