exports.checkEmptyEmail=(req,res,next)=>{
    const {email} = req.body
    if (!email) {
        res.render('login',{
            login:req.session.loggedin,
            alert:true,
            alertTitle:'Ooooops',
            alertMessage:'Por favor ingresa un corrreo electronico',
            alertIcon:'warning',
            showConfirmButton:true,
            timer:false,
            ruta:'login'
        })
    }
    next();
}

exports.checkEmptyPass=(req,res,next)=>{
    const {pass} = req.body
    if (!pass) {
        res.render('login',{
            login:req.session.loggedin,
            alert:true,
            alertTitle:'Ooooops',
            alertMessage:'Por favor ingresa una contraseña',
            alertIcon:'warning',
            showConfirmButton:true,
            timer:false,
            ruta:'login'
        })
    }
    next();
}



exports.checkEmptyUsername=(req,res,next)=>{
    const {username} = req.body
    if (!username) {
        res.render('register',{
            login:req.session.loggedin,
            alert:true,
            alertTitle:'Ooooops',
            alertMessage:'Por favor ingresa un nombre de usuario',
            alertIcon:'warning',
            showConfirmButton:true,
            timer:false,
            ruta:'register'
        })
    }
    next();
}




exports.checkEmptyConfirmPass=(req,res,next)=>{
    const {confirmPass} = req.body
    if (!confirmPass) {
        res.render('register',{
            login:req.session.loggedin,
            alert:true,
            alertTitle:'Ooooops',
            alertMessage:'Por favor confirma la contraseña',
            alertIcon:'warning',
            showConfirmButton:true,
            timer:false,
            ruta:'register'
        })
    }
    next();
}