const bcrypt = require('bcryptjs');
const con = require('../db/db');
const { v4: uuidv4 } = require('uuid');
const transporter = require('../helpers/transporter');
exports.register = async (req, res) => {
    try {
        const { username, email, pass, confirmPass } = req.body;
        const id = uuidv4();
        if (!username || !email || !pass || !confirmPass) {
            res.render('register', {
                alert: true,
                alertTitle: 'Oooops...',
                alertMessage: 'No puede existir un campo vacio',
                alertIcon: 'error',
                showConfirmButton: true,
                timer: false,
                ruta: 'register',
            });
        } else {
            if (pass.length < 6) {
                res.render('register', {
                    alert: true,
                    alertTitle: 'Oooops...',
                    alertMessage:
                        'Tu contraseña no puede tener menos de 6 caracteres',
                    alertIcon: 'error',
                    showConfirmButton: true,
                    timer: false,
                    ruta: 'register',
                });
            } else {
                if (pass === confirmPass) {
                    console.log('las contraseñas son iguales');
                    const hashPass = await bcrypt.hash(pass, 8);
                    con.query(
                        `select email from users where email='${email}'`,
                        (err, result) => {
                            if (err) throw err;
                            if (result.length === 0) {
                                console.log('Se puede crear al usuario');
                                con.query(
                                    `INSERT INTO users VALUES ('${id}','${username}','${email}','${hashPass}')`,
                                    async (err, result) => {
                                        if (err) throw err;
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
                                            });
                                        } catch (error) {
                                            console.log(error);
                                        }
                                    }
                                );
                            } else {
                                console.log('El usuario ya existe');
                                res.render('register', {
                                    alert: true,
                                    alertTitle: 'Oooops...',
                                    alertMessage: `El usuario con el correo ${email} ya existe`,
                                    alertIcon: 'error',
                                    showConfirmButton: true,
                                    timer: false,
                                    ruta: 'register',
                                });
                            }
                        }
                    );
                } else {
                    console.log('las contraseñas son diferentes');
                    res.render('register', {
                        alert: true,
                        alertTitle: 'Oooops...',
                        alertMessage: 'Las contraseñas deben ser iguales',
                        alertIcon: 'error',
                        showConfirmButton: true,
                        timer: false,
                        ruta: 'register',
                    });
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
};
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
                            await transporter.sendMail({
                                from: '"payTooWin" <paytoowin.noreply@gmail.com>',
                                to: `${data.email}`,
                                subject: 'Nuevo inicio de sesion',
                                text: `${data.username} detectamos que iniciaste sesion avisanos si no fuistes tu`,
                            });
                            res.render('login', {
                                alert: true,
                                alertTitle: 'Inicio de sesion exitoso',
                                alertMessage: '',
                                alertIcon: 'success',
                                showConfirmButton: true,
                                timer: false,
                                ruta: '',
                            });
                        } else {
                            //TODO crear alerta
                            res.render('login', {
                                alert: true,
                                alertTitle: 'Oooops...',
                                alertMessage: 'Contraseña invalida',
                                alertIcon: 'error',
                                showConfirmButton: true,
                                timer: false,
                                ruta: 'login',
                            });
                        }
                    } else {
                        //TODO crear alerta
                        res.render('login', {
                            alert: true,
                            alertTitle: 'Oooops...',
                            alertMessage:
                                'El correo ingresado no existe en nuestra base de datos',
                            alertIcon: 'error',
                            showConfirmButton: true,
                            timer: false,
                            ruta: 'login',
                        });
                    }
                }
            );
        }
    } catch (error) {
        console.log(error);
    }
};
exports.loggedIn= (req,res)=>{
    console.log(req.session);
    if (req.session.loggedin) {
        res.render('index',{
            login:true,
            id:req.session.idUser,
            username:req.session.username,
            email:req.session.email
        })
    }else{
        res.render('index',{
            login:false,
        })
    }
}
exports.logout=(req,res)=>{
    req.session.loggedin=false
    req.session.username=null
    req.session.idUser=null
    req.session.email=null
    console.log(req.session);
    res.render('logout');
}