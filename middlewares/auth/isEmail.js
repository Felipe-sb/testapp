const con = require("../../db/db")
const transporter = require('../../helpers/transporter');

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
    }
    next()
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
    }
    next()
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
    }
    next()
}


