const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const con = require('../db/db');
const { promisify } = require('util');
const { v4: uuidv4 } = require('uuid');
const transporter = require('../helpers/transporter');
exports.register = async (req, res) => {
    try {
        const { username, email, pass, confirmPass } = req.body;
        const id = uuidv4();
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
                                    res.redirect('/login')
                                } catch (error) {
                                    console.log(error);
                                }
                            }
                        );
                    } else {
                        console.log('El usuario ya existe');
                    }
                }
            );
        } else {
            console.log('las contraseñas son diferentes');
        }
    } catch (error) {
        console.log(error);
    }
};
