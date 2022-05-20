exports.checkEmptySku=(req,res,next)=>{
    const {sku} = req.body
    if (!sku) {
        res.render('addProduct',{
            msg:'agrega un sku'
        })
    }
    next();
}
exports.checkEmptyName=(req,res,next)=>{
    const {name} = req.body
    if(!name){
        res.render('addProduct',{msg:'el nombre debe ser ingresado'})
    }else{
        next()
    }
}
exports.checkEmptyDescription=(req,res,next)=>{
    const {description} = req.body
    if(!description){
        res.render('addProduct',{msg:'la descripcion debe ser ingresado'})
    }else{
        next()
    }
}
exports.checkEmptyPrice=(req,res,next)=>{
    const {price} = req.body
    if(!price){
        res.render('addProduct',{msg:'el precio debe ser ingresado'})
    }else{
        next()
    }
}