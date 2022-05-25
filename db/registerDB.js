const { v4: uuidv4 } = require('uuid');
const con = require('./db');
const transporter = require('../helpers/transporter');
const bcryptjs = require('bcryptjs');

exports.registerDB=async(req,res)=>{
    const {username,email,pass,confirmPass} = req.body
    console.log(username,email,pass,confirmPass)
    const id=uuidv4()
    const hashPass = await bcryptjs.hash(pass,8)
    con.query(
        `INSERT INTO users VALUES ('${id}','${username}','${email}','${hashPass}')`,async(error,result)=>{
            if(error)throw error
            console.log(result)
            try {
                console.log(result);
                await transporter.sendMail({
                    from: '"payTooWin" <paytoowin.noreply@gmail.com>',
                    to: `${email}`,
                    subject: 'account created',
                    text: `Bienvenido a payTooWin ${username} ahora disfrutaras mucho más de tus juegos preferidos comprando tu primera cuenta`,
                });
                res.render('register', {
                    alert: true,
                    alertTitle:
                        'Operacion Exitosa!!!',
                    alertMessage: `Usuario creado con exito`,
                    alertIcon: 'success',
                    showConfirmButton: true,
                    timer: false,
                    ruta: 'login',
                    login:req.session.loggedin
                });
            } catch (error) {
                console.log(error);
            }

        })
   
}