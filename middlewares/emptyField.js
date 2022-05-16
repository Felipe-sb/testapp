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
