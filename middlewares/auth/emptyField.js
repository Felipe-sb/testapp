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
    }else{
        next();
        }
}

exports.checkEmptyEmailRegister=(req,res,next)=>{
    const {email} = req.body
    if (!email) {
        res.render('register',{
            login:req.session.loggedin,
            alert:true,
            alertTitle:'Ooooops',
            alertMessage:'Por favor ingresa un corrreo electronico',
            alertIcon:'warning',
            showConfirmButton:true,
            timer:false,
            ruta:'register'
        })
    }else{
        next();
        }
}

exports.checkEmptyPass=(req,res,next)=>{
    
    const {pass} = req.body
    const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,15}$/
    if (!passRegex.test(pass)) {
        res.render('login',{
            login:req.session.loggedin,
            alert:true,
            alertTitle:'Ooooops',
            alertMessage:'Por favor ingresa una contraseña valida',
            alertIcon:'warning',
            showConfirmButton:true,
            timer:false,
            ruta:'login'
        })
    }else{
        next()
        }
}

exports.checkEmptyPassRegister=(req,res,next)=>{
    const {pass} = req.body
    if (!pass) {
        res.render('register',{
            login:req.session.loggedin,
            alert:true,
            alertTitle:'Ooooops',
            alertMessage:'Por favor ingresa una contraseña',
            alertIcon:'warning',
            showConfirmButton:true,
            timer:false,
            ruta:'register'
        })
    }else{
        next();
        }
}



exports.checkEmptyUsername=(req,res,next)=>{
    const {username} = req.body
    const usernameRegex= /^(?!\s*$).+/
    if (!usernameRegex.test(username)) {
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
    }else{
        next();
        }
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
    }else{
        next();
        }
}




exports.checkEmptyEmailContact=(req,res,next)=>{
    const {email} = req.body
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if (!emailRegex.test(email)) {
        res.render('contact',{
            login:req.session.loggedin,
            alert:true,
            alertTitle:'Ooooops',
            alertMessage:'Por favor ingrese un correo valido',
            alertIcon:'warning',
            showConfirmButton:true,
            timer:false,
            ruta:'contact'
        })
    }else{
        next();
        }
}

exports.checkEmptySubjet=(req,res,next)=>{
    const {subject} = req.body
    const subjectRegex= /^(?!\s*$).+/
    if (!subjectRegex.test(subject)) {
        res.render('contact',{
            login:req.session.loggedin,
            alert:true,
            alertTitle:'Ooooops',
            alertMessage:'Por favor ingrese un asunto',
            alertIcon:'warning',
            showConfirmButton:true,
            timer:false,
            ruta:'contact'
        })
    }else{
        next();
        }
}

exports.checkEmptyName=(req,res,next)=>{
    const {Nombre} = req.body
    const nameRegex= /^(?!\s*$).+/
    if (!nameRegex.test(Nombre)) {
        res.render('contact',{
            login:req.session.loggedin,
            alert:true,
            alertTitle:'Ooooops',
            alertMessage:'Por favor ingrese su nombre',
            alertIcon:'warning',
            showConfirmButton:true,
            timer:false,
            ruta:'contact'
        })
    }else{
    next();
    }
}

exports.checkEmptyProblem=(req,res,next)=>{
    const {text} = req.body
    const textRegex= /^(?!\s*$).+/
    if (!textRegex.test(text)) {
        res.render('contact',{
            login:req.session.loggedin,
            alert:true,
            alertTitle:'Ooooops',
            alertMessage:'Por favor detalle su problema',
            alertIcon:'warning',
            showConfirmButton:true,
            timer:false,
            ruta:'contact'
        })
    }else{
        next();
        }
}