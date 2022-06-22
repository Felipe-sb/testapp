const bcrypt = require('bcryptjs');
const con = require('../db/db');
const { v4: uuidv4 } = require('uuid');
// const transporter = require('../helpers/transporter');
const generateRandomPass = require('../helpers/generateRandomPass');
exports.login = async (req, res) => {
    try {
        const { email, pass } = req.body;
        if (!email || !pass) {
            res.render('login', {
                alert: true,
                alertTitle: 'Oooops...',
                alertMessage: 'No puede existir un campo vacio',
                alertIcon: 'error',
                showConfirmButton: true,
                timer: false,
                ruta: 'login',
                login:req.session.loggedin
            });
        } else {
            con.query(
                `select * from users where email='${email}'`,
                async (err, result) => {
                    if (err) throw err;
                    console.log(result);
                    if (result.length !== 0) {
                        const [data] = result;
                        const { password } = data;
                        console.log(pass, password);
                        console.log(await bcrypt.compare(pass, password));
                        if (await bcrypt.compare(pass, password)) {
                            req.session.loggedin=true;
                            req.session.username = data.username;
                            req.session.email = data.email;
                            req.session.idUser = data.id;
                            console.log(req.session);
                            // await transporter.sendMail({
                            //     from: '"payTooWin" <paytoowin.noreply@gmail.com>',
                            //     to: `${data.email}`,
                            //     subject: 'Nuevo inicio de sesion',
                            //     text: `${data.username} detectamos que iniciaste sesion avisanos si no fuistes tu`,
                            // });
                            res.render('login', {
                                alert: true,
                                alertTitle: 'Inicio de sesion exitoso',
                                alertMessage: '',
                                alertIcon: 'success',
                                showConfirmButton: true,
                                timer: false,
                                ruta: '',
                                login:req.session.loggedin
                            });
                        } else {
                            res.render('login', {
                                alert: true,
                                alertTitle: 'Oooops...',
                                alertMessage: 'Contraseña invalida',
                                alertIcon: 'error',
                                showConfirmButton: true,
                                timer: false,
                                ruta: 'login',
                                login:req.session.loggedin
                            });
                        }
                    } else {
                        res.render('login', {
                            alert: true,
                            alertTitle: 'Oooops...',
                            alertMessage:
                                'El correo ingresado no existe en nuestra base de datos',
                            alertIcon: 'error',
                            showConfirmButton: true,
                            timer: false,
                            ruta: 'login',
                            login:req.session.loggedin
                        });
                    }
                }
            );
        }
    } catch (error) {
        console.log(error);
    }
};
exports.sendNewPassToEmail = async (req,res,)=>{
    const {email} = req.body
    const emailSendRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if (!emailSendRegex.test(email)) {
        res.render('forgot-pass',{
            login:req.session.loggedin,
            alert:true,
            alertTitle:'Ooooops',
            alertMessage:'Por favor ingresa un corrreo electronico valido',
            alertIcon:'warning',
            showConfirmButton:true,
            timer:false,
            ruta:'forgot-pass'
        })
    }else{
        con.query(`SELECT * FROM users WHERE email='${email}'`,async (err,result)=>{
            if (result.length !== 0) {
                const newRandomPass = generateRandomPass();
                console.log(newRandomPass);
                const username = result[0].username
                const hashPass = await bcrypt.hash(newRandomPass,8)
                con.query(`UPDATE users SET password='${hashPass}' WHERE email='${email}'`,async(err,result)=>{
                    if(err) throw err;
                    console.log(result);
                    // await transporter.sendMail({
                    //     from: '"payTooWin" <paytoowin.noreply@gmail.com>',
                    //     to: `${email}`,
                    //     subject: 'Cambiar contraseña',
                    //     text: `${username} tu nueva contraseña es ${newRandomPass}`,
                    // });
                    res.render('forgot-pass', {
                        alert: true,
                        alertTitle: 'Operacion Exitosa',
                        alertMessage: 'se ha enviado tu nueva contraseña a tu correo',
                        alertIcon: 'success',
                        showConfirmButton: true,
                        timer: false,
                        ruta: 'forgot-pass',
                        login:req.session.loggedin
                    });
                })
            }else{
                res.render('forgot-pass', {
                    alert: true,
                    alertTitle: 'Oooops...',
                    alertMessage: 'El correo ingresado no existe en nuestra base de datos',
                    alertIcon: 'error',
                    showConfirmButton: true,
                    timer: false,
                    ruta: 'forgot-pass',
                    login:req.session.loggedin
                });
            }
        })
    }
}