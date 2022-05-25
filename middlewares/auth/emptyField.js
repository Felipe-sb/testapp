exports.checkEmptyEmail=(req,res,next)=>{
    const {email} = req.body
    if (!email) {
        res.render('login',{
            login:req.session.loggedin,
            alert:true,
            alertTitle:'Ooooops',
            alertMessage:'Por favor ingresa un corrreo electronico',
            alertIcon:'alert',
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
            alertIcon:'alert',
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
            alertIcon:'alert',
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
            alertIcon:'alert',
            showConfirmButton:true,
            timer:false,
            ruta:'register'
        })
    }
    next();
}

exports.checkEmptyEmailContact=(req,res,next)=>{
    const {email} = req.body
    if (!email) {
        res.render('contact',{
            login:req.session.loggedin,
            alert:true,
            alertTitle:'Ooooops',
            alertMessage:'Por favor ingrese un correo',
            alertIcon:'alert',
            showConfirmButton:true,
            timer:false,
            ruta:'contact'
        })
    }
    next();
}

exports.checkEmptySubjet=(req,res,next)=>{
    const {subject} = req.body
    if (!subject) {
        res.render('contact',{
            login:req.session.loggedin,
            alert:true,
            alertTitle:'Ooooops',
            alertMessage:'Por favor ingrese un asunto',
            alertIcon:'alert',
            showConfirmButton:true,
            timer:false,
            ruta:'contact'
        })
    }
    next();
}

exports.checkEmptyProblem=(req,res,next)=>{
    const {text} = req.body
    if (!text) {
        res.render('contact',{
            login:req.session.loggedin,
            alert:true,
            alertTitle:'Ooooops',
            alertMessage:'Por favor detalle su problema',
            alertIcon:'alert',
            showConfirmButton:true,
            timer:false,
            ruta:'contact'
        })
    }
    next();
}