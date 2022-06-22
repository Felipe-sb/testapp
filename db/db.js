const mysql = require('mysql');
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'paytoowin',
    
})
con.connect((err)=>{
    if(err)throw err
    console.log('Conexion exitosa a la base de datos');
})
module.exports=con;