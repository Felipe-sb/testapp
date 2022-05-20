const con = require('../../db/db');

exports.checkEmailDB = (req, res,next) => {
    const { email } = req.body;
    con.query(
        `select email from users where email='${email}'`,
        (err, result) => {
            if (err) throw err;
            if (result.length !== 0) {
                res.render('register', {
                    alert: true,
                    alertTitle: 'Oooops...',
                    alertMessage: `El usuario con el correo ${email} ya existe`,
                    alertIcon: 'error',
                    showConfirmButton: true,
                    timer: false,
                    ruta: 'register',
                    login: req.session.loggedin,
                });
            }else {
                next()
            }
            
        }
        
    );
    

    console.log('SAlIO DE LA QUERY')
    
};
