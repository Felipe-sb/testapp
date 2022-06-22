const con = require("../../db/db")
// const transporter = require('../../helpers/transporter');

exports.isEmail=(req,res,next)=>{
    const {email} = req.body
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if (!emailRegex.test(email)) {
        res.render('login',{
            login:req.session.loggedin,
            alert:true,
            alertTitle:'Ooooops',
            alertMessage:'Por favor ingresa un corrreo electronico valido',
            alertIcon:'warning',
            showConfirmButton:true,
            timer:false,
            ruta:'login'
        })
    }else{
        next()
        }
    
}

exports.isEmailRegister=(req,res,next)=>{
    const {email} = req.body
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if (!emailRegex.test(email)) {
        res.render('register',{
            login:req.session.loggedin,
            alert:true,
            alertTitle:'Ooooops',
            alertMessage:'Por favor ingresa un corrreo electronico valido',
            alertIcon:'warning',
            showConfirmButton:true,
            timer:false,
            ruta:'register'
        })
    }else{
    next()
    }
}

exports.checkPass=(req,res,next)=>{
    const {pass} = req.body
    const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,15}$/
    if (!passRegex.test(pass)) {
        res.render('register',{
            login:req.session.loggedin,
            alert:true,
            alertTitle:'Ooooops',
            alertMessage:'Por favor ingresa una contraseña alfanumerica ej:A1b2C3d4',
            alertIcon:'warning',
            showConfirmButton:true,
            timer:false,
            ruta:'register'
        })
    }else{
        next()
        }
}

exports.checkConfirmPass=(req,res,next)=>{
    const {confirmPass} = req.body
    const confirmPassRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,15}$/
    if (!confirmPassRegex.test(confirmPass)) {
        res.render('register',{
            login:req.session.loggedin,
            alert:true,
            alertTitle:'Ooooops',
            alertMessage:'Por favor ingresa una contraseña alfanumerica ej:A1b2C3d4',
            alertIcon:'warning',
            showConfirmButton:true,
            timer:false,
            ruta:'register'
        })
    }else{
        next()
        }
}

exports.confirmPass=(req,res,next)=>{
    const {pass} = req.body
    const {confirmPass} = req.body
    if (pass !== confirmPass) {
        res.render('register',{
            login:req.session.loggedin,
            alert:true,
            alertTitle:'Ooooops',
            alertMessage:'Las contraseñas deben ser iguales',
            alertIcon:'warning',
            showConfirmButton:true,
            timer:false,
            ruta:'register'
        })
    }else{
        next()
        }
}

exports.isEmailContact=(req,res,next)=>{
    const {email} = req.body
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if (!emailRegex.test(email)) {
        res.render('contact',{
            login:req.session.loggedin,
            alert:true,
            alertTitle:'Ooooops',
            alertMessage:'Por favor ingresa un corrreo electronico valido Ej: problema@contact.com',
            alertIcon:'warning',
            showConfirmButton:true,
            timer:false,
            ruta:'contact'
        })
    }else{
        next()
        }
}


